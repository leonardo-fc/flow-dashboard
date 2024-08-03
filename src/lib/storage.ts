import { getContext, hasContext, setContext } from "svelte";
import { contextKey } from "./contextKeys";

const prefix = "app/";

const key = {
  theme: prefix + "theme",
  nodes: prefix + "nodes",
  edges: prefix + "edges",
} as const;

export const storage = {
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

function getJSONItem(key: string) {
  const raw = localStorage.getItem(key);
  if (!raw) return;

  return JSON.parse(raw);
}

function setJSONItem(key: string, value: unknown) {
  localStorage.setItem(key, JSON.stringify(value));
}

// Context

export function setStorageContext() {
  setContext(contextKey.storage, storage);
}

const noop = () => null;
export function setNoopStorageContext() {
  const noopStorage = new Proxy(
    {},
    {
      get() {
        return noop;
      },
    }
  );
  setContext(contextKey.storage, noopStorage);
}

export function getStorageContext() {
  if (!hasContext(contextKey.storage))
    throw new Error(`Missing ${contextKey.storage} context`);

  return getContext<typeof storage>(contextKey.storage);
}
