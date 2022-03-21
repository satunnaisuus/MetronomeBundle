<?php

namespace Satunnaisuus\MetronomeBundle\Crud\Action;

use Satunnaisuus\MetronomeBundle\AbstractAction;
use Satunnaisuus\MetronomeBundle\AdminContext;
use Satunnaisuus\MetronomeBundle\Crud\AbstractCrudResource;
use Satunnaisuus\MetronomeBundle\Crud\Action\Form\CrudFormFactory;
use Satunnaisuus\MetronomeBundle\Crud\Action\Form\FormMapper;
use Satunnaisuus\MetronomeBundle\Crud\Action\ListAction\DataFetcher;
use Satunnaisuus\MetronomeBundle\Crud\EntityClassConfigurator;
use Satunnaisuus\MetronomeBundle\Form\Type\Exception\CrudFormRehandle;
use Symfony\Component\Form\FormFactoryInterface;
use Symfony\Component\Form\FormInterface;
use Symfony\Component\HttpFoundation\RedirectResponse;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\HttpKernel\Exception\NotFoundHttpException;
use Symfony\Component\OptionsResolver\OptionsResolver;
use Symfony\Component\Routing\RouterInterface;

class EditAction extends AbstractAction
{
    public function handle(AdminContext $context): Response
    {
        $request = $context->getRequest();
        $resource = $context->getResource();

        $entity = $resource->findEntity($request->query->get('entity_id'));

        if ($entity === null) {
            throw new NotFoundHttpException();
        }

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

            return $this->render('@MetronomeBundle/crud/form.html.twig', array_merge($this->getViewParameters($context), [
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

        return $this->render('@MetronomeBundle/crud/action_edit.html.twig', array_merge($this->getViewParameters($context), [
            'form' => $form->createView(),
        ]));
    }

    public function getViewParameters(AdminContext $context): array
    {
        $entityClassConfig = new EntityClassConfigurator();
        $context->getResource()->configureEntityClass($entityClassConfig);

        return array_merge(parent::getViewParameters($context), [
            'entity' => $this->container->get('data_fetcher')->findEntity(
                $entityClassConfig->getBaseClass(),
                $context->getRequest()->get('entity_id')
            ),
        ]);
    }

    public function configureOptions(OptionsResolver $resolver)
    {
        parent::configureOptions($resolver);

        $resolver->setDefault('label', 'Редактировать');
        $resolver->setDefault('scope', AbstractAction::SCOPE_ENTITY);
        $resolver->setDefault('show', true);
        $resolver->setDefault('confirmation', false);
        $resolver->setDefault('confirmationMessage', 'Вы уверены?');
        $resolver->setDefault('icon', 'pencil-square');
    }

    public function toArray(array $options): array
    {
        return array_merge(parent::toArray($options), [
            'show' => new class($options) {
                private array $options;

                public function __construct(array $options)
                {
                    $this->options = $options;
                }

                public function check($entity): bool
                {
                    if (is_callable($this->options['show'])) {
                        return $this->options['show']($entity);
                    }

                    return (bool) $this->options['show'];
                }
            },
            'confirmation' => $options['confirmation'],
            'confirmationMessage' => $options['confirmationMessage'],
        ]);
    }

    protected function saveEntity(AbstractCrudResource $resource, $entity): void
    {
        $resource->saveEntity($entity);
    }

    protected function createCrudForm($entity, FormMapper $mapper): FormInterface
    {
        return $this->container->get('crudFormFactory')->create($entity, $mapper);
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
}