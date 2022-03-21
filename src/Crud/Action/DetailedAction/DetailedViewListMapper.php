<?php

namespace Satunnaisuus\MetronomeBundle\Crud\Action\DetailedAction;

class DetailedViewListMapper
{
    protected array $items = [];

    public function __construct(private $innerMapperFactory)
    {

    }

    public function item(string $label, string $property, string $type = null, array $options = []): self
    {
        $mapper = ($this->innerMapperFactory)();
        $mapper->property($property, $type, $options);
        $this->items[] = [
            'label' => $label,
            'element' => $mapper->getElements()[0],
        ];
        return $this;
    }

    public function getItems(): array
    {
        return $this->items;
    }
}