import { readable } from "svelte/store";
import { getContext, hasContext, setContext } from "svelte";
import { contextKey } from "./contextKeys";
import type { MyReadable } from "./myReadable";
import { darkTheme } from "./isDarkTheme";

type DarkReadable = MyReadable<boolean>;

export function setSystemDarkThemeContext() {
  const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");

  const get = () => mediaQuery.matches;

  const mediaQueryDark = readable(mediaQuery.matches, (set) => {
    function listener({ matches }: MediaQueryListEvent) {
      set(matches);
    }

    mediaQuery.addEventListener("change", listener);
    return () => mediaQuery.removeEventListener("change", listener);
  });

  setContext<DarkReadable>(
    contextKey.systemDarkTheme,
    Object.assign(mediaQueryDark, { get })
  );
}

export function setStoryDarkThemeContext() {
  setContext<DarkReadable>(contextKey.systemDarkTheme, darkTheme);
}

export function getSystemThemeContext() {
  if (!hasContext(contextKey.systemDarkTheme))
    throw new Error(`Missing ${contextKey.systemDarkTheme} context`);

  return getContext<DarkReadable>(contextKey.systemDarkTheme);
}
