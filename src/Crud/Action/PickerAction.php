<?php

namespace Satunnaisuus\MetronomeBundle\Crud\Action;

use Satunnaisuus\MetronomeBundle\AdminContext;
use Satunnaisuus\MetronomeBundle\Crud\Action\ListAction\ListConfigurator;
use Symfony\Component\OptionsResolver\OptionsResolver;

class PickerAction extends ListAction
{
    public function configureList(AdminContext $context, ListConfigurator $listConfigurator): void
    {
        parent::configureList($context, $listConfigurator);
        $listConfigurator->setShowCheckboxes(true);
    }

    public function configureOptions(OptionsResolver $resolver)
    {
        parent::configureOptions($resolver);
        $resolver->setDefault('hidden', true);
    }
}