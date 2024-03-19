'use client';
import React from 'react';
import { LucideProps } from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

import { Icons } from '../icons';
import { Button } from '../ui/button';
import { SidebarMenu } from './sidebar-menu';

import { cn } from '@/lib/utils';

export type MenuItem = {
  label: string;
  path?: string;
  icon?: (props: LucideProps) => React.JSX.Element;
  children?: MenuItem[];
};

export type SidebarProps = {
  items: MenuItem[];
};

export const routes: MenuItem[] = [
  {
    path: '/',
    label: 'Dashboard',
    icon: Icons.home,
  },
  {
    path: '/menu',
    label: 'menu',
    icon: Icons.bookOpenText,
    children: [
      {
        path: '/menu/items',
        label: 'items',
      },
      {
        path: '/menu/combos',
        label: 'combos',
      },
      {
        path: '/menu/categories',
        label: 'categories',
      },
    ],
  },
  {
    path: '/orders',
    label: 'orders',
    icon: Icons.clipboardList,
    children: [
      {
        path: '/orders/management',
        label: 'orderManagement',
      },
    ],
  },
  {
    path: '/dining-tables/management',
    label: 'diningTables',
    icon: Icons.lamp,
  },
  {
    path: '/reservations',
    label: 'reservations',
    icon: Icons.phoneCall,
    children: [
      {
        path: '/reservations/management',
        label: 'reservationHistory',
        children: [
          {
            path: '/reservations/management/active',
            label: 'activeReservations',
            icon: Icons.barChartBig,
          },
          {
            path: '/reservations/management/past',
            label: 'pastReservations',
          },
        ],
      },
    ],
  },
  {
    path: '/reporting',
    label: 'reporting',
    icon: Icons.barChartBig,
  },
  {
    path: '/misc',
    label: 'misc',
    icon: Icons.libraryBig,
    children: [
      {
        path: '/customers',
        label: 'customers',
      },
    ],
  },
];

export const Sidebar = ({ items }: SidebarProps) => {
  const pathname = usePathname();
  const [collapsed, setCollapsed] = React.useState(false);
  return (
    <div
      id="docs-sidebar"
      className={cn(
        'hidden border-e  border-gray-200 bg-white  pb-10 pt-7 transition-all lg:fixed lg:inset-y-0 lg:z-50 lg:flex lg:w-72 lg:flex-col dark:border-gray-700 dark:bg-gray-800',

        {
          'lg:w-20': collapsed,
        }
      )}
    >
      <div className="px-6">
        <Link
          className="flex-none text-xl font-semibold dark:text-white"
          href="#"
          aria-label="Brand"
        >
          Brand
        </Link>
      </div>
      <SidebarMenu {...{ pathname, items, collapsed, setCollapsed }} />
      <Button
        variant="ghost"
        size="icon"
        onClick={() => setCollapsed(!collapsed)}
        className="bg-background absolute -right-3 top-5 z-[61] size-6 rounded-full shadow-lg"
      >
        <Icons.chevronLeft
          className={cn('size-4 transition-transform', {
            'rotate-180': collapsed,
          })}
        />
      </Button>
    </div>
  );
};
