<?php

namespace Satunnaisuus\MetronomeBundle\Crud\Action\Form;

abstract class AbstractInnerFormMapperFactory
{
    abstract public function create(): AbstractFormMapper;
}