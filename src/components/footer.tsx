import Link from 'next/link';

import { Button } from '@/components/ui/button';

export const Footer = () => {
  return (
    <footer className="text-muted-foreground mt-auto">
      <div className=" w-full  text-center text-sm">
        © {new Date().getFullYear()} By{' '}
        <Button variant="link" className="p-0" asChild>
          <Link href="https://github.com/gooooooooney">Gooney</Link>
        </Button>
      </div>
    </footer>
  );
};
