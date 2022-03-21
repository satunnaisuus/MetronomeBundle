<?php

namespace Satunnaisuus\MetronomeBundle\Crud\Action\ListAction;

use Symfony\Component\DependencyInjection\ContainerInterface;

class FiltersConfigurator
{
    private ContainerInterface $container;

    private array $filters = [];

    public function __construct(ContainerInterface $container)
    {
        $this->container = $container;
    }

    public function addFilter(string $id, string $type, array $options = []): self
    {
        $this->filters[$id] = new FilterConfig(
            $id,
            $this->container->get($type),
            $options
        );
        return $this;
    }

    /**
     * @return FilterConfig[]
     */
    public function getFilters(): array
    {
        return $this->filters;
    }

    public function getFilter(string $id): ?FilterConfig
    {
        return array_key_exists($id, $this->filters) ? $this->filters[$id] : null;
    }
}