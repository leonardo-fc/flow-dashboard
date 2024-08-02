<script lang="ts">
  import Flow from "./lib/Flow.svelte";
  import { createDiagramStore } from "@/lib/diagramStore";
  import UsersNode from "./lib/UsersNode.svelte";
  import ApiGatewayNode from "./lib/ApiGatewayNode.svelte";
  import LambdaNode from "./lib/LambdaNode.svelte";
  import type { NodeTypes } from "@xyflow/svelte";

  const { nodes, edges, reset } = createDiagramStore();

  const nodeTypes = {
    users: UsersNode,
    api_gateway: ApiGatewayNode,
    lambda_function: LambdaNode,
  } as unknown as NodeTypes;
</script>

<Flow {nodeTypes} {nodes} {edges} {reset} />
