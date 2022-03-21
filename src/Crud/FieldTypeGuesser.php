<?php

namespace Satunnaisuus\MetronomeBundle\Crud;

use Satunnaisuus\MetronomeBundle\Crud\FieldType\DatetimeType;
use Satunnaisuus\MetronomeBundle\Crud\FieldType\DefaultType;
use Symfony\Component\PropertyInfo\PropertyTypeExtractorInterface;

class FieldTypeGuesser
{
    private PropertyTypeExtractorInterface $extractor;

    public function __construct(PropertyTypeExtractorInterface $extractor)
    {
        $this->extractor = $extractor;
    }

    public function guess(string $class, $propertyPath): string
    {
        $types = $this->extractor->getTypes($class, $propertyPath);

        if ($types !== null) {
            foreach ($types as $type) {
                if ($type === null) {
                    continue;
                }

                //@TODO guess type

                if ($type->getBuiltinType() === 'object') {
                    if ($type->getClassName() === 'DateTime' || $type->getClassName() === 'DateTimeImmutable') {
                        return DatetimeType::class;
                    }
                }
            }
        }

        return DefaultType::class;
    }
}