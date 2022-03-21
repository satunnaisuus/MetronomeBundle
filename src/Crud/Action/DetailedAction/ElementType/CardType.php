<?php

namespace Satunnaisuus\MetronomeBundle\Crud\Action\DetailedAction\ElementType;

use Symfony\Component\OptionsResolver\OptionsResolver;

class CardType extends AbstractElementType
{
    public function configureOptions(OptionsResolver $resolver): void
    {
        parent::configureOptions($resolver);

        $resolver->setDefault('header', []);
        $resolver->setDefault('body', []);
        $resolver->setDefault('footer', []);
    }

    public function getName(): string
    {
        return 'card';
    }

    public function getChildren(array $options): array
    {
        return array_merge($options['header'], $options['body'], $options['footer']);
    }
}