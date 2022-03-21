<?php

namespace Satunnaisuus\MetronomeBundle\Crud\Action\DetailedAction\ElementType;

use Symfony\Component\OptionsResolver\OptionsResolver;

class ListType extends AbstractElementType
{
    public function configureOptions(OptionsResolver $resolver): void
    {
        parent::configureOptions($resolver);

        $resolver->setDefault('items', []);
    }

    public function getName(): string
    {
        return 'list';
    }

    public function getChildren(array $options): array
    {
        return $options['items'];
    }
}