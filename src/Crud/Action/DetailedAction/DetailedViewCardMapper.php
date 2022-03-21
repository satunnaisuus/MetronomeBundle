<?php

namespace Satunnaisuus\MetronomeBundle\Crud\Action\DetailedAction;

class DetailedViewCardMapper
{
    protected array $header = [];

    protected array $body = [];

    protected array $footer = [];

    public function __construct(private $innerMapperFactory)
    {

    }

    public function header(callable $header): self
    {
        $mapper = ($this->innerMapperFactory)();
        $header($mapper);
        $this->header = $mapper->getElements();
        return $this;
    }

    public function body(callable $body): self
    {
        $mapper = ($this->innerMapperFactory)();
        $body($mapper);
        $this->body = $mapper->getElements();
        return $this;
    }

    public function footer(callable $footer): self
    {
        $mapper = ($this->innerMapperFactory)();
        $footer($mapper);
        $this->footer = $mapper->getElements();
        return $this;
    }

    public function getHeader(): array
    {
        return $this->header;
    }

    public function getBody(): array
    {
        return $this->body;
    }

    public function getFooter(): array
    {
        return $this->footer;
    }
}