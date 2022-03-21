<?php

namespace Satunnaisuus\MetronomeBundle\Crud\Action\DetailedAction\ElementType;

use Symfony\Component\OptionsResolver\OptionsResolver;

abstract class AbstractElementType
{
    public function configureOptions(OptionsResolver $resolver): void
    {

    }

    abstract public function getName(): string;

    public function getChildren(array $options): array
    {
        return [];
    }
}