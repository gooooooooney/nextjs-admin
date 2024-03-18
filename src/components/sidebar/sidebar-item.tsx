import React from 'react';
import Link from 'next/link';

import { Icons } from '../icons';
import { MenuItem } from '.';

import { cn } from '@/lib/utils';

export const SidebarItem = ({
  item,
  pathname,
  collapsed,
}: {
  pathname: string;
  collapsed: boolean;
  item: MenuItem;
}) => {
  return item.children ? (
    <li className="hs-accordion" id="users-accordion">
      <button
        type="button"
        className="hs-accordion-toggle hs-accordion-active:text-blue-600 hs-accordion-active:hover:bg-transparent dark:hs-accordion-active:text-white flex w-full items-center gap-x-3.5 rounded-lg px-2.5 py-2 text-start text-sm text-slate-700 hover:bg-gray-100 dark:bg-gray-800 dark:text-slate-400 dark:hover:bg-gray-900 dark:hover:text-slate-300 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
      >
        {item.icon && <item.icon />}
        <span
          className={cn('opacity-100 transition-all ', {
            hidden: collapsed,
            'opacity-0': collapsed,
          })}
        >
          {item.label}
        </span>

        {!collapsed && (
          <Icons.chevronUp className="hs-accordion-active:-rotate-180 ms-auto size-4 text-gray-600 transition-all group-hover:text-gray-500 dark:text-gray-400 " />
        )}
      </button>

      <div
        id="users-accordion"
        className="hs-accordion-content hidden w-full overflow-hidden transition-[height] duration-300"
      >
        <ul
          className="hs-accordion-group ps-3 pt-2"
          data-hs-accordion-always-open
        >
          {item.children.map((child) => (
            <SidebarItem
              collapsed={collapsed}
              pathname={pathname}
              key={child.label}
              item={child}
            />
          ))}
        </ul>
      </div>
    </li>
  ) : (
    <li>
      <Link
        className={cn(
          'flex items-center gap-x-3.5 rounded-lg px-2.5 py-2 text-sm text-slate-700 hover:bg-gray-100 dark:text-slate-400 dark:hover:bg-gray-900 dark:hover:text-slate-300 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600',
          pathname === item.path ? 'bg-gray-100 dark:bg-gray-800' : ''
        )}
        href={item.path || '/'}
      >
        {item.icon && <item.icon />}
        <span
          className={cn('opacity-100 transition-all ', {
            hidden: collapsed,
            'opacity-0': collapsed,
          })}
        >
          {item.label}
        </span>
      </Link>
    </li>
  );
};
