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
  googleSiteVerificationId: env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION_ID || '',
};

export const locales = ['en', 'zh', 'es'] as const;
