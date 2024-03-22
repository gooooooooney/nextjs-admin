import { env } from '@/env.mjs';

export const siteConfig = {
  title: 'dineasy',
  description: 'dineasy',
  keywords: [
    'Next.js',
    'React',
    'Starter Template',
    'Tailwind CSS',
    'TypeScript',
    'Shadcn/ui',
    'Prisma',
  ],
  url: env.NEXT_PUBLIC_SITE_URL || 'https://example.com',
};

export const locales = ['en', 'zh', 'es'] as const;

export const enum URL_INFO {
  FROM = 'from',
  PATHNAME = 'x-pathname',
}

export const enum COOKIES {
  TOKEN = '0',
  JWT = 't',
}
