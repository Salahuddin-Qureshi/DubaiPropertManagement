import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Search, Filter, Download } from 'lucide-react';
import { Button } from '../components/ui/Button';
import { Input } from '../components/ui/Input';
import { Select } from '../components/ui/Select';
import { Badge } from '../components/ui/Badge';

const Payments = () => {
  const { t } = useTranslation();
  const [searchTerm, setSearchTerm] = useState('');
  const [statusFilter, setStatusFilter] = useState('all');

  // Mock data
  const payments = [
    {
      id: 1,
      tenant: 'Ahmed Al Mansouri',
      property: 'Tower A - Unit 101',
      paymentDate: '2024-01-15',
      amount: 85000,
      paymentMethod: 'Cheque',
      referenceNumber: 'CHQ-001',
      chequeStatus: 'cleared',
      dueDate: '2024-01-01'
    },
    {
      id: 2,
      tenant: 'Sarah Johnson',
      property: 'Tower B - Unit 205',
      paymentDate: '2024-02-15',
      amount: 95000,
      paymentMethod: 'Bank Transfer',
      referenceNumber: 'TRF-002',
      chequeStatus: null,
      dueDate: '2024-02-01'
    },
    {
      id: 3,
      tenant: 'Mohammed Ali',
      property: 'Tower C - Unit 312',
      paymentDate: '2024-03-15',
      amount: 45000,
      paymentMethod: 'Cheque',
      referenceNumber: 'CHQ-003',
      chequeStatus: 'upcoming',
      dueDate: '2024-03-01'
    }
  ];

  const filteredPayments = payments.filter(payment => {
    const matchesSearch = payment.tenant.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         payment.property.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         payment.referenceNumber.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesStatus = statusFilter === 'all' || payment.chequeStatus === statusFilter;
    return matchesSearch && matchesStatus;
  });

  const getChequeStatusBadgeVariant = (status) => {
    switch (status) {
      case 'upcoming': return 'warning';
      case 'cleared': return 'success';
      case 'bounced': return 'destructive';
      default: return 'default';
    }
  };

  return (
    <div className="space-y-6">
      {/* Page Header */}
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold text-neutral-900">
          {t('payments.title')}
        </h1>
        <div className="flex items-center space-x-2 rtl:space-x-reverse">
          <Button variant="outline">
            <Download className="w-4 h-4 mr-2" />
            Export
          </Button>
        </div>
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
              <option value="upcoming">{t('payments.chequeStatus.upcoming')}</option>
              <option value="cleared">{t('payments.chequeStatus.cleared')}</option>
              <option value="bounced">{t('payments.chequeStatus.bounced')}</option>
            </Select>
            <Button variant="outline">
              <Filter className="w-4 h-4 mr-2" />
              {t('common.filter')}
            </Button>
          </div>
        </div>
      </div>

      {/* Payments Table */}
      <div className="card">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-neutral-200">
                <th className="text-left py-3 px-4 font-medium text-neutral-700">
                  {t('tenants.title')}
                </th>
                <th className="text-left py-3 px-4 font-medium text-neutral-700">
                  {t('properties.title')}
                </th>
                <th className="text-left py-3 px-4 font-medium text-neutral-700">
                  {t('payments.paymentDate')}
                </th>
                <th className="text-left py-3 px-4 font-medium text-neutral-700">
                  {t('common.amount')}
                </th>
                <th className="text-left py-3 px-4 font-medium text-neutral-700">
                  {t('payments.paymentMethod')}
                </th>
                <th className="text-left py-3 px-4 font-medium text-neutral-700">
                  {t('payments.referenceNumber')}
                </th>
                <th className="text-left py-3 px-4 font-medium text-neutral-700">
                  Cheque Status
                </th>
              </tr>
            </thead>
            <tbody>
              {filteredPayments.map((payment) => (
                <tr key={payment.id} className="border-b border-neutral-100 hover:bg-neutral-50">
                  <td className="py-3 px-4">
                    <p className="font-medium text-neutral-900">{payment.tenant}</p>
                  </td>
                  <td className="py-3 px-4">
                    <p className="text-neutral-700">{payment.property}</p>
                  </td>
                  <td className="py-3 px-4">
                    <p className="text-neutral-700">{payment.paymentDate}</p>
                  </td>
                  <td className="py-3 px-4">
                    <p className="font-medium text-neutral-900">
                      AED {payment.amount.toLocaleString()}
                    </p>
                  </td>
                  <td className="py-3 px-4">
                    <p className="text-neutral-700">{payment.paymentMethod}</p>
                  </td>
                  <td className="py-3 px-4">
                    <p className="text-neutral-700">{payment.referenceNumber}</p>
                  </td>
                  <td className="py-3 px-4">
                    {payment.chequeStatus ? (
                      <Badge variant={getChequeStatusBadgeVariant(payment.chequeStatus)}>
                        {t(`payments.chequeStatus.${payment.chequeStatus}`)}
                      </Badge>
                    ) : (
                      <span className="text-neutral-500">-</span>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {filteredPayments.length === 0 && (
          <div className="text-center py-8">
            <p className="text-neutral-500">{t('common.noData')}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export { Payments };
