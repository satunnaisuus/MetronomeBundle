<?php

namespace Satunnaisuus\MetronomeBundle\Crud\Action\ListAction;

use Satunnaisuus\MetronomeBundle\Crud\FieldTypeGuesser;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Component\DependencyInjection\ContainerInterface;

class ListConfigurator
{
    private string $id;

    private string $class;

    private ?int $itemsPerPage = 20;

    private ContainerInterface $container;

    private FieldTypeGuesser $typeGuesser;

    private EntityManagerInterface $entityManager;

    private ?TreeConfig $treeConfig = null;

    private bool $showCheckboxes = false;

    private FiltersConfigurator $filtersConfigurator;

    private array $searchableFields = [];

    private array $columns = [];

    private ?array $defaultOrder = null;

    private $rowClass = null;

    public function __construct(
        string $class,
        string $id,
        ContainerInterface $container,
        FieldTypeGuesser $typeGuesser,
        EntityManagerInterface $entityManager
    )
    {
        $this->id = $id;
        $this->class = $class;
        $this->container = $container;
        $this->typeGuesser = $typeGuesser;
        $this->entityManager = $entityManager;
        $this->filtersConfigurator = new FiltersConfigurator($container);
    }

    public function configureTree(string $toggleColumn, string $parentProperty): self
    {
        $this->treeConfig = new TreeConfig($toggleColumn, $parentProperty);
        return $this;
    }

    public function addColumn(string $propertyPath, ?string $type = null, ?array $options = null): self
    {
        if ($type === null) {
            $type = $this->typeGuesser->guess($this->class, $propertyPath);
        }

        if (!array_key_exists('property_sort', $options) || $options['property_sort'] === null) {
            $metadata = $this->entityManager->getClassMetadata($this->class);
            $parts = explode('.', $propertyPath);

            $tempParts = $parts;

            $isSortable = false;

            while (count($tempParts) > 0) {
                $path = implode('.', $parts);
                if ($metadata->hasField($path)) {
                    $isSortable = true;
                    break;
                }

                if (count($tempParts) === 1 && $metadata->hasAssociation($tempParts[0])) {
                    $isCollection = $metadata->isCollectionValuedAssociation($tempParts[0]);

                    $filedName = $tempParts[0];
                    $metadata = $this->entityManager->getClassMetadata(
                        $metadata->getAssociationMapping($filedName)['targetEntity']
                    );
                    array_shift($parts);
                    $tempParts = $parts;

                    if (count($parts) === 0) {
                        $isSortable = ! $isCollection;
                        break;
                    }

                    continue;
                }

                array_pop($tempParts);
            }

            if ($isSortable) {
                $options['property_sort'] = $propertyPath;
            }
        }


        $this->columns[$propertyPath] = new Column(
            $propertyPath,
            $this->container->get($type),
            $options === null ? [] : $options
        );

        return $this;
    }

    public function setShowCheckboxes(bool $show = true): self
    {
        $this->showCheckboxes = $show;
        return $this;
    }

    public function removeColumn($name): self
    {
        unset($this->columns[$name]);
        return $this;
    }

    public function getColumns(): array
    {
        return $this->columns;
    }

    public function setSearchableFields(array $searchableFields): self
    {
        $this->searchableFields = $searchableFields;
        return $this;
    }

    public function getSearchableFields(): array
    {
        return $this->searchableFields;
    }

    public function setItemsPerPage(?int $count): void
    {
        $this->itemsPerPage = $count;
    }

    public function getItemsPerPage(): ?int
    {
        return $this->itemsPerPage;
    }

    public function getTreeConfig(): ?TreeConfig
    {
        return $this->treeConfig;
    }

    public function isTree(): bool
    {
        return $this->treeConfig !== null;
    }

    public function showCheckboxes(): bool
    {
        return $this->showCheckboxes;
    }

    public function getId(): string
    {
        return $this->id;
    }

    public function getFiltersConfigurator(): FiltersConfigurator
    {
        return $this->filtersConfigurator;
    }

    public function getFilters(): array
    {
        return $this->filtersConfigurator->getFilters();
    }

    public function getFilter(string $name): FilterConfig
    {
        return $this->filtersConfigurator->getFilter($name);
    }

    public function setDefaultOrder($field, $order): self
    {
        $this->defaultOrder = [$field, $order];
        return $this;
    }

    public function getDefaultOrder(): ?array
    {
        return $this->defaultOrder;
    }

    public function getRowClass()
    {
        return $this->rowClass;
    }

    public function rowClass(?callable $rowClass): void
    {
        $this->rowClass = $rowClass;
    }
}