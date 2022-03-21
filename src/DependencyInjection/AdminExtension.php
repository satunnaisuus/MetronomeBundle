<?php

namespace Satunnaisuus\MetronomeBundle\DependencyInjection;

use Satunnaisuus\MetronomeBundle\AbstractAdminPanel;
use Satunnaisuus\MetronomeBundle\Form\Type\AjaxUploaderType;
use Satunnaisuus\MetronomeBundle\Service\FileUploader;
use Satunnaisuus\MetronomeBundle\Service\FileUrlGenerator;
use Symfony\Component\Config\FileLocator;
use Symfony\Component\DependencyInjection\ContainerBuilder;
use Symfony\Component\DependencyInjection\Loader\XmlFileLoader;
use Symfony\Component\HttpKernel\DependencyInjection\Extension;

class AdminExtension extends Extension
{
    public function load(array $configs, ContainerBuilder $container)
    {
        $loader = new XmlFileLoader($container, new FileLocator(__DIR__.'/../Resources/config'));
        $loader->load('services.xml');

        $configuration = new Configuration();
        $config = $this->processConfiguration($configuration, $configs);

        $container->getDefinition(FileUploader::class)
            ->setArgument('$mappings', $config['ajax_uploader_mappings'])
        ;
        $container->getDefinition(FileUrlGenerator::class)
            ->setArgument('$mappings', $config['ajax_uploader_mappings'])
        ;
        $container->getDefinition(AjaxUploaderType::class)
            ->setArgument('$mappings', $config['ajax_uploader_mappings'])
        ;

        $container->registerForAutoconfiguration(AbstractAdminPanel::class)
            ->addTag('admin.panel')
        ;
    }
}
