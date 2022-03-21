<?php

namespace Satunnaisuus\MetronomeBundle\Form\Type;

use Symfony\Component\Form\AbstractType;
use Symfony\Component\OptionsResolver\OptionsResolver;

class FilterFormType extends AbstractType
{
    public function configureOptions(OptionsResolver $resolver)
    {
        parent::configureOptions($resolver);
    }

    public function getBlockPrefix()
    {
        return 'filter';
    }
}