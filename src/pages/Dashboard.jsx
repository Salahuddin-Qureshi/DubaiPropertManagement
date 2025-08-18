import React from 'react';
import { useTranslation } from 'react-i18next';
import { 
  Building2, 
  Users, 
  CreditCard, 
  AlertTriangle,
  TrendingUp,
  Calendar
} from 'lucide-react';
import { 
  LineChart, 
  Line, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer,
  BarChart,
  Bar
} from 'recharts';
import { Badge } from '../components/ui/Badge';
import { Button } from '../components/ui/Button';

const Dashboard = () => {
  const { t } = useTranslation();

  // Mock data for charts
  const incomeData = [
    { month: 'Jan', income: 45000 },
    { month: 'Feb', income: 52000 },
    { month: 'Mar', income: 48000 },
    { month: 'Apr', income: 61000 },
    { month: 'May', income: 55000 },
    { month: 'Jun', income: 67000 },
  ];

  const occupancyData = [
    { month: 'Jan', occupancy: 85 },
    { month: 'Feb', occupancy: 88 },
    { month: 'Mar', occupancy: 92 },
    { month: 'Apr', occupancy: 89 },
    { month: 'May', occupancy: 95 },
    { month: 'Jun', occupancy: 91 },
  ];

  // Mock data for upcoming expiries
  const upcomingExpiries = [
    { id: 1, property: 'Tower A - Unit 101', tenant: 'Ahmed Al Mansouri', daysLeft: 25, status: '30' },
    { id: 2, property: 'Tower B - Unit 205', tenant: 'Sarah Johnson', daysLeft: 45, status: '60' },
    { id: 3, property: 'Tower C - Unit 312', tenant: 'Mohammed Ali', daysLeft: 78, status: '90' },
    { id: 4, property: 'Tower A - Unit 203', tenant: 'Fatima Hassan', daysLeft: 15, status: '30' },
  ];

  const summaryCards = [
    {
      title: t('dashboard.totalProperties'),
      value: '156',
      icon: Building2,
      color: 'bg-blue-500',
      change: '+12%',
      changeType: 'positive'
    },
    {
      title: t('dashboard.occupancyRate'),
      value: '91%',
      icon: Users,
      color: 'bg-green-500',
      change: '+5%',
      changeType: 'positive'
    },
    {
      title: t('dashboard.monthlyRent'),
      value: 'AED 67,000',
      icon: CreditCard,
      color: 'bg-primary-600',
      change: '+8%',
      changeType: 'positive'
    },
    {
      title: t('dashboard.overduePayments'),
      value: 'AED 12,500',
      icon: AlertTriangle,
      color: 'bg-secondary-950',
      change: '-15%',
      changeType: 'negative'
    }
  ];

  const getStatusBadgeVariant = (status) => {
    switch (status) {
      case '30': return 'warning';
      case '60': return 'info';
      case '90': return 'default';
      default: return 'default';
    }
  };

  return (
    <div className="space-y-6">
      {/* Page Header */}
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold text-neutral-900">
          {t('dashboard.title')}
        </h1>
        <div className="flex items-center space-x-2 rtl:space-x-reverse">
          <Button variant="outline">
            <Calendar className="w-4 h-4 mr-2" />
            {t('common.date')}
          </Button>
        </div>
      </div>

      {/* Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {summaryCards.map((card, index) => {
          const Icon = card.icon;
          return (
            <div key={index} className="card">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-neutral-600">
                    {card.title}
                  </p>
                  <p className="text-2xl font-bold text-neutral-900 mt-1">
                    {card.value}
                  </p>
                  <div className="flex items-center mt-2">
                    <TrendingUp className={`w-4 h-4 mr-1 ${
                      card.changeType === 'positive' ? 'text-green-500' : 'text-red-500'
                    }`} />
                    <span className={`text-sm font-medium ${
                      card.changeType === 'positive' ? 'text-green-600' : 'text-red-600'
                    }`}>
                      {card.change}
                    </span>
                  </div>
                </div>
                <div className={`p-3 rounded-lg ${card.color}`}>
                  <Icon className="w-6 h-6 text-white" />
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Charts */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Income Chart */}
        <div className="card">
          <h3 className="text-lg font-semibold text-neutral-900 mb-4">
            {t('dashboard.incomeChart')}
          </h3>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={incomeData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="month" />
              <YAxis />
              <Tooltip />
              <Line 
                type="monotone" 
                dataKey="income" 
                stroke="#00695C" 
                strokeWidth={2}
                dot={{ fill: '#00695C', strokeWidth: 2, r: 4 }}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>

        {/* Occupancy Chart */}
        <div className="card">
          <h3 className="text-lg font-semibold text-neutral-900 mb-4">
            {t('dashboard.occupancyChart')}
          </h3>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={occupancyData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="month" />
              <YAxis />
              <Tooltip />
              <Bar dataKey="occupancy" fill="#BB2025" />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Upcoming Expiries Table */}
      <div className="card">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-lg font-semibold text-neutral-900">
            {t('dashboard.upcomingExpiries')}
          </h3>
          <Button variant="outline" size="sm">
            View All
          </Button>
        </div>
        
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-neutral-200">
                <th className="text-left py-3 px-4 font-medium text-neutral-700">
                  {t('properties.title')}
                </th>
                <th className="text-left py-3 px-4 font-medium text-neutral-700">
                  {t('tenants.title')}
                </th>
                <th className="text-left py-3 px-4 font-medium text-neutral-700">
                  Days Left
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
              {upcomingExpiries.map((item) => (
                <tr key={item.id} className="border-b border-neutral-100 hover:bg-neutral-50">
                  <td className="py-3 px-4">
                    <div>
                      <p className="font-medium text-neutral-900">{item.property}</p>
                    </div>
                  </td>
                  <td className="py-3 px-4">
                    <p className="text-neutral-700">{item.tenant}</p>
                  </td>
                  <td className="py-3 px-4">
                    <p className="text-neutral-700">{item.daysLeft} days</p>
                  </td>
                  <td className="py-3 px-4">
                    <Badge variant={getStatusBadgeVariant(item.status)}>
                      {t(`dashboard.days${item.status}`)}
                    </Badge>
                  </td>
                  <td className="py-3 px-4">
                    <Button variant="ghost" size="sm">
                      {t('common.view')}
                    </Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export { Dashboard };
