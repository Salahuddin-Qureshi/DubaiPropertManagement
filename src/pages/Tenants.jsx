import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Plus, Search, Edit, Eye, Trash2 } from 'lucide-react';
import { Button } from '../components/ui/Button';
import { Input } from '../components/ui/Input';
import { Badge } from '../components/ui/Badge';
import { Modal } from '../components/ui/Modal';

const Tenants = () => {
  const { t } = useTranslation();
  const [showAddModal, setShowAddModal] = useState(false);
  const [editingTenant, setEditingTenant] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');

  // Mock data
  const tenants = [
    {
      id: 1,
      fullName: 'Ahmed Al Mansouri',
      email: 'ahmed@email.com',
      phone: '+971 50 123 4567',
      passportNumber: 'A12345678',
      emiratesId: '784-1985-1234567-8',
      contractStart: '2024-01-01',
      contractEnd: '2024-12-31',
      rentAmount: 85000,
      securityDeposit: 85000,
      status: 'active'
    },
    {
      id: 2,
      fullName: 'Sarah Johnson',
      email: 'sarah@email.com',
      phone: '+971 55 987 6543',
      passportNumber: 'B87654321',
      emiratesId: '784-1990-8765432-1',
      contractStart: '2024-02-01',
      contractEnd: '2025-01-31',
      rentAmount: 95000,
      securityDeposit: 95000,
      status: 'active'
    },
    {
      id: 3,
      fullName: 'Mohammed Ali',
      email: 'mohammed@email.com',
      phone: '+971 52 456 7890',
      passportNumber: 'C11223344',
      emiratesId: '784-1988-1122334-4',
      contractStart: '2023-12-01',
      contractEnd: '2024-11-30',
      rentAmount: 45000,
      securityDeposit: 45000,
      status: 'expired'
    }
  ];

  const filteredTenants = tenants.filter(tenant =>
    tenant.fullName.toLowerCase().includes(searchTerm.toLowerCase()) ||
    tenant.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
    tenant.phone.includes(searchTerm)
  );

  const getStatusBadgeVariant = (status) => {
    switch (status) {
      case 'active': return 'success';
      case 'expired': return 'destructive';
      default: return 'default';
    }
  };

  const handleEdit = (tenant) => {
    setEditingTenant(tenant);
    setShowAddModal(true);
  };

  const handleCloseModal = () => {
    setShowAddModal(false);
    setEditingTenant(null);
  };

  return (
    <div className="space-y-6">
      {/* Page Header */}
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold text-neutral-900">
          {t('tenants.title')}
        </h1>
        <Button onClick={() => setShowAddModal(true)}>
          <Plus className="w-4 h-4 mr-2" />
          {t('tenants.addTenant')}
        </Button>
      </div>

      {/* Search */}
      <div className="card">
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

      {/* Tenants Table */}
      <div className="card">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-neutral-200">
                <th className="text-left py-3 px-4 font-medium text-neutral-700">
                  {t('tenants.fullName')}
                </th>
                <th className="text-left py-3 px-4 font-medium text-neutral-700">
                  {t('common.email')}
                </th>
                <th className="text-left py-3 px-4 font-medium text-neutral-700">
                  {t('common.phone')}
                </th>
                <th className="text-left py-3 px-4 font-medium text-neutral-700">
                  {t('tenants.contractEnd')}
                </th>
                <th className="text-left py-3 px-4 font-medium text-neutral-700">
                  {t('tenants.rentAmount')}
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
              {filteredTenants.map((tenant) => (
                <tr key={tenant.id} className="border-b border-neutral-100 hover:bg-neutral-50">
                  <td className="py-3 px-4">
                    <div>
                      <p className="font-medium text-neutral-900">{tenant.fullName}</p>
                      <p className="text-sm text-neutral-500">ID: {tenant.emiratesId}</p>
                    </div>
                  </td>
                  <td className="py-3 px-4">
                    <p className="text-neutral-700">{tenant.email}</p>
                  </td>
                  <td className="py-3 px-4">
                    <p className="text-neutral-700">{tenant.phone}</p>
                  </td>
                  <td className="py-3 px-4">
                    <p className="text-neutral-700">{tenant.contractEnd}</p>
                  </td>
                  <td className="py-3 px-4">
                    <p className="font-medium text-neutral-900">
                      AED {tenant.rentAmount.toLocaleString()}
                    </p>
                  </td>
                  <td className="py-3 px-4">
                    <Badge variant={getStatusBadgeVariant(tenant.status)}>
                      {tenant.status === 'active' ? 'Active' : 'Expired'}
                    </Badge>
                  </td>
                  <td className="py-3 px-4">
                    <div className="flex items-center space-x-2 rtl:space-x-reverse">
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => handleEdit(tenant)}
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

        {filteredTenants.length === 0 && (
          <div className="text-center py-8">
            <p className="text-neutral-500">{t('common.noData')}</p>
          </div>
        )}
      </div>

      {/* Add/Edit Tenant Modal */}
      <Modal
        isOpen={showAddModal}
        onClose={handleCloseModal}
        title={editingTenant ? t('tenants.editTenant') : t('tenants.addTenant')}
        size="lg"
      >
        <div className="space-y-4">
          <p className="text-neutral-600">
            {editingTenant ? 'Edit tenant information' : 'Add new tenant to the system'}
          </p>
          <div className="flex justify-end space-x-3 rtl:space-x-reverse">
            <Button variant="outline" onClick={handleCloseModal}>
              {t('common.cancel')}
            </Button>
            <Button>
              {t('common.save')}
            </Button>
          </div>
        </div>
      </Modal>
    </div>
  );
};

export { Tenants };
