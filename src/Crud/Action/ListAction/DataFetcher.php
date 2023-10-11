<?php

namespace Satunnaisuus\MetronomeBundle\Crud\Action\ListAction;

use Satunnaisuus\MetronomeBundle\Crud\AbstractCrudResource;
use Satunnaisuus\MetronomeBundle\Crud\EntityClassConfigurator;
use Doctrine\Common\Collections\Criteria;
use Doctrine\ORM\EntityManagerInterface;
use Doctrine\ORM\QueryBuilder;
use Doctrine\ORM\Tools\Pagination\Paginator;
use Symfony\Component\PropertyAccess\PropertyAccessorInterface;
use Symfony\Component\PropertyAccess\Exception\RuntimeException;

class DataFetcher
{
    private EntityManagerInterface $entityManager;

    private PropertyAccessorInterface $propertyAccessor;

    public function __construct(EntityManagerInterface $entityManager, PropertyAccessorInterface $propertyAccessor)
    {
        $this->entityManager = $entityManager;
        $this->propertyAccessor = $propertyAccessor;
    }

    public function fetch(ListQuery $query, AbstractCrudResource $resource, ListConfigurator $configuration): ListDataResult
    {
        $qb = $this->entityManager->createQueryBuilder();
        $entityClassConfig = $resource->getEntityClassConfig();
        $class = $entityClassConfig->getBaseClass();

        $rootAlias = 'i';

        $qb->from($class, $rootAlias);
        $qb->select($rootAlias);

        if ($query->getSearchQuery()) {
            $this->handleSearch($query->getSearchQuery(), $configuration->getSearchableFields(), $qb);
        }

        if ($configuration->getItemsPerPage() !== null) {
            $qb->setMaxResults($configuration->getItemsPerPage());
            $qb->setFirstResult($configuration->getItemsPerPage() * ($query->getPage() - 1));
        }

        if ($configuration->isTree() && ! $query->hasSearch()) {
            $qb->andWhere($qb->expr()->isNull($rootAlias . '.' . $configuration->getTreeConfig()->getParentProperty()));
        }

        foreach ($query->getFilters() as $filterName => $filterValue) {
            $filter = $configuration->getFilter($filterName);

            if ($filter === null) {
                continue;
            }

            $filter->applyFilter($filterValue, $qb);
        }

        if ($query->getSortField() !== null) {
            $sortingColumn = $configuration->getColumns()[$query->getSortField()];
            $propertySort = $sortingColumn->getOptions()['property_sort'];

            if ($propertySort !== null) {
                $parts = explode('.', $propertySort);
                $metadata = $this->entityManager->getClassMetadata($class);
                $alias = $rootAlias;
                $tempParts = $parts;
                $sort = null;

                while (count($tempParts) > 0) {
                    $path = implode('.', $parts);
                    if ($metadata->hasField($path)) {
                        $sort = $alias . '.' . $path;
                        break;
                    }

                    if (count($tempParts) === 1 && $metadata->hasAssociation($tempParts[0])) {
                        $filedName = $tempParts[0];
                        $metadata = $this->entityManager->getClassMetadata(
                            $metadata->getAssociationMapping($filedName)['targetEntity']
                        );
                        array_shift($parts);
                        $tempParts = $parts;
                        $newAlias = $alias . '__' . $filedName;
                        $qb->leftJoin($alias . '.' . $filedName, $newAlias);
                        $sort = $alias . '.' . $filedName;
                        $alias = $newAlias;

                        continue;
                    }

                    array_pop($tempParts);
                }

                if ($sort !== null) {
                    $qb->orderBy($sort, $query->getSortReverse() ? 'ASC' : 'DESC');
                }
            }
        } else if ($configuration->getDefaultOrder() !== null) {
            $qb->orderBy(...$configuration->getDefaultOrder());
        }

        $result = [];
        $paginator = new Paginator($qb->getQuery());

        foreach ($paginator as $entity) {
            $result[] = $this->createResultItem($entity, $configuration);
        }

        if ($configuration->isTree() && ! $query->hasSearch()) {
            $result = $this->getChildsRecursive($result, $configuration, $entityClassConfig);
        }

        return new ListDataResult($result, $paginator->count(), $configuration->getItemsPerPage());
    }

