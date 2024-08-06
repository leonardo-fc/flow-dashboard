<script context="module" lang="ts">
  import type { Meta } from "@storybook/svelte";
  import Header from "./Header.svelte";

  export const meta = {
    title: "common/Header",
    component: Header,
    parameters: {
      layout: "fullscreen",
    },
  } satisfies Meta<Header>;
</script>

<script lang="ts">
  import * as CSF from "@storybook/addon-svelte-csf";

  const Template = CSF.Template<Header>;
  const Story = CSF.Story<Header>;
</script>

<Template let:args>
  <Header {...args} />
</Template>

<Story name="Default" />
