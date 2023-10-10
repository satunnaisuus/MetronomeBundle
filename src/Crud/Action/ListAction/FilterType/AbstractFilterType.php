<?php

namespace Satunnaisuus\MetronomeBundle\Crud\Action\ListAction\FilterType;

use Doctrine\ORM\QueryBuilder;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\OptionsResolver\OptionsResolver;

abstract class AbstractFilterType
{
    abstract public function applyFilter($value, QueryBuilder $builder, array $options): bool;

    abstract public function buildForm(FormBuilderInterface $builder, array $options): void;

    public function configureOptions(OptionsResolver $resolver): void
    {
        $resolver->setRequired('id');
        $resolver->setRequired('property');
        $resolver->setRequired('label');
    }

    public function isEmptyValue($value): bool
    {
        return $value === null;
    }

    public function prepareProperty(QueryBuilder $queryBuilder, string $propertyPath): string
    {
        $entityManager = $queryBuilder->getEntityManager();
        $rootClass = $queryBuilder->getRootEntities()[0] ?? null;
        $rootAlias = $queryBuilder->getRootAliases()[0] ?? null;
        $metadata = $entityManager->getClassMetadata($rootClass);
        $parts = explode('.', $propertyPath);
        $tempParts = $parts;
        $alias = $rootAlias;
        $result = $alias . '.' . $propertyPath;

        while (count($tempParts) > 0) {
            $path = implode('.', $parts);

            if ($metadata->hasField($path)) {
                $result = $alias . '.' . $path;
                break;
            }

            if (count($tempParts) === 1 && $metadata->hasAssociation($tempParts[0])) {
                $filedName = $tempParts[0];
                $metadata = $entityManager->getClassMetadata(
                    $metadata->getAssociationMapping($filedName)['targetEntity']
                );
                array_shift($parts);
                $tempParts = $parts;
                $newAlias = 'filter__' . $alias . '__' . $filedName;

                if (! in_array($newAlias, $queryBuilder->getAllAliases())) {
                    $queryBuilder->join($alias . '.' . $filedName, $newAlias);
                }

                $queryBuilder->join($alias . '.' . $filedName, $newAlias);
                $result = $alias . '.' . $filedName;
                $alias = $newAlias;

                continue;
            }

            array_pop($tempParts);
        }

        return $result;
    }
}