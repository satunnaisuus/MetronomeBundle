<?php

namespace Satunnaisuus\MetronomeBundle\Exception;

use Throwable;

class ResourceNotFoundException extends \Exception
{
    private $resourceId;

    public function __construct($resourceId, $message = "", $code = 0, Throwable $previous = null)
    {
        $this->resourceId = $resourceId;
        parent::__construct($message, $code, $previous);
    }

    public function getResourceId()
    {
        return $this->resourceId;
    }
}