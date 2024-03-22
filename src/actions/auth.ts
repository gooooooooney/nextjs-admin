'use server';
import { request } from '@/lib/fetch';
import { action } from '@/lib/safe-action';
import { loginSchema } from '@/schema/zod/login';

export const loginAction = action(loginSchema, async (params) => {
  try {
    const data = await request(`/api/account/signin`, {
      method: 'POST',
      body: params,
    });
    return data;
  } catch (error) {
    return {
      message: (error as PlainObject).message as string,
    };
  }
});
