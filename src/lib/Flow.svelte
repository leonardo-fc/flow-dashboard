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
  import { onMount } from "svelte";

  export let nodeTypes: NodeTypes;
  export let nodes: Writable<Node[]>;
  export let edges: Writable<Edge[]>;
  export let reset: (() => void) | undefined = undefined;

  const html = document.documentElement;
  let dark = html.classList.contains("dark");
  onMount(() => {
    const observer = new MutationObserver((mutationList) => {
      for (const mutation of mutationList) {
        if (mutation.attributeName === "class") {
          dark = html.classList.contains("dark");
        }
      }
    });

    observer.observe(html, { attributes: true });

    return () => observer.disconnect();
  });
</script>

<div class="h-dvh w-full">
  <SvelteFlow
    {nodes}
    {edges}
    {nodeTypes}
    fitView
    proOptions={{ hideAttribution: true }}
    colorMode={dark ? "dark" : "light"}
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
</div>

<style lang="postcss">
  :global(.svelte-flow .svelte-flow__handle.connectingto) {
    @apply bg-error;
  }

  :global(.svelte-flow .svelte-flow__handle.valid) {
    @apply bg-success;
  }
</style>
