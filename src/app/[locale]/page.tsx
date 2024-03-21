import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';

import { COOKIES } from '@/lib/constant';

const Page = ({ params: { locale } }: { params: { locale: string } }) => {
  const cookieStore = cookies();
  const token = cookieStore.get(COOKIES.TOKEN);
  if (!token) {
    return redirect(`/${locale}/login`);
  }
  redirect(`/${locale}/admin`);
};

export default Page;
