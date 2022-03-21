<?php

namespace Satunnaisuus\MetronomeBundle\Crud\Action\ListAction;

class ListDataResult
{
    private int $count;

    private array $items;

    private ?int $itemsPerPage;

    private bool $filtersApplied;

    /**
     * @param ListResultItem[] $items
     * @param int $count
     */
    public function __construct(array $items, int $count, ?int $itemsPerPage)
    {
        $this->items = $items;
        $this->count = $count;
        $this->itemsPerPage = $itemsPerPage;
    }

    public function getCount(): int
    {
        return $this->count;
    }

    /**
     * @return ListResultItem[]
     */
    public function getItems(): array
    {
        return $this->items;
    }

    public function getItemsPerPage(): ?int
    {
        return $this->itemsPerPage;
    }
}