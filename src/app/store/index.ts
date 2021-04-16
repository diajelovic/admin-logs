import { IConfig } from 'overmind';
import { createHook } from 'overmind-react';
import { namespaced } from 'overmind/config';
import { auth } from './auth';

export const config = namespaced({
  auth,
});

declare module 'store/index' {
  interface Config extends IConfig<typeof config> {}
}

export const useOvermind = createHook<typeof config>();
