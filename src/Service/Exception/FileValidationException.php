<?php

namespace Satunnaisuus\MetronomeBundle\Service\Exception;

class FileValidationException extends \Exception
{
    private array $errors;

    public function __construct(array $errors)
    {
        parent::__construct();
        $this->errors = $errors;
    }

    public function getErrors(): array
    {
        return $this->errors;
    }
}