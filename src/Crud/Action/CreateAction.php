<?php

namespace Satunnaisuus\MetronomeBundle\Crud\Action;

use Satunnaisuus\MetronomeBundle\AbstractAction;
use Satunnaisuus\MetronomeBundle\AdminContext;
use Satunnaisuus\MetronomeBundle\Crud\AbstractCrudResource;
use Satunnaisuus\MetronomeBundle\Crud\Action\Form\CrudFormFactory;
use Satunnaisuus\MetronomeBundle\Crud\Action\Form\FormMapper;
use Satunnaisuus\MetronomeBundle\Crud\Action\ListAction\DataFetcher;
use Satunnaisuus\MetronomeBundle\Form\Type\Exception\CrudFormRehandle;
use Symfony\Component\Form\FormFactoryInterface;
use Symfony\Component\Form\FormInterface;
use Symfony\Component\HttpFoundation\RedirectResponse;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\OptionsResolver\OptionsResolver;
use Symfony\Component\Routing\RouterInterface;

class CreateAction extends AbstractAction
{
    public function handle(AdminContext $context): Response
    {
        $request = $context->getRequest();
        $resource = $context->getResource();
        $entity = $context->getResource()->createEntity($request->query->get('type'));
        $mapper = $this->container->get('formMapper');
        $context->getResource()->configureForm($mapper, $entity);


        $form = $this->createCrudForm($entity, $mapper);
        $formReady = false;
        while (!$formReady) {
            try {
                $form->handleRequest($request);
                $formReady = true;
            } catch (CrudFormRehandle $e) {
                $form = $this->createCrudForm($entity, $mapper);
            }
        }

        if ($request->isXmlHttpRequest()) {
            if ($form->isSubmitted()) {
                $form->clearErrors(true);
            }

            return $this->render('@Admin/crud/form.html.twig', array_merge($this->getViewParameters($context), [
                'form' => $form->createView(),
            ]));
        } else if ($form->isSubmitted() && $form->isValid()) {
            $this->saveEntity($resource, $entity);

            $referer = $form->get('_admin_referer')->getData();

            if ($referer) {
                return new RedirectResponse($referer);
            } else {
                return new RedirectResponse(
                    $this->container->get('router')->generate(
                        $request->get('_route'),
                        ['action' => 'list', 'resource' => $context->getResourceName()]
                    )
                );
            }
        }

        return $this->render('@Admin/crud/action_create.html.twig', array_merge($this->getViewParameters($context), [
            'form' => $form->createView(),
        ]));
    }

    public function getViewParameters(AdminContext $context): array
    {
        return array_merge(parent::getViewParameters($context), [

        ]);
    }

    public function configureOptions(OptionsResolver $resolver)
    {
        parent::configureOptions($resolver);

        $resolver->setDefault('template', '@Admin/crud/button/create.html.twig');
        $resolver->setDefault('label', 'Создать');
        $resolver->setDefault('inheritance_mapping', []);
        $resolver->setDefault('inheritance_route_param', 'type');
        $resolver->setDefault('icon', 'plus-lg');
    }

    public function toArray(array $options): array
    {
        return array_merge(parent::toArray($options), [
            'inheritance_mapping' => $options['inheritance_mapping'],
            'inheritance_route_param' => $options['inheritance_route_param'],
        ]);
    }

    protected function saveEntity(AbstractCrudResource $resource, $entity): void
    {
        $resource->saveEntity($entity);
    }

    public static function getSubscribedServices()
    {
        return array_merge(parent::getSubscribedServices(), [
            'formMapper' => FormMapper::class,
            'crudFormFactory' => CrudFormFactory::class,
            'form.factory' => FormFactoryInterface::class,
            'data_fetcher' => DataFetcher::class,
            'router' => RouterInterface::class,
        ]);
    }

    private function createCrudForm($entity, FormMapper $mapper): FormInterface
    {
        return $this->container->get('crudFormFactory')->create($entity, $mapper);
    }
}