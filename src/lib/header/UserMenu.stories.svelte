<script context="module" lang="ts">
  import type { Meta } from "@storybook/svelte";
  import UserMenu from "./UserMenu.svelte";

  export const meta = {
    title: "header/UserMenu",
    component: UserMenu,
    argTypes: {
      opened: {
        control: "boolean",
      },
    },
    args: {
      opened: true,
    },
  } satisfies Meta<UserMenu>;
</script>

<script lang="ts">
  import * as CSF from "@storybook/addon-svelte-csf";

  const Template = CSF.Template<UserMenu>;
  const Story = CSF.Story<UserMenu>;
</script>

<Template let:args>
  <UserMenu {...args} />
</Template>

<Story name="Default" />
