<?php

namespace Satunnaisuus\MetronomeBundle\Crud\Action\DetailedAction\ElementType;

use Satunnaisuus\MetronomeBundle\Crud\FieldType\DefaultType;
use Satunnaisuus\MetronomeBundle\Crud\FieldTypeContainer;
use Symfony\Component\OptionsResolver\OptionsResolver;

class PropertyType extends AbstractElementType
{
    public function __construct(private FieldTypeContainer $fieldTypeContainer)
    {

    }

    public function configureOptions(OptionsResolver $resolver): void
    {
        parent::configureOptions($resolver);

        $resolver->setRequired('property');
        $resolver->setDefault('inner_options', []);
        $resolver->setDefault('inner_type', $this->fieldTypeContainer->get(DefaultType::class));
    }

    public function getName(): string
    {
        return 'property';
    }
}