import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Plus, Search, Edit, Eye, Trash2, Upload } from 'lucide-react';
import { Button } from '../components/ui/Button';
import { Input } from '../components/ui/Input';
import { Badge } from '../components/ui/Badge';
import { Modal } from '../components/ui/Modal';

const Contracts = () => {
  const { t } = useTranslation();
  const [showAddModal, setShowAddModal] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');

  // Mock data
  const contracts = [
    {
      id: 1,
      contractNumber: 'CON-2024-001',
      tenant: 'Ahmed Al Mansouri',
      property: 'Tower A - Unit 101',
      startDate: '2024-01-01',
      endDate: '2024-12-31',
      rentAmount: 85000,
      securityDeposit: 85000,
      status: 'active'
    },
    {
      id: 2,
      contractNumber: 'CON-2024-002',
      tenant: 'Sarah Johnson',
      property: 'Tower B - Unit 205',
      startDate: '2024-02-01',
      endDate: '2025-01-31',
      rentAmount: 95000,
      securityDeposit: 95000,
      status: 'active'
    },
    {
      id: 3,
      contractNumber: 'CON-2023-003',
      tenant: 'Mohammed Ali',
      property: 'Tower C - Unit 312',
      startDate: '2023-12-01',
      endDate: '2024-11-30',
      rentAmount: 45000,
      securityDeposit: 45000,
      status: 'expired'
    }
  ];

  const filteredContracts = contracts.filter(contract =>
    contract.contractNumber.toLowerCase().includes(searchTerm.toLowerCase()) ||
    contract.tenant.toLowerCase().includes(searchTerm.toLowerCase()) ||
    contract.property.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const getStatusBadgeVariant = (status) => {
    switch (status) {
      case 'active': return 'success';
      case 'expiringSoon': return 'warning';
      case 'expired': return 'destructive';
      default: return 'default';
    }
  };

  return (
    <div className="space-y-6">
      {/* Page Header */}
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold text-neutral-900">
          {t('contracts.title')}
        </h1>
        <Button onClick={() => setShowAddModal(true)}>
          <Plus className="w-4 h-4 mr-2" />
          {t('contracts.addContract')}
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

      {/* Contracts Table */}
      <div className="card">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-neutral-200">
                <th className="text-left py-3 px-4 font-medium text-neutral-700">
                  {t('contracts.contractNumber')}
                </th>
                <th className="text-left py-3 px-4 font-medium text-neutral-700">
                  {t('tenants.title')}
                </th>
                <th className="text-left py-3 px-4 font-medium text-neutral-700">
                  {t('properties.title')}
                </th>
                <th className="text-left py-3 px-4 font-medium text-neutral-700">
                  {t('contracts.endDate')}
                </th>
                <th className="text-left py-3 px-4 font-medium text-neutral-700">
                  {t('contracts.rentAmount')}
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
              {filteredContracts.map((contract) => (
                <tr key={contract.id} className="border-b border-neutral-100 hover:bg-neutral-50">
                  <td className="py-3 px-4">
                    <p className="font-medium text-neutral-900">{contract.contractNumber}</p>
                  </td>
                  <td className="py-3 px-4">
                    <p className="text-neutral-700">{contract.tenant}</p>
                  </td>
                  <td className="py-3 px-4">
                    <p className="text-neutral-700">{contract.property}</p>
                  </td>
                  <td className="py-3 px-4">
                    <p className="text-neutral-700">{contract.endDate}</p>
                  </td>
                  <td className="py-3 px-4">
                    <p className="font-medium text-neutral-900">
                      AED {contract.rentAmount.toLocaleString()}
                    </p>
                  </td>
                  <td className="py-3 px-4">
                    <Badge variant={getStatusBadgeVariant(contract.status)}>
                      {t(`contracts.status.${contract.status}`)}
                    </Badge>
                  </td>
                  <td className="py-3 px-4">
                    <div className="flex items-center space-x-2 rtl:space-x-reverse">
                      <Button variant="ghost" size="sm">
                        <Edit className="w-4 h-4" />
                      </Button>
                      <Button variant="ghost" size="sm">
                        <Eye className="w-4 h-4" />
                      </Button>
                      <Button variant="ghost" size="sm">
                        <Upload className="w-4 h-4" />
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

        {filteredContracts.length === 0 && (
          <div className="text-center py-8">
            <p className="text-neutral-500">{t('common.noData')}</p>
          </div>
        )}
      </div>

      {/* Add Contract Modal */}
      <Modal
        isOpen={showAddModal}
        onClose={() => setShowAddModal(false)}
        title={t('contracts.addContract')}
        size="lg"
      >
        <div className="space-y-4">
          <p className="text-neutral-600">
            Create a new rental contract with tenant and property details
          </p>
          <div className="flex justify-end space-x-3 rtl:space-x-reverse">
            <Button variant="outline" onClick={() => setShowAddModal(false)}>
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

export { Contracts };
