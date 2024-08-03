import "../src/app.css";
import type { Preview, Decorator } from "@storybook/svelte";
import { withThemeByClassName } from "@storybook/addon-themes";
import StoriesLayout from "../src/lib/stories/StoriesLayout.svelte";

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    backgrounds: { disable: true },
    deepControls: { enabled: true },
  },
  decorators: [
    withThemeByClassName({
      themes: {
        light: "",
        dark: "dark",
      },
      defaultTheme: "light",
    }),
    () => StoriesLayout,
  ] as Decorator[],
};

export default preview;
