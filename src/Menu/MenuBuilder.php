<?php

namespace Satunnaisuus\MetronomeBundle\Menu;

class MenuBuilder
{
    protected Menu $menu;

    public function __construct()
    {
        $this->menu = new Menu();
    }

    public function resource(string $label, string $resource, string $action, array $options = []): self
    {
        $this->menu->addItem(new ResourceItem($label, $resource, $action, $options));
        return $this;
    }

    public function route(string $label, string $route, array $params = [], array $options = []): self
    {
        $this->menu->addItem(new RouteItem($label, $route, $params, $options));
        return $this;
    }

    public function group($label, callable $configureChild, array $options = []): self
    {
        $group = new MenuGroup($label, $this->menu, $options);
        $this->menu->addItem($group);
        $groupBuilder = new MenuGroupBuilder($group);
        $configureChild($groupBuilder);
        return $this;
    }

    public function getMenu(): Menu
    {
        return $this->menu;
    }
}