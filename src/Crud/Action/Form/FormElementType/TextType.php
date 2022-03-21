<?php

namespace Satunnaisuus\MetronomeBundle\Crud\Action\Form\FormElementType;

use Symfony\Component\OptionsResolver\OptionsResolver;

class TextType extends AbstractFormElementType
{
    public function configureOptions(OptionsResolver $resolver): void
    {
        parent::configureOptions($resolver);

        $resolver->setRequired('text');
    }

    public function getName(): string
    {
        return 'text';
    }
}