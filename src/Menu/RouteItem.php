<?php

namespace Satunnaisuus\MetronomeBundle\Menu;

use Symfony\Component\OptionsResolver\OptionsResolver;

class RouteItem implements SimpleMenuItemInterface
{
    protected string $label;

    protected string $route;

    protected array $params = [];

    protected array $options = [];

    public function __construct(string $label, string $route, array $params = [], array $options = [])
    {
        $this->label = $label;
        $this->route = $route;
        $this->params = $params;

        $optionsResolver = new OptionsResolver();
        $this->configureOptions($optionsResolver);
        $this->options = $optionsResolver->resolve($options);
    }

    public function getRoute(): string
    {
        return $this->route;
    }

    public function getParams(): array
    {
        return $this->params;
    }

    public function getLabel(): string
    {
        return $this->label;
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
            'type' => 'route',
            'active' => false,
            'label' => $this->label,
            'route' => $this->route,
            'params' => $this->params,
            'options' => $this->options,
        ];
    }
}