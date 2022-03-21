<?php

namespace Satunnaisuus\MetronomeBundle\Crud;

use Satunnaisuus\MetronomeBundle\Crud\FieldType\AbstractFieldType;
use Symfony\Component\DependencyInjection\ContainerInterface;

class FieldTypeContainer
{
    public function __construct(private ContainerInterface $container)
    {

    }

    public function get(string $class): AbstractFieldType
    {
        return $this->container->get($class);
    }
}