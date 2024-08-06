<script context="module" lang="ts">
  import type { Meta } from "@storybook/svelte";
  import UsersNode from "./UsersNode.svelte";

  export const meta = {
    title: "nodes/UsersNode",
    component: UsersNode,
    args: {
      data: {},
    },
    parameters: {
      layout: "fullscreen",
    },
  } satisfies Meta<UsersNode>;
</script>

<script lang="ts">
  import * as CSF from "@storybook/addon-svelte-csf";
  import StoryFlowLayout from "@/lib/stories/StoryFlowLayout.svelte";

  const Template = CSF.Template<UsersNode>;
  const Story = CSF.Story<UsersNode>;
</script>

<Template let:args>
  <StoryFlowLayout NodeComponent={UsersNode} nodeProps={args} />
</Template>

<Story name="Default" />
