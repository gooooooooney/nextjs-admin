'use client';
import React from 'react';
import { LucideProps } from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

import { Icons } from '../icons';
import { SidebarItem } from './sidebar-item';

import { cn } from '@/lib/utils';

export type MenuItem = {
  label: string;
  path?: string;
  icon?: (props: LucideProps) => React.JSX.Element;
  children?: MenuItem[];
};

type SidebarProps = {
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
        [
          'hs-overlay hs-overlay-open:translate-x-0 fixed inset-y-0 start-0 z-[60] hidden w-64 -translate-x-full overflow-y-auto border-e border-gray-200 bg-white pb-10 pt-7 transition-all duration-300 ',
          'lg:bottom-0 lg:end-auto lg:block lg:translate-x-0 dark:border-gray-700 dark:bg-gray-800 ',
          '[&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-thumb]:bg-gray-300 dark:[&::-webkit-scrollbar-thumb]:bg-slate-500 [&::-webkit-scrollbar-track]:bg-gray-100 dark:[&::-webkit-scrollbar-track]:bg-slate-700 [&::-webkit-scrollbar]:w-2',
        ],
        {
          'w-20': collapsed,
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
        <button
          type="button"
          className="mt-3.5 flex items-center gap-x-2 text-gray-600 dark:text-gray-400"
          onClick={() => setCollapsed(!collapsed)}
        >
          <span className="text-xs font-semibold">
            {collapsed ? 'Expand' : 'Collapse'}
          </span>
        </button>
      </div>
      <nav
        className="hs-accordion-group flex w-full flex-col flex-wrap p-6"
        data-hs-accordion-always-open
      >
        <ul className="space-y-1.5">
          {items.map((item) => (
            <SidebarItem
              collapsed={collapsed}
              pathname={pathname}
              key={item.label}
              item={item}
            />
          ))}
        </ul>
      </nav>
    </div>
  );
};
