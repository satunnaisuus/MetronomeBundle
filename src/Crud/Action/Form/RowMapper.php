<?php

namespace Satunnaisuus\MetronomeBundle\Crud\Action\Form;

use Satunnaisuus\MetronomeBundle\Crud\Action\Form\FormElementType\ColumnType;

class RowMapper
{
    private array $columns = [];

    private AbstractInnerFormMapperFactory $innerFormMapperFactory;

    private FormElementTypeFactory $formElementTypeFactory;

    public function __construct(AbstractInnerFormMapperFactory $innerFormMapperFactory, FormElementTypeFactory $formElementTypeFactory)
    {
        $this->innerFormMapperFactory = $innerFormMapperFactory;
        $this->formElementTypeFactory = $formElementTypeFactory;
    }

    public function column(callable $column, array $options = []): self
    {
        $mapper = $this->innerFormMapperFactory->create();
        $column($mapper);
        $options['elements'] = $mapper->getElements();
        $this->columns[] = new FormElementConfig(
            $this->formElementTypeFactory->get(ColumnType::class),
            $options
        );
        return $this;
    }

    public function getColumns(): array
    {
        return $this->columns;
    }
}