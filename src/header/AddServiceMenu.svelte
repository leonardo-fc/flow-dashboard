<script lang="ts">
  import { scale } from "svelte/transition";
  import { cubicOut } from "svelte/easing";
  import ApiGatewayIcon from "@/assets/AWS/Arch_Amazon-API-Gateway_64.svg";
  import Lambda from "@/assets/AWS/Arch_AWS-Lambda_64.svg";
  import { serdeNodeDrag } from "@/lib/serdeNodeDrag";
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

  const onDragStart = (
    event: DragEvent & {
      currentTarget: EventTarget & HTMLElement;
    },
    type: string,
  ) => {
    if (!event.dataTransfer) return null;

    const originX = event.offsetX / event.currentTarget.clientHeight;
    const originY = event.offsetY / event.currentTarget.clientWidth;

    event.dataTransfer.setData(
      serdeNodeDrag.format,
      serdeNodeDrag.toString({ type, originX, originY }),
    );
    event.dataTransfer.effectAllowed = "move";
  };

  const nodeOptions = [
    {
      type: "api_gateway",
      name: "API Gateway",
      img: ApiGatewayIcon,
    },
    {
      type: "lambda_function",
      name: "Lambda",
      img: Lambda,
    },
  ];
</script>

<div class="relative inline-block">
  <button
    bind:this={button}
    on:click={() => (opened = !opened)}
    type="button"
    class="inline-flex w-full justify-center gap-x-1.5 rounded-md px-3 py-2 text-sm font-semibold"
    id="menu-button"
    aria-haspopup="menu"
    aria-expanded={opened}
  >
    Add Service
    <svg
      class="-mr-1 h-5 w-5 text-gray-400 transition-transform duration-300
        {opened ? 'rotate-180' : ''}"
      viewBox="0 0 20 20"
      fill="currentColor"
      aria-hidden="true"
    >
      <path
        fill-rule="evenodd"
        d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
        clip-rule="evenodd"
      />
    </svg>
  </button>

  {#if opened}
    <div
      bind:this={menu}
      in:scale={{ duration: 300, easing: cubicOut, start: 0.95 }}
      out:scale={{ duration: 200, easing: cubicOut, start: 0.95 }}
      class="card absolute left-0 right-0 z-10 mt-2 flex w-max items-center gap-4 rounded-md p-2 shadow-lg focus:outline-none"
      role="menu"
      aria-orientation="horizontal"
      aria-labelledby="menu-button"
      tabindex="-1"
    >
      <span class="min-w-28 text-center text-sm"
        >Drag the service<br />to add</span
      >

      {#each nodeOptions as { type, name, img }, index}
        <div
          class="flex flex-col items-center gap-y-1"
          role="menuitem"
          tabindex="-1"
          id="menu-item-{index}"
        >
          <img
            src={img}
            alt=""
            class="mx-2 size-12 cursor-grab rounded-md"
            on:dragstart={(event) => onDragStart(event, type)}
            draggable={true}
          />
          <span class="text-center text-xs">{name}</span>
        </div>
      {/each}
    </div>
  {/if}
</div>
