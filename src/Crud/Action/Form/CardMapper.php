<?php

namespace Satunnaisuus\MetronomeBundle\Crud\Action\Form;

class CardMapper
{
    private array $header = [];

    private array $body = [];

    private array $footer = [];

    private AbstractInnerFormMapperFactory $factory;

    public function __construct(AbstractInnerFormMapperFactory $factory)
    {
        $this->factory = $factory;
    }

    public function header(callable $header): self
    {
        $mapper = $this->factory->create();
        $header($mapper);
        $this->header = $mapper->getElements();
        return $this;
    }

    public function body(callable $body): self
    {
        $mapper = $this->factory->create();
        $body($mapper);
        $this->body = $mapper->getElements();
        return $this;
    }

    public function footer(callable $footer): self
    {
        $mapper = $this->factory->create();
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