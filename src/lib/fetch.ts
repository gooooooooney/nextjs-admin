import { compile } from 'path-to-regexp';
import qs from 'qs';

import { isPlainObject } from './typeGuard';

import { env } from '@/env.mjs';

type RequestOptions = Omit<RequestInit, 'body'> & {
  body?: RequestInit['body'] | PlainObject;
  isPath?: boolean;
};

export const request = <T>(
  url: string,
  { body, isPath, ...options }: RequestOptions
) => {
  const defaultOptions: RequestInit = {
    credentials: 'include',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
  };

  const newOptions = { ...defaultOptions, ...options };

  let u = url;
  switch (newOptions.method?.toUpperCase()) {
    case 'GET':
      if (isPath) {
        u = compile(url, { encode: encodeURIComponent })(body as PlainObject);
        const p = qs.stringify(body);
        if (p) {
          u += `?${p}`;
        }
      } else {
        const query = qs.stringify(body);
        u = `${url}${query ? `?${query}` : ''}`;
      }
      break;
    default:
      if (isPlainObject(body)) {
        newOptions.body = JSON.stringify(body);
      } else {
        newOptions.body = body;
      }
  }
  return fetch(env.NEXT_PUBLIC_SITE_URL + u, newOptions).then(async (res) => {
    if (!res.ok) {
      if (res.status === 401) {
        return {
          code: res.status,
          data: null,
          message: `${res.status} ${res.statusText}`,
        };
      }
      throw new Error(`${res.status} ${res.statusText}`);
    }
    let data: T;
    try {
      data = (await res.json()) as T;
    } catch (error) {
      data = {} as T;
    }
    console.log(data, 'data');
    return {
      code: res.status,
      data,
      message: null,
    };
  });
};
