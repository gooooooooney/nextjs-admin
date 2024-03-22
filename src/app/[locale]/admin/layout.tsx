/* eslint-disable @typescript-eslint/no-unused-vars */
import React from 'react';
import { cookies, headers } from 'next/headers';
import { redirect } from 'next/navigation';
import { useTranslations } from 'next-intl';
import { getTranslations } from 'next-intl/server';
import QueryString from 'qs';

import { Footer } from '@/components/footer';
import { Icons } from '@/components/icons';
import { Navbar } from '@/components/navbar/navbar';
import { MenuItem, Sidebar } from '@/components/sidebar';
import { getUserProfile } from '@/data-source/user';
import { COOKIES, URL_INFO } from '@/lib/constant';
import { request } from '@/lib/fetch';

type AdminLayoutProps = React.PropsWithChildren<{
  params: {
    locale: string;
  };
}>;

const AdminLayout = async ({
  children,
  params: { locale },
}: AdminLayoutProps) => {
  const t = await getTranslations('Dashboard');
  const cookieStore = cookies();
  const headersList = headers();
  const token = cookieStore.get(COOKIES.TOKEN);
  const from = headersList.get(URL_INFO.PATHNAME);
  if (token === undefined) {
    return redirect(`/${locale}/login?${URL_INFO.FROM}=${from}`);
  }
  const profile = await getUserProfile(
    cookieStore
      .getAll()
      .map(
        (cookie) =>
          `${encodeURIComponent(cookie.name)}=${encodeURIComponent(cookie.value)}`
      )
      .join('; ')
  );
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
    <div className="flex min-h-screen">
      <Sidebar routes={routes} />
      <main className="flex grow flex-col">
        <Navbar locale={locale} profile={profile.data} routes={routes} />
        {children}
        <Footer />
      </main>
    </div>
  );
};

export default AdminLayout;
