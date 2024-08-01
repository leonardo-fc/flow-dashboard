<script lang="ts">
  import { Handle, Position } from "@xyflow/svelte";
  import AWSIcon from "@/assets/AWS/Arch_AWS-Lambda_64.svg";

  export let data: {};
  $$restProps;

  const {} = data;
</script>

<div>
  <Handle type="target" id="api_gateway" position={Position.Left} />
  <img class="size-16 rounded-md" src={AWSIcon} alt="" />

  <div class="absolute text-center -ml-4 w-24 text-sm">Lambda Function</div>
</div>
