<script lang="ts">
  import Flow from "../Flow.svelte";
  import type { Edge, Node, NodeTypes } from "@xyflow/svelte";
  import { writable } from "svelte/store";
  import type { ComponentProps, ComponentType, SvelteComponent } from "svelte";

  type T = $$Generic<
    SvelteComponent<{
      data: Record<string, unknown>;
    }>
  >;

  export let NodeComponent: ComponentType<T>;
  export let nodeProps: ComponentProps<T>;

  const nodes = writable<[Node]>([
    {
      ...nodeProps,
      id: "1",
      type: "custom",
      position: { x: 0, y: 0 },
    },
  ]);
  $: (() => {
    $nodes[0] = {
      ...$nodes[0],
      ...nodeProps,
    };
  })();

  const edges = writable<Edge[]>([]);

  const nodeTypes = {
    custom: NodeComponent,
  } as unknown as NodeTypes;
</script>

<Flow {nodeTypes} {nodes} {edges} />
