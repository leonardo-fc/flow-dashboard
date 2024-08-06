<script context="module" lang="ts">
  import type { Meta } from "@storybook/svelte";
  import Tooltip from "./Tooltip.svelte";

  export const meta = {
    title: "common/Tooltip",
    component: Tooltip,
    args: {
      tip: "Tip message",
    },
    argTypes: {
      tip: { control: "text" },
    },
  } satisfies Meta<Tooltip>;
</script>

<script lang="ts">
  import * as CSF from "@storybook/addon-svelte-csf";

  const Template = CSF.Template<Tooltip>;
  const Story = CSF.Story<Tooltip>;
</script>

<Template let:args>
  <Tooltip {...args}>Hover me</Tooltip>
</Template>

<Story name="Default" />
