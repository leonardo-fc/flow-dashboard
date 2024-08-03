import { getContext, hasContext, setContext } from "svelte";
import { contextKey } from "./contextKeys";

const prefix = "app/";

const key = {
  theme: prefix + "theme",
  nodes: prefix + "nodes",
  edges: prefix + "edges",
} as const;

type Storage = ReturnType<typeof createStorage>;
export function createStorage(localStorage: globalThis.Storage) {
  function getJSONItem(key: string) {
    const raw = localStorage.getItem(key);
    if (!raw) return;

    return JSON.parse(raw);
  }

  function setJSONItem(key: string, value: unknown) {
    localStorage.setItem(key, JSON.stringify(value));
  }

  return {
    getTheme() {
      return localStorage.getItem(key.theme);
    },
    setTheme(value: "light" | "dark" | null) {
      if (value === null) {
        localStorage.removeItem(key.theme);
      } else {
        localStorage.setItem(key.theme, value);
      }
    },

    getNodes() {
      return getJSONItem(key.nodes);
    },
    setNodes(value: unknown) {
      setJSONItem(key.nodes, value);
    },

    getEdges() {
      return getJSONItem(key.edges);
    },
    setEdges(value: unknown) {
      setJSONItem(key.edges, value);
    },
  };
}

// Context

export function setStorageContext() {
  setContext<Storage>(contextKey.storage, createStorage(localStorage));
}

export function setNoopStorageContext() {
  const noopLocalStorage: globalThis.Storage = {
    length: 0,
    getItem: () => null,
    setItem: () => undefined,
    clear: () => undefined,
    removeItem: () => undefined,
    key: () => null,
  };

  setContext<Storage>(contextKey.storage, createStorage(noopLocalStorage));
}

export function getStorageContext() {
  if (!hasContext(contextKey.storage))
    throw new Error(`Missing ${contextKey.storage} context`);

  return getContext<Storage>(contextKey.storage);
}
