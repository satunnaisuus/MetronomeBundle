<?php

namespace Satunnaisuus\MetronomeBundle;

use Symfony\Component\DependencyInjection\Compiler\CompilerPassInterface;
use Symfony\Component\DependencyInjection\ContainerBuilder;

class AdminPanelCompilerPass implements CompilerPassInterface
{
    public function process(ContainerBuilder $container)
    {
        $panels = array_keys($container->findTaggedServiceIds('admin.panel'));

        $container->autowire(AbstractAdminPanel::class, $panels[0]);
    }
}