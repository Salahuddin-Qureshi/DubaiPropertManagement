import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { User, Globe, Bell, Shield, Palette } from 'lucide-react';
import { Button } from '../components/ui/Button';
import { Select } from '../components/ui/Select';

const Settings = () => {
  const { t, i18n } = useTranslation();
  const [language, setLanguage] = useState(i18n.language);
  const [theme, setTheme] = useState('light');

  const handleLanguageChange = (newLanguage) => {
    setLanguage(newLanguage);
    i18n.changeLanguage(newLanguage);
  };

  const settingsSections = [
    {
      title: t('settings.profile'),
      icon: User,
      description: 'Manage your account settings and profile information',
      items: [
        { label: 'Full Name', value: 'Admin User', type: 'text' },
        { label: 'Email', value: 'admin@dubaiproperty.com', type: 'email' },
        { label: 'Phone', value: '+971 50 123 4567', type: 'tel' },
      ]
    },
    {
      title: t('settings.language'),
      icon: Globe,
      description: 'Choose your preferred language and regional settings',
      items: [
        {
          label: 'Language',
          type: 'select',
          value: language,
          options: [
            { value: 'en', label: 'English' },
            { value: 'ar', label: 'العربية' }
          ],
          onChange: handleLanguageChange
        }
      ]
    },
    {
      title: t('settings.notifications'),
      icon: Bell,
      description: 'Configure notification preferences',
      items: [
        { label: 'Email Notifications', value: 'Enabled', type: 'toggle' },
        { label: 'SMS Notifications', value: 'Disabled', type: 'toggle' },
        {
          label: 'Contract Expiry Alerts',
          type: 'select',
          value: '30 days',
          options: [
            { value: '7 days', label: '7 days' },
            { value: '15 days', label: '15 days' },
            { value: '30 days', label: '30 days' },
            { value: '60 days', label: '60 days' },
            { value: '90 days', label: '90 days' }
          ],
          onChange: (value) => console.log('Contract expiry alerts set to:', value)
        },
      ]
    },
    {
      title: t('settings.roles'),
      icon: Shield,
      description: 'Manage user roles and permissions',
      items: [
        { label: 'Current Role', value: 'Administrator', type: 'text' },
        { label: 'Permissions', value: 'Full Access', type: 'text' },
      ]
    },
    {
      title: t('settings.theme'),
      icon: Palette,
      description: 'Customize the appearance of the application',
      items: [
        {
          label: 'Theme',
          type: 'select',
          value: theme,
          options: [
            { value: 'light', label: 'Light' },
            { value: 'dark', label: 'Dark' },
            { value: 'auto', label: 'Auto' }
          ],
          onChange: setTheme
        }
      ]
    }
  ];

  return (
    <div className="space-y-6">
      {/* Page Header */}
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold text-neutral-900">
          {t('settings.title')}
        </h1>
        <Button>
          Save Changes
        </Button>
      </div>

      {/* Settings Sections */}
      <div className="space-y-6">
        {settingsSections.map((section, index) => {
          const Icon = section.icon;
          return (
            <div key={index} className="card">
              <div className="flex items-start space-x-4 rtl:space-x-reverse">
                <div className="p-3 bg-primary-100 rounded-lg">
                  <Icon className="w-6 h-6 text-primary-600" />
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-neutral-900 mb-2">
                    {section.title}
                  </h3>
                  <p className="text-neutral-600 mb-4">
                    {section.description}
                  </p>
                  
                  <div className="space-y-4">
                    {section.items.map((item, itemIndex) => (
                      <div key={itemIndex} className="flex items-center justify-between py-2">
                        <label className="text-sm font-medium text-neutral-700">
                          {item.label}
                        </label>
                        <div className="flex items-center space-x-2 rtl:space-x-reverse">
                          {item.type === 'select' ? (
                            <Select
                              value={item.value}
                              onChange={(e) => item.onChange && item.onChange(e.target.value)}
                              className="w-48"
                            >
                              {item.options && item.options.map((option) => (
                                <option key={option.value} value={option.value}>
                                  {option.label}
                                </option>
                              ))}
                            </Select>
                          ) : item.type === 'toggle' ? (
                            <div className="flex items-center">
                              <span className={`text-sm ${
                                item.value === 'Enabled' ? 'text-green-600' : 'text-neutral-500'
                              }`}>
                                {item.value}
                              </span>
                              <Button variant="ghost" size="sm" className="ml-2">
                                Change
                              </Button>
                            </div>
                          ) : (
                            <span className="text-sm text-neutral-600">
                              {item.value}
                            </span>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* System Information */}
      <div className="card">
        <h3 className="text-lg font-semibold text-neutral-900 mb-4">
          System Information
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <p className="text-sm text-neutral-600">Version</p>
            <p className="font-medium text-neutral-900">1.0.0</p>
          </div>
          <div>
            <p className="text-sm text-neutral-600">Last Updated</p>
            <p className="font-medium text-neutral-900">2024-01-15</p>
          </div>
          <div>
            <p className="text-sm text-neutral-600">Database</p>
            <p className="font-medium text-neutral-900">PostgreSQL 14</p>
          </div>
          <div>
            <p className="text-sm text-neutral-600">Environment</p>
            <p className="font-medium text-neutral-900">Production</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export { Settings };
