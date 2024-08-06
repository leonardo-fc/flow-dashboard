<script lang="ts">
  import type { ComponentProps } from "svelte";
  import { SvelteFlowProvider } from "@xyflow/svelte";
  import Flow from "./Flow.consumer.svelte";

  type $$Props = ComponentProps<Flow>;

  $: props = $$restProps as $$Props;
</script>

<SvelteFlowProvider>
  <Flow {...props} />
</SvelteFlowProvider>
