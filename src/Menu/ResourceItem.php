<?php

namespace Satunnaisuus\MetronomeBundle\Menu;

use Symfony\Component\OptionsResolver\OptionsResolver;

class ResourceItem implements SimpleMenuItemInterface
{
    protected string $label;

    protected string $resource;

    protected string $action;

    protected array $options = [];

    public function __construct(string $label, string $resource, string $action, array $options = [])
    {
        $this->label = $label;
        $this->resource = $resource;
        $this->action = $action;

        $optionsResolver = new OptionsResolver();
        $this->configureOptions($optionsResolver);
        $this->options = $optionsResolver->resolve($options);
    }

    public function getLabel(): string
    {
        return $this->label;
    }

    public function getResource(): string
    {
        return $this->resource;
    }

    public function getAction(): string
    {
        return $this->action;
    }

    public function getOptions(): array
    {
        return $this->options;
    }

    public function configureOptions(OptionsResolver $resolver)
    {
        $resolver->setDefault('icon', null);
    }

    public function toArray(Menu $menu): array
    {
        return [
            'type' => 'resource',
            'label' => $this->label,
            'active' => $menu->getActiveResource() === $this->resource,
            'resource' => $this->resource,
            'action' => $this->action,
            'options' => $this->options,
        ];
    }
}