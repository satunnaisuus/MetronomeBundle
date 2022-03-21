<?php

namespace Satunnaisuus\MetronomeBundle;

use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\OptionsResolver\OptionsResolver;

class ActionConfig
{
    public string $name;

    public AbstractAction $action;

    public array $options;

    public function __construct(string $name, AbstractAction $action, array $options)
    {
        $this->name = $name;
        $this->action = $action;

        if (! array_key_exists('name', $options)) {
            $options['name'] = $name;
        }

        $optionsResolver = new OptionsResolver();
        $action->configureOptions($optionsResolver);
        $this->options = $optionsResolver->resolve($options);
    }

    public function handle(AdminContext $context): Response
    {
        return $this->action->handle($context);
    }

    public function getName(): string
    {
        return $this->name;
    }

    public function getAction(): AbstractAction
    {
        return $this->action;
    }

    public function getOptions(): array
    {
        return $this->options;
    }

    public function getOption(string $name)
    {
        return $this->options[$name];
    }

    public function setOption(string $name, $value)
    {
        $this->options[$name] = $value;
        $optionsResolver = new OptionsResolver();
        $this->action->configureOptions($optionsResolver);
        $this->options = $optionsResolver->resolve($this->options);
    }

    public function toArray(): array
    {
        return $this->action->toArray($this->options);
    }
}