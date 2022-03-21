<?php

namespace Satunnaisuus\MetronomeBundle\Crud\Action\Form;

class InnerFormMapper extends AbstractFormMapper
{
    private FormMapper $mapper;

    public function __construct(FormMapper $mapper)
    {
        parent::__construct($mapper->getFormElementFactory());
        $this->mapper = $mapper;
    }

    public function addFormInput(string $child, string $type = null, array $options = []): self
    {
        $this->registerFormInput($child, $type, $options);
        $this->mapFormInput($child, ['options' => $options]);
        return $this;
    }

    public function registerFormInput($child, ?string $type = null, array $options = []): self
    {
        $this->mapper->registerFormInput($child, $type, $options);
        return $this;
    }

    protected function getInnerFormMapperFactory(): AbstractInnerFormMapperFactory
    {
        return $this->mapper->getInnerFormMapperFactory();
    }
}