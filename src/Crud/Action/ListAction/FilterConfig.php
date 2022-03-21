<?php

namespace Satunnaisuus\MetronomeBundle\Crud\Action\ListAction;

use Satunnaisuus\MetronomeBundle\Crud\Action\ListAction\FilterType\AbstractFilterType;
use Doctrine\ORM\QueryBuilder;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\OptionsResolver\OptionsResolver;

class FilterConfig
{
    private AbstractFilterType $innerType;

    private array $options;

    private string $id;

    public function __construct(string $id, AbstractFilterType $innerType, array $options)
    {
        $this->id = $id;
        $this->innerType = $innerType;

        $options['id'] = $id;

        $optionsResolver = new OptionsResolver();
        $innerType->configureOptions($optionsResolver);
        $this->options = $optionsResolver->resolve($options);
    }

    public function getInnerType(): AbstractFilterType
    {
        return $this->innerType;
    }

    public function getOptions(): array
    {
        return $this->options;
    }

    public function getId(): string
    {
        return $this->id;
    }

    public function buildForm(FormBuilderInterface $builder): void
    {
        $this->innerType->buildForm($builder, $this->options);
    }

    public function applyFilter($value, QueryBuilder $builder): bool
    {
        return $this->innerType->applyFilter($value, $builder, $this->options);
    }
}