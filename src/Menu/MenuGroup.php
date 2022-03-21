<?php

namespace Satunnaisuus\MetronomeBundle\Menu;

use Symfony\Component\OptionsResolver\OptionsResolver;

class MenuGroup implements MenuItemInterface
{
    /**
     * @var SimpleMenuItemInterface[]
     */
    protected array $items = [];

    protected Menu $parent;

    protected string $label;

    protected array $options;

    /**
     * @param string $label
     * @param Menu $parent
     * @param array $options
     */
    public function __construct(string $label, Menu $parent, array $options = [])
    {
        $this->label = $label;
        $this->parent = $parent;

        $optionsResolver = new OptionsResolver();
        $this->configureOptions($optionsResolver);
        $this->options = $optionsResolver->resolve($options);
    }

    public function addItem(SimpleMenuItemInterface $item): self
    {
        $this->items[] = $item;
        return $this;
    }

    public function getParent(): Menu
    {
        return $this->parent;
    }

    /**
     * @return SimpleMenuItemInterface[]
     */
    public function getItems(): array
    {
        return $this->items;
    }

    public function configureOptions(OptionsResolver $resolver)
    {
        $resolver->setDefault('icon', null);
    }

    public function getLabel(): string
    {
        return $this->label;
    }

    public function getOptions(): array
    {
        return $this->options;
    }

    public function toArray(Menu $menu): array
    {
        $items = array_map(function ($item) use ($menu) {
            return $item->toArray($menu);
        }, $this->items);

        return [
            'type' => 'group',
            'label' => $this->label,
            'items' => $items,
            'options' => $this->options,
            'active' => array_reduce($items, function ($carry, $item) {
                return $carry || $item['active'];
            }, false)
        ];
    }
}