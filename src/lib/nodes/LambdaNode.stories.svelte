<script context="module" lang="ts">
  import type { Meta } from "@storybook/svelte";
  import LambdaNode from "./LambdaNode.svelte";

  export const meta = {
    title: "nodes/LambdaNode",
    component: LambdaNode,
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
  import * as CSF from "@storybook/addon-svelte-csf";
  import StoryFlowLayout from "@/lib/stories/StoryFlowLayout.svelte";

  const Template = CSF.Template<LambdaNode>;
  const Story = CSF.Story<LambdaNode>;
</script>

<Template let:args>
  <StoryFlowLayout NodeComponent={LambdaNode} nodeProps={args} />
</Template>

<Story name="Default" />
