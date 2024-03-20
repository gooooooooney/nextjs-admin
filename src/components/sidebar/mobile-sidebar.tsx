'use client';
import { usePathname } from 'next/navigation';

import { routes } from '.';
import { SidebarMenu } from './sidebar-menu';

import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';

export function MobileSidebar({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  return (
    <Sheet>
      <SheetTrigger asChild>{children}</SheetTrigger>
      <SheetContent className="w-2/3 pl-0" side="left">
        <SidebarMenu pathname={pathname} collapsed={false} items={routes} />
      </SheetContent>
    </Sheet>
  );
}
