/* eslint-disable @typescript-eslint/no-explicit-any */
declare namespace TypeUtil {
  type Primitive =
    | string
    | number
    | bigint
    | boolean
    | symbol
    | null
    | undefined;

  type Maybe<T> = T | undefined | null;

  type ValueOf<T> = T[keyof T];

  type Nullish = null | undefined;

  type Falsy = false | "" | 0 | null | undefined;

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  type FirstOfArray<T extends any[]> = T extends [infer First, ...infer _Rest]
    ? First
    : never;

  type Writable<T> = { [K in keyof T]: T[K] };

  type FixTypeLater = any;

  type Recordable<T = any> = Record<string, T>;
}
