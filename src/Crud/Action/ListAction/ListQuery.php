<?php

namespace Satunnaisuus\MetronomeBundle\Crud\Action\ListAction;

use Symfony\Component\HttpFoundation\Request;

class ListQuery
{
    private ?string $sortField;

    private ?bool $sortReverse;

    private ?int $page;

    private ?string $searchQuery;

    private array $filters;

    public function __construct(?string $sortField, bool $sortReverse, ?string $searchQuery, int $page, array $filters)
    {
        $this->sortField = $sortField;
        $this->sortReverse = $sortReverse;
        $this->page = $page;
        $this->filters = $filters;
        $this->searchQuery = $searchQuery;
    }

    public static function create(Request $request, array $filters = []): self
    {
        return new self(
            $request->query->get('sortField'),
            $request->query->getBoolean('sortReverse'),
            $request->query->get('searchQuery'),
            $request->query->getInt('page', 1),
            $filters
        );
    }

    public function getSortField(): ?string
    {
        return $this->sortField;
    }

    public function getSortReverse(): ?bool
    {
        return $this->sortReverse;
    }

    public function getPage(): ?int
    {
        return $this->page;
    }

    public function getFilters(): array
    {
        return $this->filters;
    }

    public function getSearchQuery(): ?string
    {
        return $this->searchQuery;
    }

    public function hasSearch(): bool
    {
        return $this->searchQuery !== null && strlen($this->searchQuery) > 0;
    }
}