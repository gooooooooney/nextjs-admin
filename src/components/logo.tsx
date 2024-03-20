import React from 'react';

import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

export const Logo = () => {
  return (
    <Avatar className="size-8">
      <AvatarImage src="/logo.webp" alt="logo" />
      <AvatarFallback>lg</AvatarFallback>
    </Avatar>
  );
};
