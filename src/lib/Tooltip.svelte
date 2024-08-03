<script lang="ts">
  export let tip: string;
</script>

<div class="tooltip tooltip-bottom" data-tip={tip}>
  <slot />
</div>

<style>
  .tooltip {
    position: relative;
    display: inline-block;
    text-align: center;
    --tooltip-color: black;
    --tooltip-text-color: white;
    --tooltip-tail: 0.1875rem /* 3px */;
    --tooltip-offset: calc(100% + 1px + var(--tooltip-tail, 0px));
    --tooltip-tail-offset: calc(
      100% + 0.0625rem /* 1px */ - var(--tooltip-tail)
    );
  }
  .tooltip:before {
    position: absolute;
    pointer-events: none;
    z-index: 1;
    content: attr(data-tip);
    max-width: 20rem;
    border-radius: 0.25rem;
    padding: 0.25rem 0.5rem;
    font-size: 0.875rem;
    line-height: 1.25rem;
    background-color: var(--tooltip-color);
    color: var(--tooltip-text-color);
    width: max-content;
  }
  .tooltip:before,
  .tooltip:after {
    opacity: 0;
    transition-property: opacity;
    transition-delay: 100ms;
    transition-duration: 200ms;
    transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  }
  .tooltip:after {
    position: absolute;
    content: "";
    border-style: solid;
    border-width: var(--tooltip-tail, 0);
    width: 0;
    height: 0;
    display: block;
  }
  .tooltip:hover:before {
    opacity: 1;
    transition-delay: 75ms;
  }
  .tooltip:hover:after {
    opacity: 1;
    transition-delay: 75ms;
  }
  .tooltip:has(:focus-visible):after,
  .tooltip:has(:focus-visible):before {
    opacity: 1;
    transition-delay: 75ms;
  }
  .tooltip:not([data-tip]):hover:before,
  .tooltip:not([data-tip]):hover:after {
    visibility: hidden;
    opacity: 0;
  }
  .tooltip-bottom:before {
    transform: translateX(-50%);
    top: var(--tooltip-offset);
    left: 50%;
    right: auto;
    bottom: auto;
  }
  .tooltip-bottom:after {
    border-color: transparent transparent var(--tooltip-color) transparent;
    transform: translateX(-50%);
    top: var(--tooltip-tail-offset);
    left: 50%;
    right: auto;
    bottom: auto;
  }
</style>
