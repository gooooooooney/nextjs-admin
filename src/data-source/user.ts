import { request } from '@/lib/fetch';
import { Profile } from '@/types/profile';

export const getUserProfile = async (cookie: string) => {
  console.log({ cookie });
  try {
    const data = await request<Profile>(`/api/account/user`, {
      method: 'GET',
      headers: {
        Cookie: cookie,
      },
    });

    return data;
  } catch (error) {
    console.log({ error });
    return {
      message: (error as PlainObject).message as string,
      data: null,
    };
  }
};
