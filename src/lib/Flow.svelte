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
  } from "@xyflow/svelte";
  import { createDiagramStore } from "@/lib/diagramStore";

  import UsersNode from "./UsersNode.svelte";
  import ApiGatewayNode from "./ApiGatewayNode.svelte";
  import LambdaNode from "./LambdaNode.svelte";

  const { nodes, edges, reset } = createDiagramStore();

  const nodeTypes = {
    users: UsersNode,
    api_gateway: ApiGatewayNode,
    lambda_function: LambdaNode,
  } as unknown as NodeTypes;

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

<div class="h-dvh">
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
    <Panel position="top-right"><button on:click={reset}>Reset</button></Panel>
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
