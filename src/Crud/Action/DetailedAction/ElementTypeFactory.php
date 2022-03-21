<?php

namespace Satunnaisuus\MetronomeBundle\Crud\Action\DetailedAction;

use Satunnaisuus\MetronomeBundle\Crud\Action\DetailedAction\ElementType\AbstractElementType;
use Symfony\Component\DependencyInjection\ContainerInterface;

class ElementTypeFactory
{
    private ContainerInterface $container;

    public function __construct(ContainerInterface $container)
    {
        $this->container = $container;
    }

    public function get(string $type): AbstractElementType
    {
        return $this->container->get($type);
    }
}