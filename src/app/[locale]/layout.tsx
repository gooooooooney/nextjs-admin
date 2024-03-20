import '@/styles/globals.css';

import { PropsWithChildren } from 'react';
import type { Metadata } from 'next';
import { useTranslations } from 'next-intl';

import { Footer } from '@/components/footer';
import { Icons } from '@/components/icons';
import { Navbar } from '@/components/navbar/navbar';
import { MenuItem, Sidebar } from '@/components/sidebar';
import { ThemeProvider } from '@/components/theme-provider';
import { Toaster } from '@/components/ui/toaster';
import { siteConfig } from '@/lib/constant';
import { fonts } from '@/lib/fonts';
import { cn } from '@/lib/utils';

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: siteConfig.title,
    template: `%s | ${siteConfig.title}`,
  },
  description: siteConfig.description,
  keywords: siteConfig.keywords,
  robots: { index: true, follow: true },
  icons: {
    icon: '/favicon/favicon.ico',
    shortcut: '/favicon/favicon-16x16.png',
    apple: '/favicon/apple-touch-icon.png',
  },
  verification: {
    google: siteConfig.googleSiteVerificationId,
  },
  openGraph: {
    url: siteConfig.url,
    title: siteConfig.title,
    description: siteConfig.description,
    siteName: siteConfig.title,
    images: '/opengraph-image.png',
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: siteConfig.title,
    description: siteConfig.description,
    images: '/opengraph-image.png',
  },
};

const RootLayout = ({
  children,
  params: { locale },
}: PropsWithChildren<{ params: { locale: string } }>) => {
  const t = useTranslations('Dashboard');

  const routes: MenuItem[] = [
    {
      path: '/',
      label: t('menus.home'),
      icon: Icons.home,
    },
    {
      path: '/menu',
      label: t('menus.menu'),
      icon: Icons.bookOpenText,
      children: [
        {
          path: '/menu/items',
          label: t('terminologies.items'),
        },
        {
          path: '/menu/combos',
          label: t('terminologies.combos'),
        },
        {
          path: '/menu/categories',
          label: t('terminologies.categories'),
        },
      ],
    },
    {
      path: '/orders',
      label: t('menus.orders'),
      icon: Icons.clipboardList,
      children: [
        {
          path: '/orders/management',
          label: t('menus.orderManagement'),
        },
      ],
    },
    {
      path: '/dining-tables/management',
      label: t('terminologies.diningTables'),
      icon: Icons.lamp,
    },
    {
      path: '/reservations',
      label: t('menus.reservations'),
      icon: Icons.phoneCall,
      children: [
        {
          path: '/reservations/management',
          label: t('menus.reservationHistory'),
        },
      ],
    },
    {
      path: '/reporting',
      label: t('menus.reporting'),
      icon: Icons.barChartBig,
    },
    {
      path: '/misc',
      label: t('menus.misc'),
      icon: Icons.libraryBig,
      children: [
        {
          path: '/customers',
          label: t('terminologies.customers'),
        },
      ],
    },
  ];
  return (
    <html lang={locale} suppressHydrationWarning>
      <body className={cn('min-h-screen font-sans', fonts)}>
        <ThemeProvider attribute="class">
          <div className="flex min-h-screen">
            <Sidebar routes={routes} />
            <main className="flex grow flex-col">
              <Navbar routes={routes} />
              {children}
              <Footer />
            </main>
          </div>

          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
};

export default RootLayout;
