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
    class="absolute top-0 m-1 size-2 rounded-full border-[1px] border-black {hasError
      ? 'bg-error'
      : 'bg-success'}"
  />

  <div class="details-bottom w-24 text-center text-sm">Lambda Function</div>
</div>
