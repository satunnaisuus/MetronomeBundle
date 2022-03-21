<?php

namespace Satunnaisuus\MetronomeBundle\Crud\Action\ListAction;

use Satunnaisuus\MetronomeBundle\Crud\FieldTypeGuesser;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Component\DependencyInjection\ContainerInterface;

class ListConfiguratorFactory
{
    private ContainerInterface $container;

    private FieldTypeGuesser $typeGuesser;

    private EntityManagerInterface $entityManager;

    public function __construct(ContainerInterface $container, FieldTypeGuesser $typeGuesser, EntityManagerInterface $entityManager)
    {
        $this->container = $container;
        $this->typeGuesser = $typeGuesser;
        $this->entityManager = $entityManager;
    }

    public function create(string $class, string $listId): ListConfigurator
    {
        return new ListConfigurator($class, $listId, $this->container, $this->typeGuesser, $this->entityManager);
    }
}