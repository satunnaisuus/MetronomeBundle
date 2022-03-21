<?php

namespace Satunnaisuus\MetronomeBundle\Controller;

use Satunnaisuus\MetronomeBundle\AbstractAdminPanel;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

class AdminController extends AbstractController
{
    /**
     * @Route("/", name="admin")
     */
    public function index(Request $request, AbstractAdminPanel $panel): Response
    {
        return $panel->handleRequest($request);
    }
}