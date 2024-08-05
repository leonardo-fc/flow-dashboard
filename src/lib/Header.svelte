<script lang="ts">
  import ThemeToggle from "./ThemeToggle.svelte";
  import Tooltip from "./Tooltip.svelte";
</script>

<header
  class="flex w-full items-center justify-between border-b-[1px] border-[#eeeeee] bg-[#fefefe] px-6 py-4 dark:border-[#5b5b5b] dark:bg-[#2b2b2b]"
>
  <span class="text-lg font-semibold">Flow Dashboard</span>

  <div class="flex items-center gap-6">
    <ThemeToggle />

    <Tooltip tip="Guest">
      <div
        class="flex size-8 select-none items-center justify-center rounded-full bg-blue-500 font-bold text-white"
      >
        G
      </div>
    </Tooltip>
  </div>
</header>