    /**
     * @param ListResultItem[] $items
     * @param ListConfigurator $config
     * @param EntityClassConfigurator $entityClassConfig
     * @param int $level
     * @return ListResultItem[]
     */
    private function getChildsRecursive(array $items, ListConfigurator $config, EntityClassConfigurator $entityClassConfig, int $level = 0)
    {
        $parents = array_map(function (ListResultItem $item) {
            return $item->getEntity();
        }, $items);

        $criteria = new Criteria();
        $criteria->where(Criteria::expr()->in($config->getTreeConfig()->getParentProperty(), $parents));
        $nextItems = array_map(
            function ($entity) use ($config, $entityClassConfig, $level) {
                return $this->createResultItem($entity, $config, $level + 1);
            },
            $this->entityManager
                ->getRepository($entityClassConfig->getBaseClass())
                ->matching($criteria)
                ->toArray()
        );

        if (count($nextItems) > 0) {
            $nextItems = $this->getChildsRecursive($nextItems, $config, $entityClassConfig, $level + 1);
        }

        foreach ($nextItems as $nextItem) {
            foreach ($items as $item) {
                $parent = $this->propertyAccessor->getValue($nextItem->getEntity(), $config->getTreeConfig()->getParentProperty());
                if ($parent === $item->getEntity()) {
                    $item->addChild($nextItem);
                }
            }
        }

        return $items;
    }

    public function findEntity(string $class, $id)
    {
        return $this->entityManager->getRepository($class)->find($id);
    }

    private function createResultItem($entity, ListConfigurator $config, int $level = 0): ListResultItem
    {
        $values = [];

        foreach ($config->getColumns() as $column) {
            try {
                $value = $this->propertyAccessor->getValue($entity, $column->getPropertyPath());
            } catch (RuntimeException $exception) {
                $value = null;
            }

            $values[$column->getPropertyPath()] = $column->convertValue($value);
        }

        return new ListResultItem($entity, $values, [], $level);
    }

    private function handleSearch(string $query, array $searchableFields, QueryBuilder $queryBuilder)
    {
        $rootEntity = $queryBuilder->getRootEntities()[0] ?? null;
        $rootAlias = $queryBuilder->getRootAliases()[0] ?? null;

        if ($rootEntity === null || $rootAlias === null) {
            throw new \Exception();
        }

        $metadata = $this->entityManager->getClassMetadata($rootEntity);
        $condition = $queryBuilder->expr()->orX();
        $appliedFields = [];
        foreach ($searchableFields as $field) {
            if ($metadata->hasField($field)) {
                $this->addSearchExpressionToCondition($condition, $queryBuilder, $rootAlias, $field, $query);
                $appliedFields[] = $field;
            }
        }

        foreach (array_diff($searchableFields, $appliedFields) as $field) {
            $this->addSearchExpressionToConditionWithAssociation($field, $rootEntity, $rootAlias, $queryBuilder, $condition, $query);
        }

        if ($condition->count() !== 0) {
            $queryBuilder->andWhere($condition);
        }
    }

    private function addSearchExpressionToCondition($condition, QueryBuilder $queryBuilder, $alias, string $field, string $query)
    {
        $condition->add(
            $queryBuilder->expr()->like(
                $queryBuilder->expr()->lower($alias . '.' . $field),
                $queryBuilder->expr()->literal('%' . mb_strtolower($query) . '%')
            )
        );
    }

    private function addSearchExpressionToConditionWithAssociation(string $field, string $entity, string $alias, QueryBuilder $queryBuilder, $condition, $query)
    {
        $fieldParts = explode('.', $field);

        if (count($fieldParts) === 0) {
            return;
        }

        $metadata = $this->entityManager->getClassMetadata($entity);

        if ($metadata->hasAssociation($fieldParts[0])) {
            $newAlias = 'search_' . $alias . '_' . $fieldParts[0];

            if (!in_array($newAlias, $queryBuilder->getAllAliases())) {
                $queryBuilder->leftJoin($alias . '.' . $fieldParts[0], $newAlias);
            }

            $this->addSearchExpressionToConditionWithAssociation(
                implode('.', array_slice($fieldParts, 1)),
                $metadata->getAssociationTargetClass($fieldParts[0]),
                $newAlias,
                $queryBuilder,
                $condition,
                $query
            );
        } elseif ($metadata->hasField($field)) {
            $this->addSearchExpressionToCondition(
                $condition,
                $queryBuilder,
                $alias,
                $field,
                $query
            );
        }
    }
}