import { readable, type Readable, type StartStopNotifier } from "svelte/store";

export interface MyReadable<T> extends Readable<T> {
  get(): T;
}

export function myReadable<T>(
  get: () => T,
  start?: StartStopNotifier<T> | undefined,
): MyReadable<T> {
  const store = readable(get(), start);

  return Object.assign(store, { get });
}
