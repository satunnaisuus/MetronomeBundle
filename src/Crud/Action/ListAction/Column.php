<?php

namespace Satunnaisuus\MetronomeBundle\Crud\Action\ListAction;

use Satunnaisuus\MetronomeBundle\Crud\FieldType\AbstractFieldType;
use Symfony\Component\OptionsResolver\OptionsResolver;

class Column
{
    private AbstractFieldType $innerType;

    private array $options;

    private string $propertyPath;

    public function __construct(string $propertyPath, AbstractFieldType $innerType, array $options)
    {
        $optionsResolver = new OptionsResolver();
        $this->configureOptions($optionsResolver);
//        $innerType->configureOptions($optionsResolver);

        $options['property_path'] = $propertyPath;

        $this->options = $optionsResolver->resolve($options);
        $this->innerType = $innerType;
        $this->propertyPath = $propertyPath;
    }

    public function getPropertyPath(): string
    {
        return $this->propertyPath;
    }

    public function convertValue($value)
    {
        $optionsResolver = new OptionsResolver();
        $this->innerType->configureOptions($optionsResolver);
        $options = $optionsResolver->resolve(
            array_filter($this->options, function ($key) use ($optionsResolver) {
                return $optionsResolver->isDefined($key);
            }, ARRAY_FILTER_USE_KEY)
        );
        return $this->innerType->convertValue($value, $options);
    }

    public function getOptions(): array
    {
        return $this->options;
    }

    public function getOption(string $name)
    {
        return $this->options[$name];
    }

    public function configureOptions(OptionsResolver $resolver)
    {
        $resolver->setDefault('label', '');
        $resolver->setDefault('property_sort', null);
        $resolver->setDefault('property_path', null);
    }

    public function getType(): string
    {
        return $this->innerType->getType();
    }
}