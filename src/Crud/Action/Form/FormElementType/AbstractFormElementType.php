<?php

namespace Satunnaisuus\MetronomeBundle\Crud\Action\Form\FormElementType;

use Symfony\Component\OptionsResolver\OptionsResolver;

abstract class AbstractFormElementType
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