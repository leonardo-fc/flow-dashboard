import { writable } from "svelte/store";
import type { Node, Edge } from "@xyflow/svelte";
import UsersIcon from "@/assets/users.svg";
import AWSApiGatewayIcon from "@/assets/AWS/Arch_Amazon-API-Gateway_64.svg";
import AWSLambdaIcon from "@/assets/AWS/Arch_AWS-Lambda_64.svg";
import { storage } from "./storage";

const defaultNodes: Node[] = [
  {
    id: "1",
    type: "icon",
    data: { label: "Internet Users", icon: UsersIcon },
    position: { x: 0, y: 0 },
  },
  {
    id: "2",
    type: "icon",
    data: { label: "API Gateway", icon: AWSApiGatewayIcon },
    position: { x: 150, y: 0 },
  },
  {
    id: "3",
    type: "icon",
    data: { label: "Lambda Function", icon: AWSLambdaIcon },
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

export const nodes = writable<Node[]>(storage.getNodes() ?? defaultNodes);
export const edges = writable<Edge[]>(storage.getEdges() ?? defaultEdges);

nodes.subscribe(storage.setNodes);
edges.subscribe(storage.setEdges);
