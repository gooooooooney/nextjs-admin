import { NextRequest } from 'next/server';
import createMiddleware from 'next-intl/middleware';

import { locales } from './lib/constant';

const intlMiddleware = createMiddleware({
  // A list of all locales that are supported
  locales,
  // Used when no locale matches
  defaultLocale: 'zh',
});

export default function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  const shouldHandle =
    pathname === '/' ||
    new RegExp(`^/(${locales.join('|')})(/.*)?$`).test(
      request.nextUrl.pathname
    );
  if (!shouldHandle) return;

  return intlMiddleware(request);
}
