<script context="module" lang="ts">
  import type { Meta } from "@storybook/svelte";
  import App from "./App.svelte";
  import { within, userEvent, expect } from "@storybook/test";
  import { drag } from "./stories/dragUserEvent";
  import { sleep } from "./sleep";

  export const meta = {
    title: "App",
    component: App,
    parameters: {
      layout: "fullscreen",
    },
    play: async ({ canvasElement, step }) => {
      await sleep(0); // ensure Flow rendered

      const canvas = within(canvasElement);
      const node = canvas.getByText(/api gateway/i);
      const nodeY = () => ({ y: node.getBoundingClientRect().y });
      const initialY = nodeY();

      await step("Drag nodes", async () => {
        await drag(node, {
          delta: { x: 0, y: -100 },
        });

        await expect(nodeY()).not.toEqual(initialY);
      });

      await step("Reset button", async () => {
        await userEvent.click(canvas.getByText(/reset/i));

        await expect(nodeY()).toEqual(initialY);
      });
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
