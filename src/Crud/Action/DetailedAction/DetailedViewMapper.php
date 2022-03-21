<?php

namespace Satunnaisuus\MetronomeBundle\Crud\Action\DetailedAction;

use Satunnaisuus\MetronomeBundle\Crud\Action\DetailedAction\ElementType\CardType;
use Satunnaisuus\MetronomeBundle\Crud\Action\DetailedAction\ElementType\ListType;
use Satunnaisuus\MetronomeBundle\Crud\Action\DetailedAction\ElementType\PropertyType;
use Satunnaisuus\MetronomeBundle\Crud\FieldTypeContainer;
use Satunnaisuus\MetronomeBundle\Crud\FieldTypeGuesser;
use Symfony\Component\OptionsResolver\OptionsResolver;

class DetailedViewMapper
{
    protected array $elements = [];

    public function __construct(
        private string $class,
        private ElementTypeFactory $elementFactory,
        private FieldTypeGuesser $fieldTypeGuesser,
        private FieldTypeContainer $fieldTypeContainer
    )
    {

    }

    public function addElement(string $type, array $options = []): self
    {
        $this->elements[] = new ElementConfig(
            $this->elementFactory->get($type),
            $options
        );
        return $this;
    }

    public function getElements(): array
    {
        return $this->elements;
    }

    public function property(string $property, string $type = null, array $options = []): self
    {
        $options['property'] = $property;

        $type = $this->fieldTypeContainer->get(
            $type === null ? $this->fieldTypeGuesser->guess($this->class, $property) : $type
        );

        $optionsResolver = new OptionsResolver();
        $type->configureOptions($optionsResolver);

        if (! array_key_exists('inner_options', $options)) {
            $options['inner_options'] = [];
        }

        $options['inner_options'] = $optionsResolver->resolve($options['inner_options']);
        $options['inner_type'] = $type;
        $this->addElement(PropertyType::class, $options);

        return $this;
    }

    public function card(callable $card, array $options = []): self
    {
        $mapper = new DetailedViewCardMapper($this->createInnerMapperFactory());
        $card($mapper);
        $options['header'] = $mapper->getHeader();
        $options['body'] = $mapper->getBody();
        $options['footer'] = $mapper->getFooter();
        $this->addElement(CardType::class, $options);

        return $this;
    }

    public function list(callable $card, array $options = []): self
    {
        $mapper = new DetailedViewListMapper($this->createInnerMapperFactory());
        $card($mapper);
        $options['items'] = $mapper->getItems();
        $this->addElement(ListType::class, $options);

        return $this;
    }

    public function getElementFactory(): ElementTypeFactory
    {
        return $this->elementFactory;
    }

    private function createInnerMapperFactory(): callable
    {
        return fn() => new self(
            $this->class,
            $this->elementFactory,
            $this->fieldTypeGuesser,
            $this->fieldTypeContainer
        );
    }
}