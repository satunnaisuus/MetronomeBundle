<?php

namespace Satunnaisuus\MetronomeBundle\Form\Type;

use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\Exception\UnexpectedTypeException;
use Symfony\Component\Form\Extension\Core\Type\HiddenType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\Form\FormEvent;
use Symfony\Component\Form\FormEvents;
use Symfony\Component\Form\FormInterface;
use Symfony\Component\Form\FormView;
use Symfony\Component\OptionsResolver\OptionsResolver;

class PolymorphicCollectionType extends AbstractType
{
    public function configureOptions(OptionsResolver $resolver)
    {
        parent::configureOptions($resolver);

        $resolver->setDefaults([
            'allow_add' => false,
            'type_property' => '_type',
            'allow_delete' => false,
            'delete_empty' => false,
            'prototype_name' => '__name__',
            'by_reference' => false,
            'types' => function (OptionsResolver $typeResolver) {
                $typeResolver
                    ->setPrototype(true)
                    ->setRequired(['name', 'entry_type', 'data_class'])
                    ->setDefaults([
                        'entry_options' => []
                    ])
                ;
            },
        ]);
    }

    /**
     * {@inheritdoc}
     */
    public function buildForm(FormBuilderInterface $builder, array $options): void
    {
        if ($options['allow_add']) {
            $prototypes = [];

            foreach ($options['types'] as $type => $typeOptions) {
                $label = $this->getDefaultOption($builder, $typeOptions['entry_type'], 'label');

                if ($label === null) {
                    if (array_key_exists('label', $typeOptions['entry_options']) && $typeOptions['entry_options']['label'] !== null) {
                        $label = $typeOptions['entry_options'];
                    } else {
                        $label = $options['prototype_name'] . 'label__';
                    }
                }

                $prototypeOptions = array_replace([
                    'required' => $options['required'],
                    'label' => $label,
                ], $typeOptions['entry_options']);

                $prototypeBuilder = $builder
                    ->create($options['prototype_name'], $typeOptions['entry_type'], $prototypeOptions)
                    ->add($options['type_property'], HiddenType::class, [
                        'mapped' => false,
                        'data' => $type,
                    ])
                ;

                $prototypes[$type] = [
                    'form' => $prototypeBuilder->getForm(),
                    'name' => $typeOptions['name'],
                ];
            }

            $builder->setAttribute('prototypes', $prototypes);
        }

        $builder->addEventListener(FormEvents::PRE_SET_DATA, function (FormEvent $event) use ($options, $builder) {
            $form = $event->getForm();
            $data = $event->getData();

            if (null === $data) {
                $data = [];
            }

            if (!\is_array($data) && !($data instanceof \Traversable && $data instanceof \ArrayAccess)) {
                throw new UnexpectedTypeException($data, 'array or (\Traversable and \ArrayAccess)');
            }

            foreach ($form as $name => $child) {
                $form->remove($name);
            }

            $getTypeNameByEntryData = function ($data) use ($options) {
                if (!is_object($data)) {
                    throw new \LogicException();
                }

                foreach ($options['types'] as $typeName => $config) {
                    if (class_exists($config['data_class']) && $data instanceof $config['data_class']) {
                        return $typeName;
                    }
                }

                throw new \LogicException();
            };

            foreach ($data as $name => $entryData) {
                $typeName = $getTypeNameByEntryData($entryData);
                $entryClass = $options['types'][$typeName]['entry_type'];
                $entryOptions = $options['types'][$typeName]['entry_options'];

                $childFormBuilder = $builder
                    ->create($name, $entryClass, array_replace([
                        'property_path' => '['.$name.']',
                        'auto_initialize' => false,
                    ], $entryOptions))
                    ->add($options['type_property'], HiddenType::class, [
                        'mapped' => false,
                        'data' => $typeName,
                    ])
                ;

                $form->add($childFormBuilder->getForm());
            }
        });

        $builder->addEventListener(FormEvents::PRE_SUBMIT, function (FormEvent $event) use ($options, $builder) {
            $form = $event->getForm();
            $data = $event->getData();

            if (!\is_array($data)) {
                $data = [];
            }

            // Remove all empty rows
            if ($options['allow_delete']) {
                foreach ($form as $name => $child) {
                    if (!isset($data[$name])) {
                        $form->remove($name);
                    }
                }
            }

            // Add all additional rows
            if ($options['allow_add']) {
                foreach ($data as $name => $value) {
                    if (!$form->has($name)) {
                        $type = $value[$options['type_property']];

                        $entryClass = $options['types'][$type]['entry_type'];
                        $entryOptions = $options['types'][$type]['entry_options'];

                        $childFormBuilder = $builder
                            ->create($name, $entryClass, array_replace([
                                'property_path' => '['.$name.']',
                                'auto_initialize' => false,
                            ], $entryOptions))
                            ->add($options['type_property'], HiddenType::class, [
                                'mapped' => false,
                                'data' => $type,
                            ])
                        ;

                        $form->add($childFormBuilder->getForm());
                    }
                }
            }
        });

        $builder->addEventListener(FormEvents::SUBMIT, function (FormEvent $event) use ($options) {
            $form = $event->getForm();
            $data = $event->getData();

            // At this point, $data is an array or an array-like object that already contains the
            // new entries, which were added by the data mapper. The data mapper ignores existing
            // entries, so we need to manually unset removed entries in the collection.

            if (null === $data) {
                $data = [];
            }

            if (!\is_array($data) && !($data instanceof \Traversable && $data instanceof \ArrayAccess)) {
                throw new UnexpectedTypeException($data, 'array or (\Traversable and \ArrayAccess)');
            }

            if ($options['delete_empty']) {
                $previousData = $form->getData();
                /** @var FormInterface $child */
                foreach ($form as $name => $child) {
                    $isNew = !isset($previousData[$name]);
                    $isEmpty = \is_callable($options['delete_empty']) ? ($options['delete_empty'])($child->getData()) : $child->isEmpty();

                    // $isNew can only be true if allowAdd is true, so we don't
                    // need to check allowAdd again
                    if ($isEmpty && ($isNew || $options['allow_delete'])) {
                        unset($data[$name]);
                        $form->remove($name);
                    }
                }
            }

            // The data mapper only adds, but does not remove items, so do this
            // here
            if ($options['allow_delete']) {
                $toDelete = [];

                foreach ($data as $name => $child) {
                    if (!$form->has($name)) {
                        $toDelete[] = $name;
                    }
                }

                foreach ($toDelete as $name) {
                    unset($data[$name]);
                }
            }

            $event->setData($data);
        });
    }

