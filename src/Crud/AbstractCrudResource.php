<?php

namespace Satunnaisuus\MetronomeBundle\Crud;

use Satunnaisuus\MetronomeBundle\AbstractResource;
use Satunnaisuus\MetronomeBundle\ActionsBuilder;
use Satunnaisuus\MetronomeBundle\Crud\Action\CreateAction;
use Satunnaisuus\MetronomeBundle\Crud\Action\DeleteAction;
use Satunnaisuus\MetronomeBundle\Crud\Action\EditAction;
use Satunnaisuus\MetronomeBundle\Crud\Action\Form\FormMapper;
use Satunnaisuus\MetronomeBundle\Crud\Action\ListAction;
use Satunnaisuus\MetronomeBundle\Crud\Action\ListAction\FiltersConfigurator;
use Satunnaisuus\MetronomeBundle\Crud\Action\ListAction\ListConfigurator;
use Satunnaisuus\MetronomeBundle\Crud\Action\PickerAction;
use Satunnaisuus\MetronomeBundle\Crud\Action\DetailedAction\DetailedViewMapper;
use Doctrine\Persistence\ManagerRegistry;

abstract class AbstractCrudResource extends AbstractResource
{
    public function configureActions(ActionsBuilder $builder)
    {
        $entityClassConfig = $this->getEntityClassConfig();

        $builder->addAction('list', ListAction::class);

        $builder->addAction('create', CreateAction::class, [
            'inheritance_mapping' => $entityClassConfig->getInheritanceMap(),
            'inheritance_route_param' => $entityClassConfig->getRouteParam(),
        ]);

        $builder->addAction('edit', EditAction::class);
        $builder->addAction('delete', DeleteAction::class);
        $builder->addAction('picker', PickerAction::class);
    }

    public function createEntity(?string $type)
    {
        $entityClassConfig = $this->getEntityClassConfig();

        if ($type === null) {
            $class = $entityClassConfig->getBaseClass();
        } else {
            $class = $entityClassConfig->getInheritance($type)->getClass();
        }

        return new $class;
    }

    public function findEntity($id)
    {
        return $this->container->get(ManagerRegistry::class)
            ->getManager()
            ->getRepository($this->getEntityClassConfig()->getBaseClass())
            ->find($id)
        ;
    }

    public function configureList(ListConfigurator $configurator): void
    {
        $configurator->setDefaultOrder('i.id', 'DESC');
    }

    public function configureFilters(FiltersConfigurator $configurator): void
    {

    }

    public function configureForm(FormMapper $mapper, $entity): void
    {

    }

    public function configureDetailedView(DetailedViewMapper $mapper, $entity): void
    {

    }

    abstract public function configureEntityClass(EntityClassConfigurator $configurator);

    public function getDefaultActionName(): string
    {
        return 'list';
    }

    public function getEntityClassConfig(): EntityClassConfigurator
    {
        $entityClassConfigurator = $this->container->get(EntityClassConfigurator::class);
        $this->configureEntityClass($entityClassConfigurator);
        return $entityClassConfigurator;
    }

    public function saveEntity($entity): void
    {
        $manager = $this->container->get(ManagerRegistry::class)->getManager();
        $manager->persist($entity);
        $manager->flush();
    }

    public function deleteEntity($id): void
    {
        $manager = $this->container->get(ManagerRegistry::class)->getManager();
        $entityClassConfig = $this->getEntityClassConfig();
        $entity = $manager->getRepository($entityClassConfig->getBaseClass())->find($id);

        if ($entity !== null) {
            $manager->remove($entity);
            $manager->flush();
        }
    }

    public static function getSubscribedServices()
    {
        return array_merge(parent::getSubscribedServices(), [
            ManagerRegistry::class,
            EntityClassConfigurator::class,
        ]);
    }
}