<?php

namespace Satunnaisuus\MetronomeBundle\Form\Type;

use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\Extension\Core\Type\TextType;
use Symfony\Component\Form\FormInterface;
use Symfony\Component\Form\FormView;

class LocalizedTextType extends AbstractType
{
    /**
     * {@inheritdoc}
     */
    public function getBlockPrefix()
    {
        return 'localized_text';
    }

    /**
     * {@inheritdoc}
     */
    public function buildView(FormView $view, FormInterface $form, array $options)
    {
        $parent = $form->getParent();
        if ($parent === null) {
            $view->vars['locale'] = null;
        } else {
            $view->vars['locale'] = $parent->getName();
        }
    }

    public function getParent()
    {
        return TextType::class;
    }
}