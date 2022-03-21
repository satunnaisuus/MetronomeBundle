<?php

namespace Satunnaisuus\MetronomeBundle\Crud\Action\ListAction;

class ListResultItem
{
    private $entity;

    private array $values;

    private array $childs;

    private int $level;

    public function __construct($entity, array $values, array $childs, int $level)
    {
        $this->entity = $entity;
        $this->values = $values;
        $this->childs = $childs;
        $this->level = $level;
    }

    public function getEntity()
    {
        return $this->entity;
    }

    public function getValues(): array
    {
        return $this->values;
    }

    public function getChilds(): array
    {
        return $this->childs;
    }

    public function addChild($item): void
    {
        $this->childs[] = $item;
    }

    public function getLevel(): int
    {
        return $this->level;
    }
}