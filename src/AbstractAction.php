<?php

namespace Satunnaisuus\MetronomeBundle;

use Symfony\Component\DependencyInjection\ParameterBag\ParameterBagInterface;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\OptionsResolver\OptionsResolver;
use Symfony\Component\Routing\RouterInterface;
use Symfony\Component\Security\Csrf\CsrfToken;
use Symfony\Component\Security\Csrf\CsrfTokenManagerInterface;
use Symfony\Component\Serializer\SerializerInterface;
use Symfony\Contracts\Service\ServiceSubscriberInterface;
use Symfony\Contracts\Service\ServiceSubscriberTrait;
use Twig\Environment;

abstract class AbstractAction implements ServiceSubscriberInterface
{
    use ServiceSubscriberTrait;

    const SCOPE_GLOBAL = 'global';

    const SCOPE_ENTITY = 'entity';

    public function configureOptions(OptionsResolver $resolver)
    {
        $resolver->setDefault('label', '');
        $resolver->setDefault('scope', self::SCOPE_GLOBAL);
        $resolver->setDefault('template', '@Admin/action/button_default.html.twig');
        $resolver->setDefault('name', '');
        $resolver->setDefault('hidden', false);
        $resolver->setDefault('color', 'primary');
        $resolver->setDefault('icon', null);

        $resolver->isRequired('template');
        $resolver->isRequired('label');
        $resolver->isRequired('scope');
        $resolver->isRequired('name');
        $resolver->isRequired('hidden');

        $resolver->setAllowedTypes('label', 'string');
        $resolver->setAllowedTypes('scope', 'string');
        $resolver->setAllowedTypes('name', 'string');
        $resolver->setAllowedTypes('template', 'string');
        $resolver->setAllowedTypes('color', 'string');
        $resolver->setAllowedTypes('hidden', 'boolean');
    }

    abstract public function handle(AdminContext $context): Response;

    protected function getViewParameters(AdminContext $context): array
    {
        return $context->getResource()->getViewParameters($context);
    }

    protected function render(string $view, array $parameters = [], Response $response = null): Response
    {
        $content = $this->container->get('twig')->render($view, $parameters);

        if (null === $response) {
            $response = new Response();
        }

        $response->setContent($content);

        return $response;
    }

    protected function json($data, int $status = 200, array $headers = [], array $context = []): JsonResponse
    {
        $json = $this->container->get('serializer')->serialize($data, 'json', array_merge([
            'json_encode_options' => JsonResponse::DEFAULT_ENCODING_OPTIONS,
        ], $context));

        return new JsonResponse($json, $status, $headers, true);
    }

    protected function isCsrfTokenValid(string $id, ?string $token): bool
    {
        return $this->container->get('security.csrf.token_manager')->isTokenValid(new CsrfToken($id, $token));
    }

    public static function getSubscribedServices()
    {
        return [
            'twig' => Environment::class,
            'params' => ParameterBagInterface::class,
            'security.csrf.token_manager' => CsrfTokenManagerInterface::class,
            'serializer' => '?'.SerializerInterface::class,
        ];
    }

    public function toArray(array $options): array
    {
        return [
            'template' => $options['template'],
            'scope' => $options['scope'],
            'label' => $options['label'],
            'name' => $options['name'],
            'hidden' => $options['hidden'],
            'color' => $options['color'],
            'icon' => $options['icon'],
        ];
    }
 }