import { ReadonlyURLSearchParams } from 'next/navigation';

export function verifyParams<T extends Record<string, string>>(
   params: ReadonlyURLSearchParams,
   keys: (keyof T)[]
) {
   const paramKeys = [...params.keys()];

   for (let i = 0; i < keys.length; ++i) {
      const key = keys[i];

      if (!paramKeys.includes(key as string)) {
         return false;
      }
   }

   return true;
}
