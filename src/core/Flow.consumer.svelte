<script lang="ts">
  import "@xyflow/svelte/dist/style.css";

  import {
    SvelteFlow,
    Controls,
    Background,
    BackgroundVariant,
    MiniMap,
    type NodeTypes,
    Panel,
    type Node,
    type Edge,
    useSvelteFlow,
  } from "@xyflow/svelte";
  import { createId } from "@paralleldrive/cuid2";
  import type { Writable } from "svelte/store";
  import { darkTheme } from "@/lib/isDarkTheme";
  import { serdeNodeDrag } from "@/lib/serdeNodeDrag";

  export let nodeTypes: NodeTypes;
  export let nodes: Writable<Node[]>;
  export let edges: Writable<Edge[]>;
  export let reset: (() => void) | undefined = undefined;

  const { screenToFlowPosition } = useSvelteFlow();
  const onDragOver = (event: DragEvent) => {
    event.preventDefault();

    if (event.dataTransfer) {
      event.dataTransfer.dropEffect = "move";
    }
  };

  const onDrop = (event: DragEvent) => {
    event.preventDefault();

    if (!event.dataTransfer) return null;

    const data = serdeNodeDrag.fromString(
      event.dataTransfer.getData(serdeNodeDrag.format),
    );
    if (!data) return null;

    const position = screenToFlowPosition({
      x: event.clientX,
      y: event.clientY,
    });

    const newNode = {
      id: createId(),
      type: data.type,
      data: {},
      position,
      origin: [data.originX, data.originY],
    } satisfies Node;

    $nodes.push(newNode);
    $nodes = $nodes;
  };
</script>

<SvelteFlow
  {nodes}
  {edges}
  {nodeTypes}
  fitView
  proOptions={{ hideAttribution: true }}
  colorMode={$darkTheme ? "dark" : "light"}
  isValidConnection={(connection) => {
    return connection.targetHandle === connection.sourceHandle;
  }}
  on:dragover={onDragOver}
  on:drop={onDrop}
>
  <Controls />
  <Background variant={BackgroundVariant.Dots} />
  <MiniMap />
  {#if reset}
    <Panel position="top-right">
      <button on:click={reset}>Reset</button>
    </Panel>
  {/if}
</SvelteFlow>

<style lang="postcss">
  :global(.svelte-flow .svelte-flow__handle.connectingto) {
    @apply bg-error;
  }

  :global(.svelte-flow .svelte-flow__handle.valid) {
    @apply bg-success;
  }
</style>
