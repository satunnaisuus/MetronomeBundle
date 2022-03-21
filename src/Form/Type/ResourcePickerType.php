<?php

namespace Satunnaisuus\MetronomeBundle\Form\Type;

use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\CallbackTransformer;
use Symfony\Component\Form\Extension\Core\Type\HiddenType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\Form\FormInterface;
use Symfony\Component\Form\FormView;
use Symfony\Component\OptionsResolver\OptionsResolver;

class ResourcePickerType extends AbstractType
{
    private EntityManagerInterface $em;

    public function __construct(EntityManagerInterface $em)
    {
        $this->em = $em;
    }

    /**
     * {@inheritdoc}
     */
    public function configureOptions(OptionsResolver $resolver)
    {
        $resolver->setRequired('route');
        $resolver->setRequired('entity_class');
        $resolver->setDefaults([
            'route_params' => ['action' => 'picker'],
            'multiple' => false,
            'use_doctrine_collection' => true,
        ]);
    }

    /**
     * {@inheritdoc}
     */
    public function buildForm(FormBuilderInterface $builder, array $options): void
    {
        $builder->addViewTransformer(new CallbackTransformer(
            function($data) use ($options) {
                if ($options['multiple']) {
                    $result = [];

                    if (is_iterable($data)) {
                        foreach ($data as $entity) {
                            $result[] = [
                                'id' => $entity->getId(),
                                'name' => (string)$entity
                            ];
                        }
                    }

                    return json_encode($result);
                }

                $result = $data === null ? null : ['id' => $data->getId(), 'name' => (string)$data];

                return json_encode($result);
            },
            function ($data) use ($options) {
                $data = is_string($data) ? json_decode($data, true) : null;
                $validateElement = fn ($i) => is_array($i) && array_key_exists('id', $i) && $i['id'];
                if ($options['multiple']) {
                    if (! is_array($data)) {
                        return [];
                    }

                    $ids = array_map(function ($item) use ($validateElement) {
                        return $validateElement($item) ? $item['id'] : null;
                    }, $data);
                    $ids = array_filter($ids, fn ($i) => ! is_null($i));
                    $entities = $this->em->getRepository($options['entity_class'])->findBy(['id' => $ids]);

                    if ($options['use_doctrine_collection']) {
                        return new ArrayCollection($entities);
                    } else {
                        return $entities;
                    }
                }

                if ($validateElement($data)) {
                    return $this->em->find($options['entity_class'], $data['id']);
                }

                return null;
            }
        ));
    }

    /**
     * {@inheritdoc}
     */
    public function getParent()
    {
        return HiddenType::class;
    }

    /**
     * {@inheritdoc}
     */
    public function getBlockPrefix()
    {
        return 'resource_picker';
    }

    /**
     * {@inheritdoc}
     */
    public function buildView(FormView $view, FormInterface $form, array $options)
    {
        $view->vars['route'] = $options['route'];
        $view->vars['route_params'] = $options['route_params'];
        $view->vars['multiple'] = $options['multiple'];
    }
}