<?php

namespace Satunnaisuus\MetronomeBundle\Crud\Action\Form\FormElementType;

use Symfony\Component\OptionsResolver\OptionsResolver;

class RowType extends AbstractFormElementType
{
    public function configureOptions(OptionsResolver $resolver): void
    {
        parent::configureOptions($resolver);

        $resolver->setDefault('columns', []);
    }

    public function getName(): string
    {
        return 'row';
    }

    public function getChildren(array $options): array
    {
        return $options['columns'];
    }
}