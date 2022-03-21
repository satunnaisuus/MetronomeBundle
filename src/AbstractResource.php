<?php

namespace Satunnaisuus\MetronomeBundle;

use Symfony\Component\DependencyInjection\ParameterBag\ParameterBagInterface;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Contracts\Service\ServiceSubscriberInterface;
use Symfony\Contracts\Service\ServiceSubscriberTrait;

abstract class AbstractResource implements ServiceSubscriberInterface
{
    use ServiceSubscriberTrait;

    public function getActions(): ActionCollection
    {
        $actionsBuilder = $this->container->get('actions_builder');
        $this->configureActions($actionsBuilder);
        return  $actionsBuilder->build();
    }

    abstract public function configureActions(ActionsBuilder $builder);

    abstract public function getDefaultActionName(): string;

    public function getViewParameters(AdminContext $context): array
    {
        return [
            'main_title' => $context->getPanel()->getPanelName(),
            'menu' => $context->getMenu()->toArray(),
            'resourceName' => $context->getResourceName(),
        ];
    }

    /**
     * @param Request $request
     * @return [string, AbstractAction]
     */
    public function resolveAction(Request $request): array
    {
        $actionName = $request->get('action', $this->getDefaultActionName());
        return [
            $actionName,
            $this->getActions()->get($actionName)
        ];
    }

    public function getResourceHash(): string
    {
        return md5(get_class($this));
    }

    public static function getSubscribedServices()
    {
        return [
            'actions_builder' => ActionsBuilder::class,
            'params' => ParameterBagInterface::class,
        ];
    }
}