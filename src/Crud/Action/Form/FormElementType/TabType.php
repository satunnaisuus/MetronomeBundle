<?php

namespace Satunnaisuus\MetronomeBundle\Crud\Action\Form\FormElementType;

use Symfony\Component\OptionsResolver\OptionsResolver;

class TabType extends AbstractFormElementType
{
    public function configureOptions(OptionsResolver $resolver): void
    {
        parent::configureOptions($resolver);

        $resolver->setDefault('elements', []);
        $resolver->setRequired('id');
        $resolver->setRequired('label');
    }

    public function getName(): string
    {
        return 'tab';
    }

    public function getChildren(array $options): array
    {
        return $options['elements'];
    }
}