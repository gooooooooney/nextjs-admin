import React from 'react';
import Link from 'next/link';

import { Icons } from '../icons';
import { Button, buttonVariants } from '../ui/button';
import { Dropdown } from '../ui/dropdown';
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
      {!collapsed && (
        <Button
          variant="ghost"
          type="button"
          className={cn(
            'hs-accordion-toggle hs-accordion-active:hover:bg-transparent dark:hs-accordion-active:text-white flex w-full items-center gap-x-3.5 rounded-lg px-2.5 py-2 text-start text-sm text-slate-700 hover:bg-gray-100 dark:bg-gray-800 dark:text-slate-400 dark:hover:bg-gray-900 dark:hover:text-slate-300 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600',
            {
              'hs-accordion-active:text-blue-600': !collapsed,
            }
          )}
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
        </Button>
      )}
      {collapsed && (
        <Dropdown items={item.children}>
          <Button type="button" variant="ghost" size="icon">
            {item.icon && <item.icon />}
          </Button>
        </Dropdown>
      )}

      <div
        id="users-accordion"
        className={cn(
          'hs-accordion-content hidden w-full overflow-hidden transition-[height] duration-300',
          {
            '!hidden': collapsed,
          }
        )}
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
          buttonVariants({
            variant: 'ghost',
            size: collapsed ? 'icon' : 'default',
          }),
          'flex w-full items-center gap-x-3.5 rounded-lg px-2.5 py-2 text-start text-sm text-slate-700',
          !collapsed && '!justify-start',
          pathname === item.path ? 'bg-gray-100 dark:bg-gray-800' : ''
        )}
        href={item.path || '/'}
      >
        {item.icon && <item.icon />}
        <span
          className={cn('visible opacity-100 transition-all ', {
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
