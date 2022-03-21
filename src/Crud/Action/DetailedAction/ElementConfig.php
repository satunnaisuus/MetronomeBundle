<?php

namespace Satunnaisuus\MetronomeBundle\Crud\Action\DetailedAction;

use Satunnaisuus\MetronomeBundle\Crud\Action\DetailedAction\ElementType\AbstractElementType;
use Symfony\Component\OptionsResolver\OptionsResolver;

class ElementConfig
{
    private array $options;

    private AbstractElementType $type;

    public function __construct(AbstractElementType $type, array $options = [])
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

    public function getType(): AbstractElementType
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