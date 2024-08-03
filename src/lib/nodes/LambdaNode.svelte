<script lang="ts">
  import { Handle, Position } from "@xyflow/svelte";
  import AWSIcon from "@/assets/AWS/Arch_AWS-Lambda_64.svg";

  export let data: { hasError: boolean };
  $$restProps;

  $: ({ hasError } = data);
</script>

<div>
  <Handle type="target" id="api_gateway" position={Position.Left} />
  <img class="size-16 rounded-md" src={AWSIcon} alt="" />

  <div
    class="absolute size-2 rounded-full top-0 m-1 border-black border-[1px] {hasError
      ? 'bg-error'
      : 'bg-success'}"
  />

  <div class="absolute text-center -ml-4 w-24 text-sm">Lambda Function</div>
</div>
