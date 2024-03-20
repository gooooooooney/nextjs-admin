'use client';
import React from 'react';
import { useMediaQuery } from 'usehooks-ts';

import { Icons } from '../icons';
import { MobileSidebar } from '../sidebar/mobile-sidebar';
import { Button } from '../ui/button';

export const HamburgerMenu = () => {
  const matches = useMediaQuery('(max-width: 1024px)');

  return matches ? (
    <MobileSidebar>
      <Button variant="ghost" size="icon">
        <Icons.hamburgerMenu className="size-4" />
      </Button>
    </MobileSidebar>
  ) : null;
};
