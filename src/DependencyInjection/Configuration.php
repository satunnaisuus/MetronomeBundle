<?php

namespace Satunnaisuus\MetronomeBundle\DependencyInjection;

use Symfony\Component\Config\Definition\Builder\TreeBuilder;
use Symfony\Component\Config\Definition\ConfigurationInterface;

class Configuration implements ConfigurationInterface
{
    public function getConfigTreeBuilder()
    {
        $treeBuilder = new TreeBuilder('metronome');

        $treeBuilder->getRootNode()
            ->children()
                ->arrayNode('ajax_uploader_mappings')
                    ->useAttributeAsKey('name')
                    ->addDefaultChildrenIfNoneSet('default')
                    ->beforeNormalization()
                        ->always(function ($value) {
                            return is_array($value) ? array_merge(['default' => []], $value) : ['default' => []];
                        })
                    ->end()
                    ->arrayPrototype()
                        ->children()
                            ->scalarNode('uri_prefix')->defaultValue('/uploads')->end()
                            ->scalarNode('upload_destination')->defaultValue('%kernel.project_dir%/public/uploads')->end()
                            ->scalarNode('name_mask')->defaultValue(':Y/:m/:d/:uniqid/:slug')->end()
                            ->arrayNode('validation_options')
                                ->defaultValue([])
                                ->variablePrototype()
                            ->end()
                        ->end()
                    ->end()
                ->end()
            ->end()
        ;

        return $treeBuilder;
    }
}