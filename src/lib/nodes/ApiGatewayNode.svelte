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
    class="absolute top-0 m-1 size-2 rounded-full border-[1px] border-black {hasError
      ? 'bg-error'
      : 'bg-success'}"
  />

  <div class="absolute -ml-4 w-24 text-center text-sm">API Gateway</div>
</div>
