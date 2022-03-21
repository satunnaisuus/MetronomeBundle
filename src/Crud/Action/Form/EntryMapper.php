<?php

namespace Satunnaisuus\MetronomeBundle\Crud\Action\Form;

class EntryMapper extends AbstractFormMapper
{
    protected function getInnerFormMapperFactory(): AbstractInnerFormMapperFactory
    {
        return new class($this) extends AbstractInnerFormMapperFactory
        {
            private EntryMapper $mapper;

            public function __construct(EntryMapper $mapper)
            {
                $this->mapper = $mapper;
            }

            public function create(): AbstractFormMapper
            {
                $class = get_class($this->mapper);
                return new $class($this->mapper->getFormElementFactory());
            }
        };
    }
}