<?php

namespace Satunnaisuus\MetronomeBundle\Crud\Action\Form;

class FormMapper extends AbstractFormMapper
{
    protected array $collectionsEntries = [];

    protected array $entries = [];

    protected array $formBuildListeners = [];

    protected $registeredFormFields = [];

    public function addFormInput(string $child, string $type = null, array $options = []): self
    {
        $this->registerFormInput($child, $type, $options);
        $this->mapFormInput($child, ['options' => $options]);
        return $this;
    }

    public function registerFormInput($child, ?string $type = null, array $options = []): self
    {
        $this->registeredFormFields[] = [$child, $type, $options];
        return $this;
    }

    public function mapCollectionEntryType(string $blockPrefix, callable $entry): self
    {
        $mapper = new CollectionEntryMapper($this->formElementFactory);
        $entry($mapper);
        $this->collectionsEntries[$blockPrefix] = $mapper;
        return $this;
    }

    public function mapEntryType(string $blockPrefix, callable $entry): self
    {
        $mapper = new EntryMapper($this->formElementFactory);
        $entry($mapper);
        $this->entries[$blockPrefix] = $mapper;
        return $this;
    }

    public function getCollectionEntries(): array
    {
        return $this->collectionsEntries;
    }

    public function getEntries(): array
    {
        return $this->entries;
    }

    public function addFormBuildListener(callable $listener): self
    {
        $this->formBuildListeners[] = $listener;
        return $this;
    }

    public function getFormBuildListeners(): array
    {
        return $this->formBuildListeners;
    }

    public function getRegisteredFormFields(): array
    {
        return $this->registeredFormFields;
    }

    protected function getInnerFormMapperFactory(): AbstractInnerFormMapperFactory
    {
        return new class($this) extends AbstractInnerFormMapperFactory
        {
            private FormMapper $mapper;

            public function __construct(FormMapper $mapper)
            {
                $this->mapper = $mapper;
            }

            public function create(): AbstractFormMapper
            {
                return new InnerFormMapper($this->mapper);
            }
        };
    }
}