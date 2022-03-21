<?php

namespace Satunnaisuus\MetronomeBundle\Crud\Action\DetailedAction;

use Satunnaisuus\MetronomeBundle\Crud\FieldTypeContainer;
use Satunnaisuus\MetronomeBundle\Crud\FieldTypeGuesser;

class DetailedViewMapperFactory
{
    public function __construct(
        private ElementTypeFactory $elementTypeFactory,
        private FieldTypeGuesser $typeGuesser,
        private FieldTypeContainer $fieldTypeContainer
    )
    {

    }

    public function create(string $class): DetailedViewMapper
    {
        return new DetailedViewMapper($class, $this->elementTypeFactory, $this->typeGuesser, $this->fieldTypeContainer);
    }
}