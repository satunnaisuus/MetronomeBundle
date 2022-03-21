<?php

namespace Satunnaisuus\MetronomeBundle\Dto;

class EntityInheritanceDto
{
    private string $name;

    private string $class;

    private string $label;

    public function __construct(string $name, string $class, string $label)
    {
        $this->name = $name;
        $this->class = $class;
        $this->label = $label;
    }

    public function getName(): string
    {
        return $this->name;
    }

    public function getClass(): string
    {
        return $this->class;
    }

    public function getLabel(): string
    {
        return $this->label;
    }
}