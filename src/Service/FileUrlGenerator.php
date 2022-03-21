<?php

namespace Satunnaisuus\MetronomeBundle\Service;

use Satunnaisuus\MetronomeBundle\Entity\File;

class FileUrlGenerator
{
    public function __construct(private array $mappings)
    {
    }

    public function getFileUrl(File $file, string $mappingName): ?string
    {
        if ($file->isEmpty()) {
            return null;
        }

        $config = $this->mappings[$mappingName];

        return $config['uri_prefix'] . '/' . $file->getPath();
    }
}