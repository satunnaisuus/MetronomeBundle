<?php

namespace Satunnaisuus\MetronomeBundle\Crud\FieldType;

class BooleanType extends AbstractFieldType
{
    public function convertValue($value, array $options)
    {
        return $value;
    }

    public function getType(): string
    {
        return 'boolean';
    }
}