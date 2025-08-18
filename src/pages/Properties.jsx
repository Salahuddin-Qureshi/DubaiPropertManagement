import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Plus, Search, Filter, Edit, Eye, Trash2 } from 'lucide-react';
import { Button } from '../components/ui/Button';
import { Input } from '../components/ui/Input';
import { Select } from '../components/ui/Select';
import { Badge } from '../components/ui/Badge';
import { Modal } from '../components/ui/Modal';
import { PropertyForm } from '../components/forms/PropertyForm';

const Properties = () => {
  const { t } = useTranslation();
  const [showAddModal, setShowAddModal] = useState(false);
  const [editingProperty, setEditingProperty] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [statusFilter, setStatusFilter] = useState('all');

  // Mock data
  const properties = [
    {
      id: 1,
      buildingName: 'Tower A',
      unitNumber: '101',
      propertyType: 'Apartment',
      bedrooms: 2,
      bathrooms: 2,
      area: 1200,
      rentAmount: 85000,
      status: 'rented',
      tenant: 'Ahmed Al Mansouri'
    },
    {
      id: 2,
      buildingName: 'Tower B',
      unitNumber: '205',
      propertyType: 'Apartment',
      bedrooms: 3,
      bathrooms: 2,
      area: 1500,
      rentAmount: 95000,
      status: 'available',
      tenant: null
    },
    {
      id: 3,
      buildingName: 'Tower C',
      unitNumber: '312',
      propertyType: 'Studio',
      bedrooms: 0,
      bathrooms: 1,
      area: 600,
      rentAmount: 45000,
      status: 'booked',
      tenant: 'Sarah Johnson'
    },
    {
      id: 4,
      buildingName: 'Tower A',
      unitNumber: '203',
      propertyType: 'Apartment',
      bedrooms: 1,
      bathrooms: 1,
      area: 800,
      rentAmount: 55000,
      status: 'rented',
      tenant: 'Fatima Hassan'
    }
  ];

  const getStatusBadgeVariant = (status) => {
    switch (status) {
      case 'rented': return 'success';
      case 'available': return 'info';
      case 'booked': return 'warning';
      default: return 'default';
    }
  };

  const filteredProperties = properties.filter(property => {
    const matchesSearch = property.buildingName.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         property.unitNumber.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesStatus = statusFilter === 'all' || property.status === statusFilter;
    return matchesSearch && matchesStatus;
  });

  const handleEdit = (property) => {
    setEditingProperty(property);
    setShowAddModal(true);
  };

  const handleCloseModal = () => {
    setShowAddModal(false);
    setEditingProperty(null);
  };

  return (
    <div className="space-y-6">
      {/* Page Header */}
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold text-neutral-900">
          {t('properties.title')}
        </h1>
        <Button onClick={() => setShowAddModal(true)}>
          <Plus className="w-4 h-4 mr-2" />
          {t('properties.addProperty')}
        </Button>
      </div>

      {/* Filters */}
      <div className="card">
        <div className="flex flex-col md:flex-row gap-4">
          <div className="flex-1">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-neutral-400 w-4 h-4" />
              <Input
                placeholder={t('common.search')}
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>
          </div>
          <div className="flex gap-2">
            <Select
              value={statusFilter}
              onChange={(e) => setStatusFilter(e.target.value)}
              className="min-w-[150px]"
            >
              <option value="all">All Status</option>
              <option value="rented">{t('properties.status.rented')}</option>
              <option value="available">{t('properties.status.available')}</option>
              <option value="booked">{t('properties.status.booked')}</option>
            </Select>
            <Button variant="outline">
              <Filter className="w-4 h-4 mr-2" />
              {t('common.filter')}
            </Button>
          </div>
        </div>
      </div>

      {/* Properties Table */}
      <div className="card">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-neutral-200">
                <th className="text-left py-3 px-4 font-medium text-neutral-700">
                  {t('properties.buildingName')}
                </th>
                <th className="text-left py-3 px-4 font-medium text-neutral-700">
                  {t('properties.unitNumber')}
                </th>
                <th className="text-left py-3 px-4 font-medium text-neutral-700">
                  {t('properties.propertyType')}
                </th>
                <th className="text-left py-3 px-4 font-medium text-neutral-700">
                  Beds/Baths
                </th>
                <th className="text-left py-3 px-4 font-medium text-neutral-700">
                  {t('properties.area')}
                </th>
                <th className="text-left py-3 px-4 font-medium text-neutral-700">
                  {t('properties.rentAmount')}
                </th>
                <th className="text-left py-3 px-4 font-medium text-neutral-700">
                  {t('common.status')}
                </th>
                <th className="text-left py-3 px-4 font-medium text-neutral-700">
                  {t('common.actions')}
                </th>
              </tr>
            </thead>
            <tbody>
              {filteredProperties.map((property) => (
                <tr key={property.id} className="border-b border-neutral-100 hover:bg-neutral-50">
                  <td className="py-3 px-4">
                    <div>
                      <p className="font-medium text-neutral-900">{property.buildingName}</p>
                      {property.tenant && (
                        <p className="text-sm text-neutral-500">{property.tenant}</p>
                      )}
                    </div>
                  </td>
                  <td className="py-3 px-4">
                    <p className="text-neutral-700">{property.unitNumber}</p>
                  </td>
                  <td className="py-3 px-4">
                    <p className="text-neutral-700">{property.propertyType}</p>
                  </td>
                  <td className="py-3 px-4">
                    <p className="text-neutral-700">
                      {property.bedrooms}/{property.bathrooms}
                    </p>
                  </td>
                  <td className="py-3 px-4">
                    <p className="text-neutral-700">{property.area} sq ft</p>
                  </td>
                  <td className="py-3 px-4">
                    <p className="font-medium text-neutral-900">
                      AED {property.rentAmount.toLocaleString()}
                    </p>
                  </td>
                  <td className="py-3 px-4">
                    <Badge variant={getStatusBadgeVariant(property.status)}>
                      {t(`properties.status.${property.status}`)}
                    </Badge>
                  </td>
                  <td className="py-3 px-4">
                    <div className="flex items-center space-x-2 rtl:space-x-reverse">
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => handleEdit(property)}
                      >
                        <Edit className="w-4 h-4" />
                      </Button>
                      <Button variant="ghost" size="sm">
                        <Eye className="w-4 h-4" />
                      </Button>
                      <Button variant="ghost" size="sm">
                        <Trash2 className="w-4 h-4" />
                      </Button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {filteredProperties.length === 0 && (
          <div className="text-center py-8">
            <p className="text-neutral-500">{t('common.noData')}</p>
          </div>
        )}
      </div>

      {/* Add/Edit Property Modal */}
      <Modal
        isOpen={showAddModal}
        onClose={handleCloseModal}
        title={editingProperty ? t('properties.editProperty') : t('properties.addProperty')}
        size="lg"
      >
        <PropertyForm
          property={editingProperty}
          onSave={() => handleCloseModal()}
          onCancel={handleCloseModal}
        />
      </Modal>
    </div>
  );
};

export { Properties };
