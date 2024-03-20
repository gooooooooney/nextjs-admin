import Link from 'next/link';

import { MenuItem } from '../sidebar';
import { HamburgerMenu } from './hamburger-menu';

// import { SignInButton } from '@/components/navbar/sign-in-button';
import { ThemeToggle } from '@/components/navbar/theme-toggle';
// import { UserDropdown } from '@/components/navbar/user-dropdown';

export const Navbar = ({ routes }: { routes: MenuItem[] }) => {
  return (
    <header className=" border-b">
      <div className=" flex h-16 items-center justify-between px-4">
        <HamburgerMenu routes={routes} />
        <Link href="/" className="font-mono text-lg font-bold">
          breadcrumb
        </Link>
        <div className="flex items-center gap-2">
          <ThemeToggle />
          {/* {session ? <UserDropdown session={session} /> : <SignInButton />} */}
        </div>
      </div>
    </header>
  );
};
