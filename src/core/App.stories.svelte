<script context="module" lang="ts">
  import type { Meta } from "@storybook/svelte";
  import App from "./App.svelte";
  import { within, userEvent, expect } from "@storybook/test";
  import { mouseDrag, dragAndDrop } from "@/lib/stories/dragUserEvent";
  import { sleep } from "@/lib/sleep";

  export const meta = {
    title: "App",
    component: App,
    parameters: {
      layout: "fullscreen",
    },
  } satisfies Meta<App>;

  const play: Meta<App>["play"] = async ({ canvasElement, step }) => {
    await sleep(0); // ensure Flow rendered

    const canvas = within(canvasElement);
    const node = canvas.getByText(/api gateway/i);
    const nodeY = () => ({ y: node.getBoundingClientRect().y });
    const initialY = nodeY();

    await step("Drag services", async () => {
      await mouseDrag(node, {
        delta: { x: 0, y: -100 },
      });

      await expect(nodeY()).not.toEqual(initialY);
    });

    await step("Drag new service", async () => {
      const button = canvas.getByText(/add service/i);
      await userEvent.click(button);

      const menu = within(canvas.getByRole("menu"));

      await dragAndDrop(
        menu.getByText(/api gateway/i).parentElement!.firstElementChild!,

        {
          delta: { x: 0, y: 200 },
        },
      );
      await userEvent.click(button);

      const flow = within(canvas.getByTestId("svelte-flow__wrapper"));
      const nodes = flow.getAllByText(/api gateway/i);

      await expect(nodes).toHaveLength(2);
    });

    await step("Reset button", async () => {
      await userEvent.click(canvas.getByText(/reset/i));

      await expect(nodeY()).toEqual(initialY);
    });
  };
</script>

<script lang="ts">
  import * as CSF from "@storybook/addon-svelte-csf";

  const Template = CSF.Template<App>;
  const Story = CSF.Story<App>;
</script>

<Template let:args>
  <App {...args} />
</Template>

<Story name="Default" {play} />
