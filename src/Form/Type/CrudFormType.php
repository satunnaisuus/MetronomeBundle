<?php

namespace Satunnaisuus\MetronomeBundle\Form\Type;

use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\Extension\Core\Type\HiddenType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\Form\FormInterface;
use Symfony\Component\Form\FormView;
use Symfony\Component\OptionsResolver\OptionsResolver;

class CrudFormType extends AbstractType
{
    public function configureOptions(OptionsResolver $resolver)
    {
        parent::configureOptions($resolver);

        $resolver->setRequired('form_map');
        $resolver->setRequired('elements');
        $resolver->setRequired('form_entry_collection_layouts');
        $resolver->setRequired('form_entry_layouts');
        $resolver->setDefault('allow_extra_fields', true);
    }

    public function buildForm(FormBuilderInterface $builder, array $options)
    {
        $builder->add('_admin_referer', HiddenType::class, [
            'mapped' => false,
            'attr' => ['data-referer' => null]
        ]);

        $builder->add('_crud_form_state', HiddenType::class, [
            'mapped' => false,
            'required' => false,
            'attr' => ['data-crud-form-target' => 'state']
        ]);
    }

    /**
     * {@inheritdoc}
     */
    public function buildView(FormView $view, FormInterface $form, array $options)
    {
        $state = json_decode($form->get('_crud_form_state')->getData());
        $view->vars['state'] = $state === null ? [] : $state;
        $view->vars['form_entry_collection_layouts'] = $options['form_entry_collection_layouts'];
        $view->vars['form_entry_layouts'] = $options['form_entry_layouts'];
        $view->vars['form_map'] = $options['form_map'];
        $view->vars['elements'] = $options['elements'];
        $view->vars['attr']['data-controller'] = 'crud-form';
    }
}