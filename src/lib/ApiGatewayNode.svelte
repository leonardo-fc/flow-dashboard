<script lang="ts">
  import { Handle, Position } from "@xyflow/svelte";
  import AWSIcon from "@/assets/AWS/Arch_Amazon-API-Gateway_64.svg";

  export let data: {};
  $$restProps;

  const {} = data;
</script>

<div>
  <Handle type="target" id="users" position={Position.Left} />
  <img class="size-16 rounded-md" src={AWSIcon} alt="" />
  <Handle type="source" id="api_gateway" position={Position.Right} />

  <div class="absolute text-center -ml-4 w-24 text-sm">API Gateway</div>
</div>
