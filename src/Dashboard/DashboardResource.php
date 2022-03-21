<?php

namespace Satunnaisuus\MetronomeBundle\Dashboard;

use Satunnaisuus\MetronomeBundle\AbstractResource;
use Satunnaisuus\MetronomeBundle\ActionsBuilder;

class DashboardResource extends AbstractResource
{
    public function configureActions(ActionsBuilder $configurator)
    {
        $configurator->addAction('index', IndexAction::class, []);
    }

    public function getDefaultActionName(): string
    {
        return 'index';
    }
}