<script lang="ts">
  import Flow from "./lib/Flow.svelte";
  import { createDiagramStore } from "@/lib/diagramStore";
  import UsersNode from "./lib/nodes/UsersNode.svelte";
  import ApiGatewayNode from "./lib/nodes/ApiGatewayNode.svelte";
  import LambdaNode from "./lib/nodes/LambdaNode.svelte";
  import type { NodeTypes } from "@xyflow/svelte";
  import Header from "./lib/Header.svelte";
  import { setSystemDarkThemeContext } from "./lib/isSystemDarkTheme";
  import { setStorageContext } from "./lib/storage";

  setSystemDarkThemeContext();
  setStorageContext();

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
