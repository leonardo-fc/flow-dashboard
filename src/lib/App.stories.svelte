<script context="module" lang="ts">
  import type { Meta } from "@storybook/svelte";
  import App from "./App.svelte";

  export const meta = {
    title: "App",
    component: App,
    parameters: {
      layout: "fullscreen",
    },
  } satisfies Meta<App>;
</script>

<script lang="ts">
  import { Story, Template } from "@storybook/addon-svelte-csf";
</script>

<Template let:args>
  <App {...args} />
</Template>

<Story name="Default" />
