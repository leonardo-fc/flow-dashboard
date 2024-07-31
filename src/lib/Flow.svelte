<script lang="ts">
  import "@xyflow/svelte/dist/style.css";

  import { writable } from "svelte/store";
  import {
    SvelteFlow,
    Controls,
    Background,
    BackgroundVariant,
    MiniMap,
    type Node,
    type Edge,
    type NodeTypes,
  } from "@xyflow/svelte";
  import IconNode from "./IconNode.svelte";
  import UsersIcon from "@/assets/users.svg";
  import AWSApiGatewayIcon from "@/assets/AWS/Arch_Amazon-API-Gateway_64.svg";
  import AWSLambdaIcon from "@/assets/AWS/Arch_AWS-Lambda_64.svg";

  const nodes = writable<Node[]>([
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
  ]);

  const edges = writable<Edge[]>([
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
  ]);

  const nodeTypes = {
    icon: IconNode,
  } as unknown as NodeTypes;
</script>

<div class="h-dvh">
  <SvelteFlow
    {nodes}
    {nodeTypes}
    {edges}
    fitView
    proOptions={{ hideAttribution: true }}
  >
    <Controls />
    <Background variant={BackgroundVariant.Dots} />
    <MiniMap />
  </SvelteFlow>
</div>
