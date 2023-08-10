<?php

namespace Satunnaisuus\MetronomeBundle\Form\Type;

use Satunnaisuus\MetronomeBundle\Entity\File;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\CallbackTransformer;
use Symfony\Component\Form\Extension\Core\Type\HiddenType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\Form\FormInterface;
use Symfony\Component\Form\FormView;
use Symfony\Component\OptionsResolver\OptionsResolver;

class AjaxUploaderType extends AbstractType
{
    private array $mappings;

    public function __construct(array $mappings)
    {
        $this->mappings = $mappings;
    }

    public function configureOptions(OptionsResolver $resolver)
    {
        $resolver->setDefaults([
            'route' => 'admin:ajax-uploader',
            'route_params' => [
                'mapping' => 'default',
            ],
            'mapping' => 'default',
            'is_image' => false,
            'data_class' => File::class,
            'allow_delete' => true,
        ]);
    }

    /**
     * {@inheritdoc}
     */
    public function buildForm(FormBuilderInterface $builder, array $options): void
    {
        if (!array_key_exists($options['mapping'], $this->mappings)) {
            throw new \Exception('Mapping not found');
        }

        $mapping = $this->mappings[$options['mapping']];

        $builder
            ->add('originalName', HiddenType::class)
            ->add('path', HiddenType::class)
            ->add('size', HiddenType::class)
            ->add('mimeType', HiddenType::class)
        ;

        $builder->get('path')->addViewTransformer(new CallbackTransformer(
            function ($data) use ($mapping) {
                if (!is_string($data)) {
                    return null;
                }

                return $mapping['uri_prefix'] . '/' . $data;
            },
            function ($data) use ($mapping) {
                if (!is_string($data)) {
                    return null;
                }

                if (!str_starts_with($data, $mapping['uri_prefix'])) {
                    return null;
                }

                return trim(substr($data, strlen($mapping['uri_prefix'])), '/');
            }
        ));
    }

    /**
     * {@inheritdoc}
     */
    public function getBlockPrefix()
    {
        return 'ajax_uploader';
    }

    /**
     * {@inheritdoc}
     */
    public function buildView(FormView $view, FormInterface $form, array $options)
    {
        $view->vars['route'] = $options['route'];
        $view->vars['route_params'] = $options['route_params'];
        $view->vars['is_image'] = $options['is_image'];
        $view->vars['allow_delete'] = $options['allow_delete'];
    }
}