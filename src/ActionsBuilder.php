<?php

namespace Satunnaisuus\MetronomeBundle;

use Symfony\Component\DependencyInjection\ContainerInterface;

class ActionsBuilder
{
    protected ActionCollection $actions;

    protected ContainerInterface $container;

    public function __construct(ContainerInterface $container)
    {
        $this->container = $container;
        $this->actions = new ActionCollection();
    }

    public function addAction(string $name, string $class, array $options = []): self
    {
        $this->actions->add($name, $this->createActionConfig($name, $class, $options));
        return $this;
    }

    public function removeAction(string $name): self
    {
        $this->actions->remove($name);
        return $this;
    }

    public function getAction(string $name)
    {
        return $this->actions->get($name);
    }

    public function build(): ActionCollection
    {
        return $this->actions;
    }

    protected function createActionConfig(string $name, string $class, array $options): ActionConfig
    {
        /** @var $action AbstractAction */
        $action = $this->container->get($class);

        return new ActionConfig($name, $action, $options);
    }
}