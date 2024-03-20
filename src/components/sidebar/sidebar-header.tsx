import React from 'react';

import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Separator } from '@/components/ui/separator';

export const SidebarHeader = ({ collapsed }: { collapsed: boolean }) => {
  return (
    <>
      <div className="flex items-center">
        <Avatar className="size-8">
          <AvatarImage src="/logo.webp" alt="logo" />
          <AvatarFallback>lg</AvatarFallback>
        </Avatar>
        {!collapsed && <h1 className="ml-2">Dineasy</h1>}
      </div>
      <Separator className="mt-4" />
    </>
  );
};
