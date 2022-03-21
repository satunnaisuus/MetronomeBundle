<?php

namespace Satunnaisuus\MetronomeBundle;

class ActionCollection
{
    protected array $items = [];

    public function __construct(array $items = [])
    {
        $this->items = $items;
    }

    public function add(string $name, ActionConfig $item)
    {
        if (! $this->has($name)) {
            $this->items[$name] = $item;
        }
    }

    public function remove(string $name)
    {
        unset($this->items[$name]);
    }

    public function has(string $name)
    {
        return array_key_exists($name, $this->items);
    }

    public function getByScope(string $scope): self
    {
        return $this->filter(function (ActionConfig $action) use ($scope) {
            return $action->getOption('scope') === $scope;
        });
    }

    public function exclude(string $name): self
    {
        return $this->filter(function (ActionConfig $action) use ($name) {
            return $action->getOption('name') !== $name;
        });
    }

    public function filter(callable $callback): self
    {
        return new self(array_filter($this->items, $callback));
    }

    public function get(string $name): ActionConfig
    {
        if ($this->has($name)) {
            return $this->items[$name];
        }

        throw new \Exception();
    }

    public function toArray(): array
    {
        return array_map(function (ActionConfig $item) {
            return $item->toArray();
        }, $this->items);
    }
}