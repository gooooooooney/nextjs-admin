import { deleteCookie } from 'cookies-next';

import { COOKIES } from './constant';

// client-side only
export const logout = () => {
  deleteCookie(COOKIES.TOKEN);
};
