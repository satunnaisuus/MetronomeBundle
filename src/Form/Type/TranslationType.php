<?php

namespace Satunnaisuus\MetronomeBundle\Form\Type;

use Doctrine\Common\Collections\ArrayCollection;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\Form\FormEvent;
use Symfony\Component\Form\FormEvents;
use Symfony\Component\Form\FormInterface;
use Symfony\Component\Form\FormView;
use Symfony\Component\OptionsResolver\OptionsResolver;

class TranslationType extends AbstractType
{
    const THEME_DEFAULT = 'default';
    const THEME_TABS = 'tabs';
    const THEME_ACCORDION = 'accordion';

    public function configureOptions(OptionsResolver $resolver)
    {
        parent::configureOptions($resolver);

        $resolver->setRequired('entry_type');

        $resolver->setDefaults([
            'locales' => [],
            'entry_options' => [],
            'by_reference' => false,
            'empty_data' => fn(FormInterface $form) => new ArrayCollection(),
            'theme' => self::THEME_DEFAULT,
        ]);

        $resolver->addAllowedValues('theme', [
            self::THEME_DEFAULT,
            self::THEME_TABS,
            self::THEME_ACCORDION,
        ]);
    }

    /**
     * {@inheritdoc}
     */
    public function buildForm(FormBuilderInterface $builder, array $options): void
    {
        foreach ($options['locales'] as $locale) {
            $builder->add($locale, $options['entry_type'], $options['entry_options']);
        }

        $builder->addEventListener(FormEvents::SUBMIT, function (FormEvent $event) {
            $data = $event->getData();

            foreach ($data as $locale => $translation) {
                $translation->setLocale($locale);
            }
        });
    }

    /**
     * {@inheritdoc}
     */
    public function getBlockPrefix()
    {
        return 'translations';
    }

    /**
     * {@inheritdoc}
     */
    public function buildView(FormView $view, FormInterface $form, array $options)
    {
        $view->vars['theme'] = $options['theme'];
    }
}