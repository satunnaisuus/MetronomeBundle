<?php

namespace Satunnaisuus\MetronomeBundle\Menu;

class Menu
{
    protected array $items = [];

    protected $activeResource;

    protected $activeAction;

    public function setActive(?string $resource, ?string $action)
    {
        $this->activeResource = $resource;
        $this->activeAction = $action;
    }

    public function getActiveResource()
    {
        return $this->activeResource;
    }

    public function getActiveAction()
    {
        return $this->activeAction;
    }

    /**
     * @return MenuItemInterface[]
     */
    public function getItems(): array
    {
        return $this->items;
    }

    public function addItem(MenuItemInterface $item): self
    {
        $this->items[] = $item;
        return $this;
    }

    public function toArray(): array
    {
        $menu = $this;
        return [
            'type' => 'menu',
            'items' => array_map(function ($item) use ($menu) {
                return $item->toArray($menu);
            }, $this->items)
        ];
    }
}