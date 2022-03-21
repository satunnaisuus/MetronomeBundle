<?php

namespace Satunnaisuus\MetronomeBundle;

use Satunnaisuus\MetronomeBundle\Dashboard\DashboardResource;
use Satunnaisuus\MetronomeBundle\Menu\MenuBuilder;
use Symfony\Component\DependencyInjection\ContainerInterface;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;

abstract class AbstractAdminPanel
{
    const QUERY_PARAM_RESOURCE = 'resource';

    const DEFAULT_RESOURCE = 'dashboard';

    protected ContainerInterface $container;

    public function __construct(ContainerInterface $container)
    {
        $this->container = $container;
    }

    abstract public function configureMenu(MenuBuilder $menuBuilder): void;

    public function getPanelName(): string
    {
        return 'Панель администратора';
    }

    public function configureResources(ResourceCollection $collection): void
    {
        $collection->add('dashboard', DashboardResource::class);
    }

    public function handleRequest(Request $request): Response
    {
        $resources = new ResourceCollection();
        $this->configureResources($resources);

        list($resourceName, $resource) = $this->resolveResource($request, $resources);
        list($actionName, $action) = $resource->resolveAction($request);

        $menuBuilder = new MenuBuilder();
        $this->configureMenu($menuBuilder);
        $menu = $menuBuilder->getMenu();
        $menu->setActive($resourceName, $actionName);

        $context = new AdminContext($this, $request, $resources, $menu, $resourceName, $resource, $actionName, $action);

        return $action->handle($context);
    }

    /**
     * @return [string, AbstractResource]
     */
    protected function resolveResource(Request $request, ResourceCollection $resources): array
    {
        $name = $request->query->get(self::QUERY_PARAM_RESOURCE, self::DEFAULT_RESOURCE);
        $resourceClass = $resources->get($name);
        return [
            $name,
            $this->container->get($resourceClass)
        ];
    }
}