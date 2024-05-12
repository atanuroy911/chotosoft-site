import createMiddleware from 'next-intl/middleware';
import {locales, pathnames, localePrefix} from './config';

 
export default createMiddleware({
  // A list of all locales that are supported
  locales: ['en', 'bn'],
 
  // Used when no locale matches
  defaultLocale: 'en'
});
 
export const config = {
  // Match only internationalized pathnames
  matcher: ['/', '/(bn|en)/:path*']
};