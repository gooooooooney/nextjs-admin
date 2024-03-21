/* eslint-disable @typescript-eslint/no-explicit-any */
import Link from 'next/link';
import {
  NextIntlClientProvider,
  useMessages,
  useTranslations,
} from 'next-intl';
import { pick } from 'radash';

import { LoginForm } from './_components/login-form';

import { Logo } from '@/components/logo';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter } from '@/components/ui/card';

export default function LoginPage({
  params: { locale },
}: {
  params: { locale: string };
}) {
  const messages = useMessages();
  const t = useTranslations('login');
  const signup = useTranslations('signup')('label');
  return (
    <>
      <div className="flex min-h-full flex-1 flex-col justify-center  px-6 py-12 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-md">
          <Logo />
          <h2 className="mt-6  text-2xl font-bold leading-9 tracking-tight ">
            {t('label')}
          </h2>
        </div>

        <Card className="mt-10 sm:mx-auto sm:w-full sm:max-w-[480px]">
          <CardContent className="pt-6 ">
            <NextIntlClientProvider
              messages={
                // … and provide the relevant messages
                pick(messages, ['login'])
              }
            >
              <LoginForm locale={locale} />
            </NextIntlClientProvider>
          </CardContent>
          <CardFooter className="text-sm">
            {t('description')}
            <Button variant="link" asChild>
              <Link href={`/${locale}/register`}>{signup}</Link>
            </Button>
          </CardFooter>
        </Card>

        {/* <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-[480px]">
          <div className="bg-card px-6 py-12 shadow sm:rounded-lg sm:px-12">
            <form className="space-y-6" action="#" method="POST">
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium leading-6 "
                >
                  Email address
                </label>
                <div className="mt-2">
                  <input
                    id="email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    required
                    className="block w-full rounded-md border-0 py-1.5  shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="password"
                  className="block text-sm font-medium leading-6 "
                >
                  Password
                </label>
                <div className="mt-2">
                  <input
                    id="password"
                    name="password"
                    type="password"
                    autoComplete="current-password"
                    required
                    className="block w-full rounded-md border-0 py-1.5  shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>

              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <input
                    id="remember-me"
                    name="remember-me"
                    type="checkbox"
                    className="size-4 rounded border text-indigo-600 focus:ring-indigo-600"
                  />
                  <label
                    htmlFor="remember-me"
                    className="ml-3 block text-sm leading-6 "
                  >
                    Remember me
                  </label>
                </div>

                <div className="text-sm leading-6">
                  <a
                    href="#"
                    className="font-semibold text-indigo-600 hover:text-indigo-500"
                  >
                    Forgot password?
                  </a>
                </div>
              </div>

              <div>
                <button
                  type="submit"
                  className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                  Sign in
                </button>
              </div>
            </form>
          </div>

          <p className="mt-10 text-center text-sm text-gray-500">
            Not a member?{' '}
            <Link
              href="#"
              className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500"
            >
              Start a 14 day free trial
            </Link>
          </p>
        </div> */}
      </div>
    </>
  );
}
