<script lang="ts">
  import ThemeToggle from "./ThemeToggle.svelte";
  import Tooltip from "./Tooltip.svelte";
</script>

<header
  class="py-4 px-6 bg-[#fefefe] border-[#eeeeee] dark:bg-[#2b2b2b] dark:border-[#5b5b5b] border-b-[1px] w-full justify-between items-center flex"
>
  <span class="text-lg font-semibold">Flow Dashboard</span>

  <div class="gap-6 flex items-center">
    <ThemeToggle />

    <Tooltip tip="Guest">
      <div
        class="size-8 font-bold rounded-full flex justify-center items-center bg-blue-500 select-none text-white"
      >
        G
      </div>
    </Tooltip>
  </div>
</header>
