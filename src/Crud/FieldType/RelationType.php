<?php

namespace Satunnaisuus\MetronomeBundle\Crud\FieldType;

use Symfony\Component\OptionsResolver\OptionsResolver;
use Symfony\Component\PropertyAccess\PropertyAccessorInterface;
use Symfony\Component\Routing\RouterInterface;

class RelationType extends AbstractFieldType
{
    private RouterInterface $router;

    private PropertyAccessorInterface $propertyAccessor;

    public function __construct(RouterInterface $router, PropertyAccessorInterface $propertyAccessor)
    {
        $this->router = $router;
        $this->propertyAccessor = $propertyAccessor;
    }

    public function convertValue($value, array $options)
    {
        if (! is_object($value)) {
            return null;
        }

        return [
            'url' => $this->router->generate('admin', [
                'resource' => $options['resource'],
                'action' => $options['action'],
                'entity_id' => $this->propertyAccessor->getValue($value, $options['property_id'])
            ]),
            'name' => $options['property_name'] === null ? (string)$value : $this->propertyAccessor->getValue($value, $options['property_name']),
        ];
    }

    public function configureOptions(OptionsResolver $resolver): void
    {
        parent::configureOptions($resolver);

        $resolver->setRequired('resource');

        $resolver->setDefault('property_id', 'id');
        $resolver->setDefault('property_name', null);
        $resolver->setDefault('resource', null);
        $resolver->setDefault('action', 'show');
    }

    public function getType(): string
    {
        return 'relation';
    }
}