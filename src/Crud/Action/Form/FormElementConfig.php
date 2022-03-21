<?php

namespace Satunnaisuus\MetronomeBundle\Crud\Action\Form;

use Satunnaisuus\MetronomeBundle\Crud\Action\Form\FormElementType\AbstractFormElementType;
use Symfony\Component\OptionsResolver\OptionsResolver;

class FormElementConfig
{
    private array $options;

    private AbstractFormElementType $type;

    public function __construct(AbstractFormElementType $type, array $options = [])
    {
        $this->type = $type;
        $optionsResolver = new OptionsResolver();
        $type->configureOptions($optionsResolver);
        $this->options = $optionsResolver->resolve($options);
    }

    public function getOptions(): array
    {
        return $this->options;
    }

    public function getType(): AbstractFormElementType
    {
        return $this->type;
    }

    public function getTypeName(): string
    {
        return $this->type->getName();
    }

    /**
     * @return self[]
     */
    public function getChildren(): array
    {
        return $this->type->getChildren($this->options);
    }
}