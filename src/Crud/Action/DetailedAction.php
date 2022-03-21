<?php

namespace Satunnaisuus\MetronomeBundle\Crud\Action;

use Satunnaisuus\MetronomeBundle\AbstractAction;
use Satunnaisuus\MetronomeBundle\AdminContext;
use Satunnaisuus\MetronomeBundle\Crud\Action\DetailedAction\DetailedViewMapperFactory;
use Satunnaisuus\MetronomeBundle\Crud\Action\ListAction\DataFetcher;
use Satunnaisuus\MetronomeBundle\Crud\EntityClassConfigurator;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\HttpKernel\Exception\NotFoundHttpException;
use Symfony\Component\OptionsResolver\OptionsResolver;

class DetailedAction extends AbstractAction
{
    public function handle(AdminContext $context): Response
    {
        $request = $context->getRequest();
        $resource = $context->getResource();

        $entity = $resource->findEntity($request->query->get('entity_id'));

        if ($entity === null) {
            throw new NotFoundHttpException();
        }

        $mapper = $this->container->get('detailedViewMapperFactory')->create(get_class($entity));
        $context->getResource()->configureDetailedView($mapper, $entity);

        return $this->render('@MetronomeBundle/crud/action_detailed.html.twig', array_merge($this->getViewParameters($context), [
            'elements' => $mapper->getElements(),
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
            'entity_actions' => $context->getResource()->getActions()
                ->getByScope(AbstractAction::SCOPE_ENTITY)
                ->exclude('detailed')
                ->toArray(),
        ]);
    }

    public function configureOptions(OptionsResolver $resolver)
    {
        parent::configureOptions($resolver);

        $resolver->setDefault('label', 'Подробнее');
        $resolver->setDefault('scope', AbstractAction::SCOPE_ENTITY);
        $resolver->setDefault('show', true);
        $resolver->setDefault('confirmation', false);
        $resolver->setDefault('confirmationMessage', 'Вы уверены?');
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

    public static function getSubscribedServices()
    {
        return array_merge(parent::getSubscribedServices(), [
            'data_fetcher' => DataFetcher::class,
            'detailedViewMapperFactory' => DetailedViewMapperFactory::class,
        ]);
    }
}