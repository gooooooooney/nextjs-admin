import React from 'react';

import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { cn } from '@/lib/utils';

export const Logo = ({
  className,
  fallback,
}: {
  className?: string;
  fallback?: string;
}) => {
  return (
    <Avatar className={cn('size-8', className)}>
      <AvatarImage src="/logo.webp" alt="logo" />
      <AvatarFallback>{fallback}</AvatarFallback>
    </Avatar>
  );
};
