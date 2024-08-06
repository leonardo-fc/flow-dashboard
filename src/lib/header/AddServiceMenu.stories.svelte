<script context="module" lang="ts">
  import type { Meta } from "@storybook/svelte";
  import AddServiceMenu from "./AddServiceMenu.svelte";

  export const meta = {
    title: "header/AddServiceMenu",
    component: AddServiceMenu,
    argTypes: {
      opened: {
        control: "boolean",
      },
    },
    args: {
      opened: true,
    },
  } satisfies Meta<AddServiceMenu>;
</script>

<script lang="ts">
  import { Story, Template } from "@storybook/addon-svelte-csf";
</script>

<Template let:args>
  <AddServiceMenu {...args} />
</Template>

<Story name="Default" />
