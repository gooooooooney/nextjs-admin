import React from 'react';

import { Logo } from '@/components/logo';
import { Separator } from '@/components/ui/separator';

export const SidebarHeader = ({ collapsed }: { collapsed: boolean }) => {
  return (
    <>
      <div className="flex items-center">
        <Logo />
        {!collapsed && <h1 className="ml-2">Dineasy</h1>}
      </div>
      <Separator className="mt-4" />
    </>
  );
};
