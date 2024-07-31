<script lang="ts">
  import "@xyflow/svelte/dist/style.css";
  import {
    Background,
    BackgroundVariant,
    Controls,
    MiniMap,
    SvelteFlow,
    type Edge,
    type Node,
    type NodeTypes,
  } from "@xyflow/svelte";
  import { writable } from "svelte/store";
  import type { ComponentProps, ComponentType, SvelteComponent } from "svelte";

  type T = $$Generic<
    SvelteComponent<{
      data: Record<string, unknown>;
    }>
  >;

  export let NodeComponent: ComponentType<T>;
  export let nodeProps: ComponentProps<T>;

  const nodes = writable<Node[]>([
    {
      ...nodeProps,
      id: "1",
      type: "custom",
      position: { x: 0, y: 0 },
    },
  ]);
  const edges = writable<Edge[]>([]);

  const nodeTypes = {
    custom: NodeComponent,
  } as unknown as NodeTypes;
</script>

<div class="h-screen w-full">
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
