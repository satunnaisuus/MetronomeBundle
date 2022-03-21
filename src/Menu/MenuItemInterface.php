<?php

namespace Satunnaisuus\MetronomeBundle\Menu;

interface MenuItemInterface
{
    public function toArray(Menu $menu): array;
}