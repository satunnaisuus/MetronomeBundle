<?php

namespace Satunnaisuus\MetronomeBundle\Crud\Action\Form;

use Satunnaisuus\MetronomeBundle\Form\Type\CrudFormType;
use Symfony\Component\Form\FormFactoryInterface;
use Symfony\Component\Form\FormInterface;

class CrudFormFactory
{
    private FormFactoryInterface $factory;

    public function __construct(FormFactoryInterface $factory)
    {
        $this->factory = $factory;
    }

    public function create($entity, FormMapper $mapper): FormInterface
    {
        $builder = $this->factory->createBuilder(CrudFormType::class, $entity, [
            'form_map' => $mapper,
            'elements' => $mapper->getElements(),
            'form_entry_collection_layouts' => $mapper->getCollectionEntries(),
            'form_entry_layouts' => $mapper->getEntries(),
        ]);

        foreach ($mapper->getRegisteredFormFields() as $fieldConfig) {
            $builder->add($fieldConfig[0], $fieldConfig[1], $fieldConfig[2]);
        }

        foreach ($mapper->getFormBuildListeners() as $listener) {
            $listener($builder);
        }

        return $builder->getForm();
    }
}