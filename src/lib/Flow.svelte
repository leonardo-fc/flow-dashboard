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
  } from "@xyflow/svelte";

  import type { Writable } from "svelte/store";
  import { darkTheme } from "./isDarkTheme";

  export let nodeTypes: NodeTypes;
  export let nodes: Writable<Node[]>;
  export let edges: Writable<Edge[]>;
  export let reset: (() => void) | undefined = undefined;
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
