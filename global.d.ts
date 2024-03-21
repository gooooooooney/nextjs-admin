// Use type safe message keys with `next-intl`
type Messages = typeof import('./messages/en.json');
declare interface IntlMessages extends Messages {}

type PlainObject = Record<string, unknown>;
