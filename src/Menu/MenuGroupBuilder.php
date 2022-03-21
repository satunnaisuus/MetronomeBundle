<?php

namespace Satunnaisuus\MetronomeBundle\Menu;

class MenuGroupBuilder
{
    protected array $items;

    protected MenuGroup $group;

    public function __construct(MenuGroup $group)
    {
        $this->group = $group;
    }

    public function resource(string $label, string $resource, string $action, array $options = []): self
    {
        $this->group->addItem(new ResourceItem($label, $resource, $action, $options));
        return $this;
    }

    public function route(string $label, string $route, array $params = [], array $options = []): self
    {
        $this->group->addItem(new RouteItem($label, $route, $params, $options));
        return $this;
    }
}