<?php

namespace Satunnaisuus\MetronomeBundle\Crud\Action\Form;

use Satunnaisuus\MetronomeBundle\Crud\Action\Form\FormElementType\AbstractFormElementType;
use Symfony\Component\DependencyInjection\ContainerInterface;

class FormElementTypeFactory
{
    private ContainerInterface $container;

    public function __construct(ContainerInterface $container)
    {
        $this->container = $container;
    }

    public function get(string $type): AbstractFormElementType
    {
        return $this->container->get($type);
    }
}