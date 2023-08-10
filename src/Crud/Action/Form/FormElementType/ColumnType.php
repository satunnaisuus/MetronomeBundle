<?php

namespace Satunnaisuus\MetronomeBundle\Crud\Action\Form\FormElementType;

use Symfony\Component\OptionsResolver\OptionsResolver;

class ColumnType extends AbstractFormElementType
{
    public function configureOptions(OptionsResolver $resolver): void
    {
        parent::configureOptions($resolver);

        $resolver->setDefault('elements', []);
        $resolver->setDefault('class', '');
    }

    public function getName(): string
    {
        return 'column';
    }

    public function getChildren(array $options): array
    {
        return $options['elements'];
    }
}