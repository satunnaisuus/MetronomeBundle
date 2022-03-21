<?php

namespace Satunnaisuus\MetronomeBundle\Crud\Action\Form;

use Satunnaisuus\MetronomeBundle\Crud\Action\Form\FormElementType\CollectionEntryDeleteButton;

class CollectionEntryMapper extends AbstractFormMapper
{
    public function deleteButton(array $options = []): self
    {
        $this->addElement(CollectionEntryDeleteButton::class, $options);
        return $this;
    }

    protected function getInnerFormMapperFactory(): AbstractInnerFormMapperFactory
    {
        return new class($this) extends AbstractInnerFormMapperFactory
        {
            private CollectionEntryMapper $mapper;

            public function __construct(CollectionEntryMapper $mapper)
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