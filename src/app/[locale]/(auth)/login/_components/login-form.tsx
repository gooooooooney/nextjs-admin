'use client';
import React from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { useRouter, useSearchParams } from 'next/navigation';
import { useTranslations } from 'next-intl';
import { useAction } from 'next-safe-action/hooks';
import { isExecuting } from 'next-safe-action/status';
import { toast } from 'sonner';

import { loginAction } from '@/actions/auth';
import { Button } from '@/components/ui/button';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { URL_INFO } from '@/lib/constant';
import { LoginFormValues, loginSchema } from '@/schema/zod/login';

export const LoginForm = ({ locale }: { locale: string }) => {
  const t = useTranslations('login');
  const router = useRouter();
  const searchParam = useSearchParams();
  const { execute, status } = useAction(loginAction, {
    onSuccess(data) {
      if (data?.message) {
        toast.error(data.message);
      } else {
        router.replace(searchParam.get(URL_INFO.FROM) || `/${locale}/admin`);
      }
    },
    onError(error) {
      toast.error(error.serverError);
    },
  });
  const loginForm = useForm<LoginFormValues>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: '',
      password: '',
    },
  });

  async function onSubmit(values: LoginFormValues) {
    execute(values);
  }
  return (
    <Form {...loginForm}>
      <form onSubmit={loginForm.handleSubmit(onSubmit)} className="space-y-8">
        <FormField
          control={loginForm.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>{t('fields.email.label')}</FormLabel>
              <FormControl>
                <Input placeholder={t('fields.email.placeholder')} {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={loginForm.control}
          name="password"
          render={({ field }) => (
            <FormItem>
              <FormLabel>{t('fields.password.label')}</FormLabel>
              <FormControl>
                <Input
                  type="password"
                  placeholder={t('fields.password.placeholder')}
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button
          loading={isExecuting(status)}
          disabled={isExecuting(status)}
          className="w-full"
          type="submit"
        >
          {t('label')}
        </Button>
      </form>
    </Form>
  );
};
