<?php

namespace Satunnaisuus\MetronomeBundle;

use Satunnaisuus\MetronomeBundle\Menu\Menu;
use Symfony\Component\HttpFoundation\Request;

class AdminContext
{
    private AbstractAdminPanel $panel;

    private Request $request;

    private ResourceCollection $resources;

    private string $resourceName;

    private AbstractResource $resource;

    private string $actionName;

    private ActionConfig $action;

    private Menu $menu;

    public function __construct(AbstractAdminPanel $panel, Request $request, ResourceCollection $resources, Menu $menu, string $resourceName, AbstractResource $resource, string $actionName, ActionConfig $action)
    {
        $this->panel = $panel;
        $this->request = $request;
        $this->resources = $resources;
        $this->menu = $menu;
        $this->resourceName = $resourceName;
        $this->resource = $resource;
        $this->actionName = $actionName;
        $this->action = $action;
    }

    public function getPanel(): AbstractAdminPanel
    {
        return $this->panel;
    }

    public function getResourceName(): string
    {
        return $this->resourceName;
    }

    public function getResource(): AbstractResource
    {
        return $this->resource;
    }

    public function getRequest(): Request
    {
        return $this->request;
    }

    public function getActionName(): string
    {
        return $this->actionName;
    }

    public function getAction(): ActionConfig
    {
        return $this->action;
    }

    public function getResources(): ResourceCollection
    {
        return $this->resources;
    }

    public function getMenu(): Menu
    {
        return $this->menu;
    }
}