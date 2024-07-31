<script lang="ts">
  import "@xyflow/svelte/dist/style.css";

  import {
    SvelteFlow,
    Controls,
    Background,
    BackgroundVariant,
    MiniMap,
    type NodeTypes,
  } from "@xyflow/svelte";
  import IconNode from "./IconNode.svelte";
  import { nodes, edges } from "@/lib/DiagramStore";

  const nodeTypes = {
    icon: IconNode,
  } as unknown as NodeTypes;
</script>

<div class="h-dvh">
  <SvelteFlow
    {nodes}
    {edges}
    {nodeTypes}
    fitView
    proOptions={{ hideAttribution: true }}
    colorMode="system"
  >
    <Controls />
    <Background variant={BackgroundVariant.Dots} />
    <MiniMap />
  </SvelteFlow>
</div>
