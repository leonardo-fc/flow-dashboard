<script lang="ts">
  import Flow from "./Flow.svelte";
  import { createDiagramStore } from "./diagramStore";
  import UsersNode from "./nodes/UsersNode.svelte";
  import ApiGatewayNode from "./nodes/ApiGatewayNode.svelte";
  import LambdaNode from "./nodes/LambdaNode.svelte";
  import type { NodeTypes } from "@xyflow/svelte";
  import Header from "./Header.svelte";

  const { nodes, edges, reset } = createDiagramStore();

  const nodeTypes = {
    users: UsersNode,
    api_gateway: ApiGatewayNode,
    lambda_function: LambdaNode,
  } as unknown as NodeTypes;
</script>

<div class="h-dvh flex flex-col">
  <Header />

  <main class="flex-1">
    <Flow {nodeTypes} {nodes} {edges} {reset} />
  </main>
</div>
