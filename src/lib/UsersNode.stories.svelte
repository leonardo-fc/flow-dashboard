<script context="module" lang="ts">
  import type { Meta } from "@storybook/svelte";
  import UsersNode from "./UsersNode.svelte";

  export const meta = {
    title: "Node/UsersNode",
    component: UsersNode,
    tags: ["autodocs"],
    args: {
      data: {},
    },
    parameters: {
      layout: "fullscreen",
    },
  } satisfies Meta<UsersNode>;
</script>

<script lang="ts">
  import { Story, Template } from "@storybook/addon-svelte-csf";
  import StoryFlowLayout from "./stories/StoryFlowLayout.svelte";
</script>

<Template let:args>
  <StoryFlowLayout NodeComponent={UsersNode} nodeProps={args} />
</Template>

<Story name="Default" />
