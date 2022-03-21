<?php

namespace Satunnaisuus\MetronomeBundle\Crud\Action\Form;

use Satunnaisuus\MetronomeBundle\Crud\Action\Form\FormElementType\CardType;
use Satunnaisuus\MetronomeBundle\Crud\Action\Form\FormElementType\FormInputType;
use Satunnaisuus\MetronomeBundle\Crud\Action\Form\FormElementType\FormLabelType;
use Satunnaisuus\MetronomeBundle\Crud\Action\Form\FormElementType\FormWidgetType;
use Satunnaisuus\MetronomeBundle\Crud\Action\Form\FormElementType\RowType;
use Satunnaisuus\MetronomeBundle\Crud\Action\Form\FormElementType\TabsType;
use Satunnaisuus\MetronomeBundle\Crud\Action\Form\FormElementType\TextType;

abstract class AbstractFormMapper
{
    protected array $elements = [];

    protected FormElementTypeFactory $formElementFactory;

    public function __construct(FormElementTypeFactory $formElementFactory)
    {
        $this->formElementFactory = $formElementFactory;
    }

    public function addElement(string $type, array $options = []): self
    {
        $this->elements[] = new FormElementConfig(
            $this->formElementFactory->get($type),
            $options
        );
        return $this;
    }

    public function getElements(): array
    {
        return $this->elements;
    }

    public function text($text, array $options = []): self
    {
        $options['text'] = $text;
        $this->addElement(TextType::class, $options);
        return $this;
    }

    public function tabs(string $id, callable $tabs, array $options = []): self
    {
        $mapper = new TabsMapper($this->getInnerFormMapperFactory(), $this->formElementFactory);
        $tabs($mapper);
        $options['id'] = $id;
        $options['tabs'] = $mapper->getTabs();
        $this->addElement(TabsType::class, $options);
        return $this;
    }

    public function row(callable $row, array $options = []): self
    {
        $mapper = new RowMapper($this->getInnerFormMapperFactory(), $this->formElementFactory);
        $row($mapper);
        $options['columns'] = $mapper->getColumns();
        $this->addElement(RowType::class, $options);
        return $this;
    }

    public function card(callable $card, array $options = []): self
    {
        $mapper = new CardMapper($this->getInnerFormMapperFactory());
        $card($mapper);
        $options['header'] = $mapper->getHeader();
        $options['body'] = $mapper->getBody();
        $options['footer'] = $mapper->getFooter();
        $this->addElement(CardType::class, $options);
        return $this;
    }

    public function mapFormInput(string $child, array $options = []): self
    {
        $options['child'] = $child;
        $this->addElement(FormInputType::class, $options);
        return $this;
    }

    public function formWidget(): self
    {
        $this->addElement(FormWidgetType::class);
        return $this;
    }

    public function formLabel(): self
    {
        $this->addElement(FormLabelType::class);
        return $this;
    }

    public function getFormElementFactory(): FormElementTypeFactory
    {
        return $this->formElementFactory;
    }

    abstract protected function getInnerFormMapperFactory(): AbstractInnerFormMapperFactory;
}