<?php

namespace Satunnaisuus\MetronomeBundle\Exception;

use Throwable;

class ActionNotFoundException extends \Exception
{
    private $actionId;

    public function __construct($actionId, $message = "", $code = 0, Throwable $previous = null)
    {
        $this->actionId = $actionId;
        parent::__construct($message, $code, $previous);
    }

    public function getActionId()
    {
        return $this->actionId;
    }
}