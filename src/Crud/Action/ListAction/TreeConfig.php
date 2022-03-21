<?php

namespace Satunnaisuus\MetronomeBundle\Crud\Action\ListAction;

class TreeConfig
{
    private string $toggleColumn;

    private string $parentProperty;

    public function __construct(string $toggleColumn, string $parentProperty)
    {
        $this->toggleColumn = $toggleColumn;
        $this->parentProperty = $parentProperty;
    }

    public function getToggleColumn(): string
    {
        return $this->toggleColumn;
    }

    public function getParentProperty(): string
    {
        return $this->parentProperty;
    }
}