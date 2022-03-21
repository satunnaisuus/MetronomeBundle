<?php

namespace Satunnaisuus\MetronomeBundle\Dashboard;

use Satunnaisuus\MetronomeBundle\AbstractAction;
use Satunnaisuus\MetronomeBundle\AdminContext;
use Symfony\Component\HttpFoundation\Response;

class IndexAction extends AbstractAction
{
    public function handle(AdminContext $context): Response
    {
        return $this->render('@MetronomeBundle/dashboard/index.html.twig', $this->getViewParameters($context));
    }
}