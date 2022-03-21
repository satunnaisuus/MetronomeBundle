<?php

namespace Satunnaisuus\MetronomeBundle\Crud\Action\ListAction\FilterType;

use Doctrine\ORM\QueryBuilder;
use Symfony\Component\Form\Extension\Core\Type\TextType;
use Symfony\Component\Form\FormBuilderInterface;
use function Symfony\Component\String\u;

class SearchFilterType extends AbstractFilterType
{
    public function applyFilter($value, QueryBuilder $builder, array $options): bool
    {
        if ($this->isEmptyValue($value)) {
            return false;
        }

        $property = $this->prepareProperty($builder, $options['property']);

        $builder->andWhere(
            $builder->expr()->like(
                $builder->expr()->lower($property),
                $builder->expr()->literal('%' . u($value)->lower()->trim() . '%')
            )
        );

        return true;
    }

    public function buildForm(FormBuilderInterface $builder, array $options): void
    {
        $builder
            ->add($options['id'], TextType::class, [
                'label' => $options['label'],
                'required' => false,
            ]);
    }

    public function isEmptyValue($value): bool
    {
        return !is_string($value) || strlen($value) === 0;
    }
}