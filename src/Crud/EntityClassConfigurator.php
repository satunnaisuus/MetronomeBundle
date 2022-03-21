<?php

namespace Satunnaisuus\MetronomeBundle\Crud;

use Satunnaisuus\MetronomeBundle\Dto\EntityInheritanceDto;

class EntityClassConfigurator
{
    private string $routeParam = 'type';

    protected string $entityClass;

    protected array $inheritanceMap = [];

    public function setBaseClass(string $entityClass)
    {
        $this->entityClass = $entityClass;
    }

    public function getBaseClass(): string
    {
        return $this->entityClass;
    }

    public function addInheritance(string $name, string $class, string $label): self
    {
        $this->inheritanceMap[$name] = new EntityInheritanceDto($name, $class, $label);

        return $this;
    }

    public function getInheritance(string $name)
    {
        return $this->inheritanceMap[$name];
    }

    public function getRouteParam(): string
    {
        return $this->routeParam;
    }

    public function setRouteParam(string $param)
    {
        $this->routeParam = $param;
    }

    public function getInheritanceMap(): array
    {
        return $this->inheritanceMap;
    }
}