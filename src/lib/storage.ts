const prefix = "app/";

const key = {
  nodes: prefix + "nodes",
  edges: prefix + "edges",
} as const;

export const storage = {
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
