<?php

namespace Satunnaisuus\MetronomeBundle\Crud\Action\Form;

use Satunnaisuus\MetronomeBundle\Crud\Action\Form\FormElementType\TabType;

class TabsMapper
{
    private array $tabs = [];

    private AbstractInnerFormMapperFactory $innerFormMapperFactory;

    private FormElementTypeFactory $formElementTypeFactory;

    public function __construct(AbstractInnerFormMapperFactory $innerFormMapperFactory, FormElementTypeFactory $formElementTypeFactory)
    {
        $this->innerFormMapperFactory = $innerFormMapperFactory;
        $this->formElementTypeFactory = $formElementTypeFactory;
    }

    public function tab(string $id, string $label, callable $tab, array $options = []): self
    {
        $mapper = $this->innerFormMapperFactory->create();
        $tab($mapper);
        $options['id'] = $id;
        $options['elements'] = $mapper->getElements();
        $options['label'] = $label;
        $this->tabs[] = new FormElementConfig(
            $this->formElementTypeFactory->get(TabType::class),
            $options
        );
        return $this;
    }

    public function getTabs(): array
    {
        return $this->tabs;
    }
}