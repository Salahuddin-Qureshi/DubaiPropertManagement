import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { 
  LayoutDashboard, 
  Building2, 
  Users, 
  FileText, 
  CreditCard, 
  BarChart3, 
  Settings,
  Home
} from 'lucide-react';
import { cn } from '../../utils/cn';

const Sidebar = ({ isCollapsed = false }) => {
  const { t } = useTranslation();
  const location = useLocation();

  const menuItems = [
    {
      path: '/',
      icon: LayoutDashboard,
      label: t('common.dashboard'),
    },
    {
      path: '/properties',
      icon: Building2,
      label: t('common.properties'),
    },
    {
      path: '/tenants',
      icon: Users,
      label: t('common.tenants'),
    },
    {
      path: '/contracts',
      icon: FileText,
      label: t('common.contracts'),
    },
    {
      path: '/payments',
      icon: CreditCard,
      label: t('common.payments'),
    },
    {
      path: '/reports',
      icon: BarChart3,
      label: t('common.reports'),
    },
    {
      path: '/settings',
      icon: Settings,
      label: t('common.settings'),
    },
  ];

  return (
    <div className={cn(
      "bg-white border-r border-neutral-200 h-full transition-all duration-300",
      isCollapsed ? "w-16" : "w-64"
    )}>
      {/* Logo */}
      <div className="p-4 border-b border-neutral-200">
        <div className="flex items-center space-x-3 rtl:space-x-reverse">
          <div className="w-8 h-8 bg-primary-600 rounded-lg flex items-center justify-center">
            <Home className="w-5 h-5 text-white" />
          </div>
          {!isCollapsed && (
            <h1 className="text-lg font-semibold text-neutral-900">
              Dubai Property
            </h1>
          )}
        </div>
      </div>

      {/* Navigation */}
      <nav className="p-4 space-y-2">
        {menuItems.map((item) => {
          const Icon = item.icon;
          const isActive = location.pathname === item.path;
          
          return (
            <Link
              key={item.path}
              to={item.path}
              className={cn(
                "flex items-center space-x-3 rtl:space-x-reverse px-3 py-2 rounded-lg transition-colors duration-200",
                isActive 
                  ? "bg-primary-50 text-primary-600" 
                  : "text-neutral-700 hover:bg-neutral-50 hover:text-neutral-900"
              )}
            >
              <Icon className="w-5 h-5 flex-shrink-0" />
              {!isCollapsed && (
                <span className="font-medium">{item.label}</span>
              )}
            </Link>
          );
        })}
      </nav>
    </div>
  );
};

export { Sidebar };
