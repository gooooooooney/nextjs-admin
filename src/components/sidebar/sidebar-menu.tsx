import React from 'react';

import { MenuItem } from '.';
import { SidebarItem } from './sidebar-item';

type SidebarMenuProps = {
  items: MenuItem[];
  collapsed: boolean;
  pathname: string;
};

export const SidebarMenu = ({
  pathname,
  items,
  collapsed,
}: SidebarMenuProps) => {
  return (
    <nav
      className="hs-accordion-group flex w-full flex-col flex-wrap p-6 pt-4"
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
  );
};
