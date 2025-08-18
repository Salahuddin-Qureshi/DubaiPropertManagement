# Dubai Property Management Dashboard

A comprehensive real estate management dashboard built with React 18, Vite, and Tailwind CSS. Features bilingual support (English/Arabic) with RTL layout, responsive design, and modern UI components.

## 🚀 Features

### Core Functionality
- **Dashboard**: Summary tiles, charts, and upcoming contract expiries
- **Properties Management**: Add, edit, and manage property listings
- **Tenants Management**: Comprehensive tenant information and contracts
- **Contracts**: Rental agreement management with document uploads
- **Payments**: Track rent payments and cheque status
- **Reports**: Generate and export reports in multiple formats
- **Settings**: User preferences, roles, and system configuration

### Technical Features
- **Bilingual Support**: English and Arabic with RTL layout
- **Responsive Design**: Mobile, tablet, and desktop optimized
- **Modern UI**: Tailwind CSS with custom brand colors
- **Form Validation**: React Hook Form with Zod schema validation
- **Data Visualization**: Recharts for charts and graphs
- **State Management**: TanStack Query for server state
- **Routing**: React Router for navigation

## 🎨 Design System

### Color Palette
- **Primary**: #00695C (Teal) - Navigation, primary buttons, highlights
- **Secondary**: #BB2025 (Maroon) - Alerts, badges, urgent indicators
- **Neutrals**: #212223 (Dark Charcoal), #F5F5F5 (Light Gray), #FFFFFF (White)

### Visual Hierarchy
- 70% neutrals for backgrounds and text
- 20% primary teal for key actions/navigation
- 10% maroon for alerts/urgent highlights

## 🛠️ Tech Stack

- **Frontend**: React 18 + Vite
- **Styling**: Tailwind CSS + shadcn/ui components
- **Routing**: React Router DOM
- **Data Management**: TanStack Table & Query
- **Charts**: Recharts
- **Forms**: React Hook Form + Zod validation
- **Internationalization**: react-i18next
- **Icons**: Lucide React
- **Date Handling**: date-fns

## 📦 Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd DubaiPropertManagement
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

4. **Open in browser**
   Navigate to `http://localhost:5173`

## 🏗️ Project Structure

```
src/
├── components/
│   ├── ui/           # Reusable UI components
│   ├── layout/       # Layout components (Sidebar, Header)
│   └── forms/        # Form components
├── pages/            # Page components
├── i18n/             # Internationalization
│   └── locales/      # Translation files
├── utils/            # Utility functions
├── hooks/            # Custom React hooks
└── context/          # React context providers
```

## 🌐 Internationalization

The application supports English and Arabic languages with automatic RTL layout switching.

### Adding New Translations

1. Add new keys to `src/i18n/locales/en.json`
2. Add corresponding translations to `src/i18n/locales/ar.json`
3. Use the `useTranslation` hook in components:

```jsx
import { useTranslation } from 'react-i18next';

const MyComponent = () => {
  const { t } = useTranslation();
  return <h1>{t('common.dashboard')}</h1>;
};
```

## 📱 Responsive Design

The dashboard is fully responsive with breakpoints:
- **Mobile**: < 768px
- **Tablet**: 768px - 1024px
- **Desktop**: > 1024px

## 🎯 Key Components

### UI Components
- `Button`: Multiple variants (primary, secondary, outline, ghost)
- `Input`: Form inputs with validation states
- `Select`: Dropdown selections
- `Badge`: Status indicators
- `Modal`: Overlay dialogs
- `Card`: Content containers

### Layout Components
- `Sidebar`: Navigation menu with collapsible design
- `Header`: Top navigation with search, notifications, and user menu
- `Layout`: Main layout wrapper

### Form Components
- `PropertyForm`: Add/edit property with validation
- Form validation using Zod schemas
- Error handling and user feedback

## 📊 Data Visualization

Charts are built using Recharts:
- **Line Chart**: Income over time
- **Bar Chart**: Occupancy trends
- **Responsive**: Automatically adapts to container size

## 🔧 Configuration

### Tailwind CSS
Custom configuration in `tailwind.config.js` with brand colors and RTL support.

### Environment Variables
Create a `.env` file for API configuration:
```env
VITE_API_BASE_URL=http://localhost:3000/api
```

## 🚀 Deployment

### Build for Production
```bash
npm run build
```

### Preview Production Build
```bash
npm run preview
```

## 📝 Development Guidelines

### Code Style
- Use functional components with hooks
- Implement proper TypeScript types (when migrating)
- Follow ESLint rules
- Use meaningful component and variable names

### Component Structure
```jsx
import React from 'react';
import { useTranslation } from 'react-i18next';
import { ComponentName } from './ComponentName';

const MyComponent = () => {
  const { t } = useTranslation();
  
  return (
    <div className="component-wrapper">
      {/* Component content */}
    </div>
  );
};

export { MyComponent };
```

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests if applicable
5. Submit a pull request

## 📄 License

This project is licensed under the MIT License.

## 🆘 Support

For support and questions:
- Create an issue in the repository
- Contact the development team
- Check the documentation

---

**Built with ❤️ for Dubai Property Management**
