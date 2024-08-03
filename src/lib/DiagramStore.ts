import { writable } from "svelte/store";
import type { Node, Edge } from "@xyflow/svelte";
import { getStorageContext } from "./storage";

export function createDiagramStore() {
  const storage = getStorageContext();

  const defaultNodes: Node[] = [
    {
      id: "1",
      type: "users",
      data: {},
      position: { x: 0, y: 0 },
    },
    {
      id: "2",
      type: "api_gateway",
      data: {},
      position: { x: 150, y: 0 },
    },
    {
      id: "3",
      type: "lambda_function",
      data: {},
      position: { x: 300, y: 0 },
    },
  ];

  const defaultEdges: Edge[] = [
    {
      id: "1-2",
      type: "default",
      source: "1",
      target: "2",
    },
    {
      id: "2-3",
      type: "default",
      source: "2",
      target: "3",
    },
  ];

  const nodes = writable<Node[]>(storage.getNodes() ?? defaultNodes);
  const edges = writable<Edge[]>(storage.getEdges() ?? defaultEdges);

  nodes.subscribe(storage.setNodes);
  edges.subscribe(storage.setEdges);

  return {
    nodes,
    edges,
    reset() {
      nodes.set(defaultNodes);
      edges.set(defaultEdges);
    },
  };
}
