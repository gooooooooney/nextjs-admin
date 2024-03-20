import { redirect } from 'next/navigation';

const Page = ({ params: { locale } }: { params: { locale: string } }) => {
  redirect(`/${locale}/admin`);
};

export default Page;
