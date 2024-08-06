<script context="module" lang="ts">
  import type { Meta } from "@storybook/svelte";
  import ApiGatewayNode from "./ApiGatewayNode.svelte";

  export const meta = {
    title: "nodes/ApiGatewayNode",
    component: ApiGatewayNode,
    argTypes: {
      "data.hasError": {
        control: "boolean",
      },
    },
    args: {
      "data.hasError": false,
    },
    parameters: {
      layout: "fullscreen",
    },
  } satisfies Meta<ApiGatewayNode>;
</script>

<script lang="ts">
  import * as CSF from "@storybook/addon-svelte-csf";
  import StoryFlowLayout from "@/lib/stories/StoryFlowLayout.svelte";

  const Template = CSF.Template<ApiGatewayNode>;
  const Story = CSF.Story<ApiGatewayNode>;
</script>

<Template let:args>
  <StoryFlowLayout NodeComponent={ApiGatewayNode} nodeProps={args} />
</Template>

<Story name="Default" />
