<script context="module" lang="ts">
  import type { Meta } from "@storybook/svelte";
  import ApiGatewayNode from "./ApiGatewayNode.svelte";

  export const meta = {
    title: "Node/ApiGatewayNode",
    component: ApiGatewayNode,
    tags: ["autodocs"],
    args: {
      data: {},
    },
    parameters: {
      layout: "fullscreen",
    },
  } satisfies Meta<ApiGatewayNode>;
</script>

<script lang="ts">
  import { Story, Template } from "@storybook/addon-svelte-csf";
  import StoryFlowLayout from "./stories/StoryFlowLayout.svelte";
</script>

<Template let:args>
  <StoryFlowLayout NodeComponent={ApiGatewayNode} nodeProps={args} />
</Template>

<Story name="Default" />
