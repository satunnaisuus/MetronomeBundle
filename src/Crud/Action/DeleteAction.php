<?php

namespace Satunnaisuus\MetronomeBundle\Crud\Action;

use Satunnaisuus\MetronomeBundle\AbstractAction;
use Satunnaisuus\MetronomeBundle\AdminContext;
use Satunnaisuus\MetronomeBundle\Crud\Action\ListAction\DataFetcher;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\OptionsResolver\OptionsResolver;
use Symfony\Component\Routing\RouterInterface;

class DeleteAction extends AbstractAction
{
    public function handle(AdminContext $context): Response
    {
        $request = $context->getRequest();
        $token = $request->get('token');

        if (! $this->isCsrfTokenValid('admin', $token)) {
            throw new \Exception();
        }

        $context->getResource()->deleteEntity(
            $context->getRequest()->get('entity_id')
        );

        return $this->json([
            'redirect' => $this->container->get(RouterInterface::class)
                ->generate('admin', [
                    'resource' => $context->getResourceName(),
                    'action' => 'list',
                ])
        ]);
    }

    public function configureOptions(OptionsResolver $resolver)
    {
        parent::configureOptions($resolver);

        $resolver->setDefault('scope', AbstractAction::SCOPE_ENTITY);
        $resolver->setDefault('label', 'Удалить');
        $resolver->setDefault('confirmation', true);
        $resolver->setDefault('confirmationMessage', 'Вы уверены?');
        $resolver->setDefault('show', true);
        $resolver->setDefault('color', 'danger');
        $resolver->setDefault('icon', 'trash');
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
            RouterInterface::class,
        ]);
    }
}