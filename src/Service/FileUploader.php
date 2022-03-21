<?php

namespace Satunnaisuus\MetronomeBundle\Service;

use Satunnaisuus\MetronomeBundle\Service\Exception\FileValidationException;
use Symfony\Component\HttpFoundation\File\Exception\FileException;
use Symfony\Component\HttpFoundation\File\File;
use Symfony\Component\HttpFoundation\File\UploadedFile;
use Symfony\Component\String\Slugger\AsciiSlugger;
use Symfony\Component\Validator\Validator\ValidatorInterface;
use Symfony\Component\Validator\Constraints as Assert;

class FileUploader
{
    private ValidatorInterface $validator;

    private array $mappings;

    public function __construct(ValidatorInterface $validator, array $mappings)
    {
        $this->mappings = $mappings;
        $this->validator = $validator;
    }

    public function getMappings(): array
    {
        return $this->mappings;
    }

    public function upload(UploadedFile $file, string $mappingName): File
    {
        if (!$file->isValid()) {
            throw new FileException('File is not valid');
        }

        $config = $this->mappings[$mappingName];

        $errors = $this->validateFile($file, $config['validation_options']);

        if (count($errors) > 0) {
            throw new FileValidationException($errors);
        }

        $mask = array_key_exists('name_mask', $config) ? $config['name_mask'] : ':name';
        $filePath = $this->createName($mask, $file->getClientOriginalName());

        $dir = pathinfo($filePath, PATHINFO_DIRNAME);
        $name = pathinfo($filePath, PATHINFO_BASENAME);

        return $file->move($config['upload_destination'] . DIRECTORY_SEPARATOR . $dir, $name);
    }

    public function getFileUrl(File $file, string $mappingName): string
    {
        $config = $this->mappings[$mappingName];

        if (!str_starts_with($file->getRealPath(), $config['upload_destination'])) {
            return '';
        }

        $path = substr($file->getRealPath(), strlen($config['upload_destination']));

        return $config['uri_prefix'] . $path;
    }

    public function getFilePath(File $file, string $mappingName): string
    {
        $config = $this->mappings[$mappingName];

        if (!str_starts_with($file->getRealPath(), $config['upload_destination'])) {
            return '';
        }

        return substr($file->getRealPath(), strlen($config['upload_destination']));
    }

    private function createName($mask, string $name): string
    {
        $slugger = new AsciiSlugger('en');
        $parameters = [
            'name' => $name,
            'slug' => $slugger->slug(pathinfo($name, PATHINFO_FILENAME)),
            'uniqid' => uniqid(),
            'extension' => '',
            'timestamp' => time(),
            'y' => date('y'),
            'Y' => date('Y'),
            'm' => date('n'),
            'M' => date('m'),
            'd' => date('j'),
            'D' => date('d'),
        ];

        $extension = pathinfo($name, PATHINFO_EXTENSION);

        if ($extension) {
            $parameters['extension'] = '.' . $extension;
            $parameters['slug'] .= '.' . $extension;
        }

        $newName = $mask;

        foreach ($parameters as $parameter => $value) {
            $newName = str_replace(':' . $parameter, $value, $newName);
        }

        return $newName;
    }

    private function validateFile(UploadedFile $file, $options)
    {
        if (count($options) === 0) {
            return [];
        }

        $constraint = new Assert\File($options);
        $result = [];

        foreach ($this->validator->validate($file, $constraint) as $violation) {
            $result[] = $violation->getMessage();
        }

        return $result;
    }

    private function getMapping()
    {

    }
}