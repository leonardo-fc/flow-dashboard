<script lang="ts">
  import type { NodeTypes } from "@xyflow/svelte";
  import { createDiagramStore } from "./diagramStore";
  import Header from "@/header/Header.svelte";
  import Flow from "./Flow.svelte";
  import UsersNode from "@/nodes/UsersNode.svelte";
  import ApiGatewayNode from "@/nodes/ApiGatewayNode.svelte";
  import LambdaNode from "@/nodes/LambdaNode.svelte";

  const { nodes, edges, reset } = createDiagramStore();

  const nodeTypes = {
    users: UsersNode,
    api_gateway: ApiGatewayNode,
    lambda_function: LambdaNode,
  } as unknown as NodeTypes;
</script>

<div class="flex h-dvh flex-1 flex-shrink flex-col">
  <Header />

  <main class="flex-1">
    <Flow {nodeTypes} {nodes} {edges} {reset} />
  </main>
</div>