    /**
     * {@inheritdoc}
     */
    public function getBlockPrefix()
    {
        return 'polymorphic_collection';
    }

    /**
     * {@inheritdoc}
     */
    public function buildView(FormView $view, FormInterface $form, array $options)
    {
        $view->vars['allow_add'] = $options['allow_add'];
        $view->vars['allow_delete'] = $options['allow_delete'];
        $view->vars['prototype_name'] = $options['prototype_name'];

        if ($form->getConfig()->hasAttribute('prototypes')) {
            $prototypes = [];
            foreach ($form->getConfig()->getAttribute('prototypes') as $type => $item) {
                $item['form'] = $item['form']->setParent($form)->createView($view);
                $prototypes[$type] = $item;
            }

            $view->vars['prototypes'] = $prototypes;
        }
    }

    /**
     * {@inheritdoc}
     */
    public function finishView(FormView $view, FormInterface $form, array $options)
    {
        $prefixOffset = -2;
        // check if the entry type also defines a block prefix
        /** @var FormInterface $entry */
        foreach ($form as $entry) {
            if ($entry->getConfig()->getOption('block_prefix')) {
                --$prefixOffset;
            }

            break;
        }

        foreach ($view as $entryView) {
            array_splice($entryView->vars['block_prefixes'], $prefixOffset, 0, 'collection_entry');
        }

        /** @var FormInterface[] $prototypes */
        if ($prototypes = $form->getConfig()->getAttribute('prototypes')) {
            foreach ($view->vars['prototypes'] as $prototype) {
                if ($prototype['form']->vars['multipart']) {
                    $view->vars['multipart'] = true;
                    break;
                }
            }

            $prefixOffsets = [];

            foreach ($prototypes as $type => $prototype) {
                if ($prefixOffset > -3 && $prototype['form']->getConfig()->getOption('block_prefix')) {
                    $prefixOffsets[$type] = $prefixOffset - 1;
                } else {
                    $prefixOffsets[$type] = $prefixOffset;
                }
            }

            foreach ($view->vars['prototypes'] as $type => $prototype) {
                array_splice($prototype['form']->vars['block_prefixes'], $prefixOffsets[$type], 0, 'collection_entry');
            }
        }
    }

    private function getDefaultOption(FormBuilderInterface $builder, string $type, string $option)
    {
        return $builder
            ->create('__name__', $type)
            ->getOption($option)
        ;
    }

}