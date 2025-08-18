import React from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { useTranslation } from 'react-i18next';
import { Button } from '../ui/Button';
import { Input } from '../ui/Input';
import { Select } from '../ui/Select';

const propertySchema = z.object({
  buildingName: z.string().min(1, 'Building name is required'),
  unitNumber: z.string().min(1, 'Unit number is required'),
  propertyType: z.string().min(1, 'Property type is required'),
  bedrooms: z.number().min(0, 'Bedrooms must be 0 or more'),
  bathrooms: z.number().min(1, 'At least 1 bathroom is required'),
  area: z.number().min(1, 'Area must be greater than 0'),
  rentAmount: z.number().min(1, 'Rent amount must be greater than 0'),
  status: z.string().min(1, 'Status is required'),
});

const PropertyForm = ({ property, onSave, onCancel }) => {
  const { t } = useTranslation();
  
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset
  } = useForm({
    resolver: zodResolver(propertySchema),
    defaultValues: property || {
      buildingName: '',
      unitNumber: '',
      propertyType: '',
      bedrooms: 0,
      bathrooms: 1,
      area: 0,
      rentAmount: 0,
      status: 'available'
    }
  });

  const onSubmit = async (data) => {
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      console.log('Property data:', data);
      onSave(data);
      reset();
    } catch (error) {
      console.error('Error saving property:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* Building Name */}
        <div>
          <label className="block text-sm font-medium text-neutral-700 mb-2">
            {t('properties.buildingName')}
          </label>
          <Input
            {...register('buildingName')}
            placeholder="Enter building name"
          />
          {errors.buildingName && (
            <p className="text-red-500 text-sm mt-1">{errors.buildingName.message}</p>
          )}
        </div>

        {/* Unit Number */}
        <div>
          <label className="block text-sm font-medium text-neutral-700 mb-2">
            {t('properties.unitNumber')}
          </label>
          <Input
            {...register('unitNumber')}
            placeholder="Enter unit number"
          />
          {errors.unitNumber && (
            <p className="text-red-500 text-sm mt-1">{errors.unitNumber.message}</p>
          )}
        </div>

        {/* Property Type */}
        <div>
          <label className="block text-sm font-medium text-neutral-700 mb-2">
            {t('properties.propertyType')}
          </label>
          <Select {...register('propertyType')}>
            <option value="">Select property type</option>
            <option value="Apartment">Apartment</option>
            <option value="Studio">Studio</option>
            <option value="Villa">Villa</option>
            <option value="Townhouse">Townhouse</option>
          </Select>
          {errors.propertyType && (
            <p className="text-red-500 text-sm mt-1">{errors.propertyType.message}</p>
          )}
        </div>

        {/* Status */}
        <div>
          <label className="block text-sm font-medium text-neutral-700 mb-2">
            {t('common.status')}
          </label>
          <Select {...register('status')}>
            <option value="available">{t('properties.status.available')}</option>
            <option value="rented">{t('properties.status.rented')}</option>
            <option value="booked">{t('properties.status.booked')}</option>
          </Select>
          {errors.status && (
            <p className="text-red-500 text-sm mt-1">{errors.status.message}</p>
          )}
        </div>

        {/* Bedrooms */}
        <div>
          <label className="block text-sm font-medium text-neutral-700 mb-2">
            {t('properties.bedrooms')}
          </label>
          <Input
            type="number"
            {...register('bedrooms', { valueAsNumber: true })}
            min="0"
          />
          {errors.bedrooms && (
            <p className="text-red-500 text-sm mt-1">{errors.bedrooms.message}</p>
          )}
        </div>

        {/* Bathrooms */}
        <div>
          <label className="block text-sm font-medium text-neutral-700 mb-2">
            {t('properties.bathrooms')}
          </label>
          <Input
            type="number"
            {...register('bathrooms', { valueAsNumber: true })}
            min="1"
          />
          {errors.bathrooms && (
            <p className="text-red-500 text-sm mt-1">{errors.bathrooms.message}</p>
          )}
        </div>

        {/* Area */}
        <div>
          <label className="block text-sm font-medium text-neutral-700 mb-2">
            {t('properties.area')}
          </label>
          <Input
            type="number"
            {...register('area', { valueAsNumber: true })}
            min="1"
            placeholder="Square feet"
          />
          {errors.area && (
            <p className="text-red-500 text-sm mt-1">{errors.area.message}</p>
          )}
        </div>

        {/* Rent Amount */}
        <div>
          <label className="block text-sm font-medium text-neutral-700 mb-2">
            {t('properties.rentAmount')}
          </label>
          <Input
            type="number"
            {...register('rentAmount', { valueAsNumber: true })}
            min="1"
            placeholder="AED"
          />
          {errors.rentAmount && (
            <p className="text-red-500 text-sm mt-1">{errors.rentAmount.message}</p>
          )}
        </div>
      </div>

      {/* Form Actions */}
      <div className="flex justify-end space-x-3 rtl:space-x-reverse pt-6 border-t border-neutral-200">
        <Button
          type="button"
          variant="outline"
          onClick={onCancel}
          disabled={isSubmitting}
        >
          {t('common.cancel')}
        </Button>
        <Button
          type="submit"
          disabled={isSubmitting}
        >
          {isSubmitting ? t('common.loading') : t('common.save')}
        </Button>
      </div>
    </form>
  );
};

export { PropertyForm };
