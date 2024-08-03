<script context="module" lang="ts">
  import type { Meta } from "@storybook/svelte";
  import LambdaNode from "./LambdaNode.svelte";

  export const meta = {
    title: "Node/LambdaNode",
    component: LambdaNode,
    tags: ["autodocs"],
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
  } satisfies Meta<LambdaNode>;
</script>

<script lang="ts">
  import { Story, Template } from "@storybook/addon-svelte-csf";
  import StoryFlowLayout from "@/lib/stories/StoryFlowLayout.svelte";
</script>

<Template let:args>
  <StoryFlowLayout NodeComponent={LambdaNode} nodeProps={args} />
</Template>

<Story name="Default" />
