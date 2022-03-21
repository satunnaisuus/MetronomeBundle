<?php

namespace Satunnaisuus\MetronomeBundle\Crud\FieldType;

use Symfony\Component\OptionsResolver\OptionsResolver;

abstract class AbstractFieldType
{
    abstract public function convertValue($value, array $options);

    abstract public function getType(): string;

    public function configureOptions(OptionsResolver $resolver): void
    {
//        $resolver->setRequired('label');
//        $resolver->setRequired('property_path');
    }
}