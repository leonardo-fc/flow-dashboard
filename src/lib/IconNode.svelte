<script lang="ts">
  import { Handle, Position } from "@xyflow/svelte";

  export let data: { label: string; icon: string };
  $$restProps;

  const { label, icon } = data;
</script>

<div>
  <Handle type="target" position={Position.Left} />
  <img class="size-16 rounded-md" src={icon} alt="" />
  <Handle type="source" position={Position.Right} />

  <div class="absolute text-center -ml-4 w-24 text-sm">
    {label}
  </div>
</div>
