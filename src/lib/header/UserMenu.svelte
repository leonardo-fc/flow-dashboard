<script lang="ts">
  import { scale } from "svelte/transition";
  import { cubicOut } from "svelte/easing";
  import { computePosition, shift } from "@floating-ui/dom";

  export let opened = false;

  let button: HTMLButtonElement;
  let menu: HTMLDivElement;

  $: (() => {
    if (!button || !menu) return;
    if (!opened) return;

    computePosition(button, menu, {
      middleware: [shift()],
    }).then(({ x, y }) => {
      Object.assign(menu.style, {
        left: `${x}px`,
        top: `${y}px`,
      });
    });
  })();
</script>

<div class="relative inline-block">
  <button
    bind:this={button}
    on:click={() => (opened = !opened)}
    type="button"
    class="flex size-8 select-none items-center justify-center rounded-full bg-blue-500 font-bold text-white"
    id="menu-button"
    aria-haspopup="menu"
    aria-expanded={opened}
  >
    G
  </button>

  {#if opened}
    <div
      bind:this={menu}
      in:scale={{ duration: 300, easing: cubicOut, start: 0.95 }}
      out:scale={{ duration: 200, easing: cubicOut, start: 0.95 }}
      class="card absolute left-0 right-0 z-10 mt-2 w-max rounded-md py-1 shadow-lg focus:outline-none"
      role="menu"
      aria-orientation="vertical"
      aria-labelledby="menu-button"
      tabindex="-1"
    >
      <div
        class="px-4 py-2 text-sm"
        role="menuitem"
        tabindex="-1"
        id="menu-item-0"
      >
        Current as<br />
        <span class="font-semibold">Guest account</span>
      </div>

      <div class="divider-x h-[1px]" />

      <a
        class="block cursor-pointer px-4 py-2 text-sm hover:opacity-50"
        role="menuitem"
        tabindex="-1"
        id="menu-item-1"
      >
        Sign In
      </a>
    </div>
  {/if}
</div>
