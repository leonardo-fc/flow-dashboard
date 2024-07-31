<script context="module" lang="ts">
  import type { Meta } from "@storybook/svelte";
  import IconNode from "./IconNode.svelte";
  import AWSIcon from "@/assets/AWS/AWS-Cloud-logo_32.svg";

  export const meta = {
    title: "Node/IconNode",
    component: IconNode,
    tags: ["autodocs"],
    args: {
      data: {
        label: "Long Amazon Web Service Name",
        icon: AWSIcon,
      },
    },
    parameters: {
      layout: "fullscreen",
    },
  } satisfies Meta<IconNode>;
</script>

<script lang="ts">
  import { Story, Template } from "@storybook/addon-svelte-csf";
  import StoryFlowLayout from "./StoryFlowLayout.svelte";
</script>

<Template let:args>
  <StoryFlowLayout NodeComponent={IconNode} nodeProps={args} />
</Template>

<Story name="Default" />
