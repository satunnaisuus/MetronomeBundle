<?php

namespace Satunnaisuus\MetronomeBundle\Controller;

use Satunnaisuus\MetronomeBundle\Service\Exception\FileValidationException;
use Satunnaisuus\MetronomeBundle\Service\FileUploader;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\File\UploadedFile;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

class AjaxUploaderController extends AbstractController
{
    /**
     * @Route("/ajax-uploader/{mapping}", name="admin:ajax-uploader")
     */
    public function upload(Request $request, FileUploader $uploader, string $mapping): Response
    {
        if ($request->files->has('upload')) {
            $file = $request->files->get('upload');
            if ($file instanceof UploadedFile) {
                try {
                    $uploadedFile = $uploader->upload($file, $mapping);

                    return $this->json([
                        'originalName' => $file->getClientOriginalName(),
                        'size' => $uploadedFile->getSize(),
                        'mimeType' => $uploadedFile->getMimeType(),
                        'url' => $uploader->getFileUrl($uploadedFile, $mapping),
                    ]);
                } catch (FileValidationException $e) {
                    return $this->json($e->getErrors(), 500);
                } catch (\Exception $e) {
                    return new Response(null, 500);
                }
            }
        }

        return new Response('Error', 500);
    }
}
