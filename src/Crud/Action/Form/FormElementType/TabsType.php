<?php

namespace Satunnaisuus\MetronomeBundle\Crud\Action\Form\FormElementType;

use Symfony\Component\OptionsResolver\OptionsResolver;

class TabsType extends AbstractFormElementType
{
    public function configureOptions(OptionsResolver $resolver): void
    {
        parent::configureOptions($resolver);

        $resolver->setDefault('tabs', []);
        $resolver->setDefault('vertical', false);
        $resolver->setRequired('id');
    }

    public function getName(): string
    {
        return 'tabs';
    }

    public function getChildren(array $options): array
    {
        return $options['tabs'];
    }
}