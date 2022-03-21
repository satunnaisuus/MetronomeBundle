<?php

namespace Satunnaisuus\MetronomeBundle\Crud\Action;

use Satunnaisuus\MetronomeBundle\AbstractAction;
use Satunnaisuus\MetronomeBundle\AdminContext;
use Satunnaisuus\MetronomeBundle\Crud\Action\ListAction\DataFetcher;
use Satunnaisuus\MetronomeBundle\Crud\Action\ListAction\ListConfigurator;
use Satunnaisuus\MetronomeBundle\Crud\Action\ListAction\ListConfiguratorFactory;
use Satunnaisuus\MetronomeBundle\Crud\Action\ListAction\ListQuery;
use Satunnaisuus\MetronomeBundle\Form\Type\FilterFormType;
use Symfony\Component\Form\FormFactoryInterface;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\OptionsResolver\OptionsResolver;

class ListAction extends AbstractAction
{
    public function handle(AdminContext $context): Response
    {
        $request = $context->getRequest();
        $resource = $context->getResource();
        $listConfigurator = $this->container->get('list_configurator_factory')->create(
            $resource->getEntityClassConfig()->getBaseClass(),
            $resource->getResourceHash() . '_' . $context->getActionName()
        );
        $this->configureList($context, $listConfigurator);
        $resource->configureFilters($listConfigurator->getFiltersConfigurator());

        $filterFormBuilder = $this->container->get('form.factory')->createBuilder(FilterFormType::class, null, [
            'method' => 'get',
            'action' => $request->getPathInfo(),
        ]);

        foreach ($listConfigurator->getFilters() as $filterConfig) {
            $filterConfig->buildForm($filterFormBuilder);
        }

        $filtersForm = $filterFormBuilder->getForm();
        $filtersForm->handleRequest($request);

        if ($filtersForm->isSubmitted()) {
            $query = ListQuery::create($request, $filtersForm->getData());
        } else {
            $query = ListQuery::create($request);
        }

        $data = $this->container->get('data_fetcher')->fetch(
            $query,
            $resource,
            $listConfigurator
        );

        return $this->render(
            '@Admin/crud/' . ($request->isXmlHttpRequest() ? 'list.html.twig' : 'action_list.html.twig'),
            array_merge($this->getViewParameters($context), [
                'data' => $data,
                'config' => $listConfigurator,
                'query' => $query,
                'filterForm' => $filtersForm->createView(),
            ])
        );
    }

    public function getViewParameters(AdminContext $context): array
    {
        return array_merge(parent::getViewParameters($context), [
            'global_actions' => $context->getResource()->getActions()
                ->getByScope(AbstractAction::SCOPE_GLOBAL)
                ->exclude($context->getActionName())
                ->toArray(),
            'entity_actions' => $context->getResource()->getActions()
                ->getByScope(AbstractAction::SCOPE_ENTITY)
                ->toArray(),
        ]);
    }

    public function configureOptions(OptionsResolver $resolver)
    {
        parent::configureOptions($resolver);

        $resolver->setDefault('label', 'Список');
    }

    public static function getSubscribedServices()
    {
        return array_merge(parent::getSubscribedServices(), [
            'data_fetcher' => DataFetcher::class,
            'list_configurator_factory' => ListConfiguratorFactory::class,
            'form.factory' => '?'.FormFactoryInterface::class,
        ]);
    }

    public function configureList(AdminContext $context, ListConfigurator $listConfigurator): void
    {
        $context->getResource()->configureList($listConfigurator);
    }
}