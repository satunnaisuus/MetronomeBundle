<?php

namespace Satunnaisuus\MetronomeBundle;

class ResourceCollection
{
    protected array $map = [];

    public function add(string $name, string $class)
    {
        $this->map[$name] = $class;
    }

    public function get(string $name): string
    {
        if (array_key_exists($name, $this->map)) {
            return $this->map[$name];
        }

        throw new \Exception();
    }
}