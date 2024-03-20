'use client';
import React from 'react';
import { useMediaQuery } from 'usehooks-ts';

import { Icons } from '../icons';
import { MenuItem } from '../sidebar';
import { MobileSidebar } from '../sidebar/mobile-sidebar';
import { Button } from '../ui/button';

export const HamburgerMenu = ({ routes }: { routes: MenuItem[] }) => {
  const matches = useMediaQuery('(max-width: 1024px)');

  return matches ? (
    <MobileSidebar routes={routes}>
      <Button variant="ghost" size="icon">
        <Icons.hamburgerMenu className="size-4" />
      </Button>
    </MobileSidebar>
  ) : null;
};
