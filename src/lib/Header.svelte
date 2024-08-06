<script lang="ts">
  import ThemeToggle from "./ThemeToggle.svelte";
  import AddServiceMenu from "./header/AddServiceMenu.svelte";
  import UserMenu from "./header/UserMenu.svelte";
</script>

<header
  class="card flex w-full items-center justify-between border-x-0 border-t-0 px-6 py-4"
>
  <div class="flex h-full items-center">
    <span class="text-lg font-semibold">Flow Dashboard</span>
    <div class="divider-y ml-6 mr-2" />
    <AddServiceMenu />
  </div>

  <div class="flex items-center gap-6">
    <ThemeToggle />

    <UserMenu />
  </div>
</header>
