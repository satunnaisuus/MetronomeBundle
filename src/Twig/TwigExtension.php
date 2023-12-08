<?php

namespace Satunnaisuus\MetronomeBundle\Twig;

use Satunnaisuus\MetronomeBundle\Crud\Action\Form\FormElementConfig;
use Satunnaisuus\MetronomeBundle\Crud\Action\Form\FormElementType\FormInputType;
use Satunnaisuus\MetronomeBundle\Entity\File;
use Satunnaisuus\MetronomeBundle\Service\FileUploader;
use Satunnaisuus\MetronomeBundle\Service\FileUrlGenerator;
use Symfony\Component\Form\FormView;
use Twig\Extension\AbstractExtension;
use Twig\TwigFilter;
use Twig\TwigFunction;

class TwigExtension extends AbstractExtension
{
    public function __construct(private FileUrlGenerator $fileUrlGenerator)
    {
    }


    /**
     * {@inheritdoc}
     */
    public function getFunctions()
    {
        return [
            new TwigFunction('recursiveArrayAccess', [$this, 'recursiveArrayAccess']),
            new TwigFunction('getRootForm', [$this, 'getRootForm']),
            new TwigFunction('CrudFormHasErrors', [$this, 'crudFormHasErrors']),
            new TwigFunction('uploadedAsset', [$this, 'uploadedAsset']),
            new TwigFunction('json_decode', 'json_decode'),
            new TwigFunction('executeCallable', [$this, 'executeCallable']),
        ];
    }

    /**
     * {@inheritdoc}
     */
    public function getFilters()
    {
        return [
            new TwigFilter('repeat', 'str_repeat'),
            new TwigFilter('urldecode', 'urldecode'),
        ];
    }

    public function executeCallable(callable $callable, $params = [])
    {
        return $callable(...$params);
    }

    public function recursiveArrayAccess($array, string $propertyPath)
    {
        $parts = explode('.', $propertyPath);

        if (count($parts) === 1) {
            return $array[$propertyPath] ?? null;
        }

        return $this->recursiveArrayAccess($array[array_shift($parts)], implode('.', $parts));
    }

    public function getRootForm($form)
    {
        return $form->parent === null ? $form : $this->getRootForm($form->parent);
    }

    public function crudFormHasErrors(FormView $formView, FormElementConfig $node)
    {
        if ($node->getType() instanceof FormInputType) {
            try {
                $form = $this->recursiveArrayAccess($formView, $node->getOptions()['child']);
                return !$form->vars['valid'];
            } catch (\Exception $e) {}
        }

        foreach ($node->getChildren() as $item) {
            if ($this->crudFormHasErrors($formView, $item)) {
                return true;
            }
        }

        return false;
    }

    public function uploadedAsset(?File $file, string $mapping = 'default'): ?string
    {
        if ($file === null) {
            return null;
        }

        return $this->fileUrlGenerator->getFileUrl($file, $mapping);
    }
}
