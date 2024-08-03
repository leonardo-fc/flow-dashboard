<script lang="ts">
  import { Handle, Position } from "@xyflow/svelte";
  import AWSIcon from "@/assets/AWS/Arch_Amazon-API-Gateway_64.svg";

  export let data: { hasError: boolean };
  $$restProps;

  $: ({ hasError } = data);
</script>

<div>
  <Handle type="target" id="users" position={Position.Left} />
  <img class="size-16 rounded-md" src={AWSIcon} alt="" />
  <Handle type="source" id="api_gateway" position={Position.Right} />

  <div
    class="absolute size-2 rounded-full top-0 m-1 border-black border-[1px] {hasError
      ? 'bg-error'
      : 'bg-success'}"
  />

  <div class="absolute text-center -ml-4 w-24 text-sm">API Gateway</div>
</div>
