import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Download, FileText, FileSpreadsheet, File } from 'lucide-react';
import { Button } from '../components/ui/Button';
import { Select } from '../components/ui/Select';
import { Input } from '../components/ui/Input';
import { Badge } from '../components/ui/Badge';

const Reports = () => {
  const { t } = useTranslation();
  const [reportType, setReportType] = useState('income');
  const [dateRange, setDateRange] = useState('month');

  const reportTypes = [
    { value: 'income', label: t('reports.income') },
    { value: 'expense', label: t('reports.expense') },
    { value: 'vat', label: t('reports.vat') },
  ];

  const dateRanges = [
    { value: 'week', label: 'This Week' },
    { value: 'month', label: 'This Month' },
    { value: 'quarter', label: 'This Quarter' },
    { value: 'year', label: 'This Year' },
    { value: 'custom', label: 'Custom Range' },
  ];

  const exportFormats = [
    { value: 'pdf', label: t('reports.exportPdf'), icon: FileText },
    { value: 'excel', label: t('reports.exportExcel'), icon: FileSpreadsheet },
    { value: 'word', label: t('reports.exportWord'), icon: File },
  ];

  const handleExport = (format) => {
    console.log(`Exporting ${reportType} report as ${format}`);
    // Simulate export
    alert(`Exporting ${reportType} report as ${format.toUpperCase()}`);
  };

  return (
    <div className="space-y-6">
      {/* Page Header */}
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold text-neutral-900">
          {t('reports.title')}
        </h1>
      </div>

      {/* Filters */}
      <div className="card">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {/* Report Type */}
          <div>
            <label className="block text-sm font-medium text-neutral-700 mb-2">
              {t('reports.reportType')}
            </label>
            <Select
              value={reportType}
              onChange={(e) => setReportType(e.target.value)}
            >
              {reportTypes.map((type) => (
                <option key={type.value} value={type.value}>
                  {type.label}
                </option>
              ))}
            </Select>
          </div>

          {/* Date Range */}
          <div>
            <label className="block text-sm font-medium text-neutral-700 mb-2">
              {t('reports.dateRange')}
            </label>
            <Select
              value={dateRange}
              onChange={(e) => setDateRange(e.target.value)}
            >
              {dateRanges.map((range) => (
                <option key={range.value} value={range.value}>
                  {range.label}
                </option>
              ))}
            </Select>
          </div>

          {/* Custom Date Range */}
          {dateRange === 'custom' && (
            <div>
              <label className="block text-sm font-medium text-neutral-700 mb-2">
                Custom Range
              </label>
              <div className="flex space-x-2 rtl:space-x-reverse">
                <Input type="date" className="flex-1" />
                <Input type="date" className="flex-1" />
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Export Options */}
      <div className="card">
        <h3 className="text-lg font-semibold text-neutral-900 mb-4">
          {t('reports.export')}
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {exportFormats.map((format) => {
            const Icon = format.icon;
            return (
              <Button
                key={format.value}
                variant="outline"
                onClick={() => handleExport(format.value)}
                className="flex items-center justify-center space-x-2 rtl:space-x-reverse h-20"
              >
                <Icon className="w-6 h-6" />
                <span>{format.label}</span>
              </Button>
            );
          })}
        </div>
      </div>

      {/* Report Preview */}
      <div className="card">
        <h3 className="text-lg font-semibold text-neutral-900 mb-4">
          Report Preview
        </h3>
        <div className="bg-neutral-50 rounded-lg p-8 text-center">
          <Download className="w-12 h-12 text-neutral-400 mx-auto mb-4" />
          <p className="text-neutral-600">
            Select report type and date range to generate a preview
          </p>
          <p className="text-sm text-neutral-500 mt-2">
            {reportType} report for {dateRange}
          </p>
        </div>
      </div>

      {/* Recent Reports */}
      <div className="card">
        <h3 className="text-lg font-semibold text-neutral-900 mb-4">
          Recent Reports
        </h3>
        <div className="space-y-3">
          {[
            { name: 'Income Report - January 2024', date: '2024-01-31', type: 'PDF' },
            { name: 'Expense Report - December 2023', date: '2023-12-31', type: 'Excel' },
            { name: 'VAT Report - Q4 2023', date: '2023-12-31', type: 'Word' },
          ].map((report, index) => (
            <div key={index} className="flex items-center justify-between p-3 border border-neutral-200 rounded-lg">
              <div>
                <p className="font-medium text-neutral-900">{report.name}</p>
                <p className="text-sm text-neutral-500">Generated on {report.date}</p>
              </div>
              <div className="flex items-center space-x-2 rtl:space-x-reverse">
                <Badge variant="outline">{report.type}</Badge>
                <Button variant="ghost" size="sm">
                  <Download className="w-4 h-4" />
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export { Reports };
