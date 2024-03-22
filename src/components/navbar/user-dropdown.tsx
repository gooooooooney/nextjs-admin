'use client';

import { useRouter } from 'next/navigation';

import { Avatar, AvatarFallback, AvatarImage } from '../ui/avatar';

import { Icons } from '@/components/icons';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { logout } from '@/lib/auth';
import { cn } from '@/lib/utils';
import { Profile } from '@/types/profile';
type UserDropdownProps = {
  profile: Profile;
  locale: string;
};

export const UserDropdown = ({ profile, locale }: UserDropdownProps) => {
  const router = useRouter();
  return (
    <DropdownMenu>
      <DropdownMenuTrigger>
        <Avatar className={cn('size-8')}>
          <AvatarImage src={profile.avatar} alt="logo" />
          <AvatarFallback>
            {(profile.firstName || '').slice(0, 2).toLocaleUpperCase()}
          </AvatarFallback>
        </Avatar>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuItem
          onSelect={() => {
            logout();
            router.replace(`/${locale}/login`);
          }}
        >
          <Icons.logOut className="mr-2 size-4" /> <span>Log out</span>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
