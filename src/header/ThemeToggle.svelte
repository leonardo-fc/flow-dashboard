<script lang="ts">
  import { getSystemThemeContext } from "@/lib/isSystemDarkTheme";
  import { getStorageContext } from "@/lib/storage";

  const systemDark = getSystemThemeContext();
  const storage = getStorageContext();

  $: dark = (() => {
    const storageTheme = storage.getTheme();
    return storageTheme === null ? $systemDark : storageTheme === "dark";
  })();

  $: (() => {
    if (dark) {
      storage.setTheme(systemDark.get() ? null : "dark");
      document.documentElement.classList.add("dark");
    } else {
      storage.setTheme(!systemDark.get() ? null : "light");
      document.documentElement.classList.remove("dark");
    }
  })();
</script>

<label class="flex cursor-pointer gap-2">
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    stroke-width="2"
    stroke-linecap="round"
    stroke-linejoin="round"
  >
    <circle cx="12" cy="12" r="5" />
    <path
      d="M12 1v2M12 21v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M1 12h2M21 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4"
    />
  </svg>
  <input bind:checked={dark} type="checkbox" class="toggle" />
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    stroke-width="2"
    stroke-linecap="round"
    stroke-linejoin="round"
  >
    <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
  </svg>
</label>

<style>
  .toggle {
    flex-shrink: 0;
    --handleoffset: 1.5rem;
    --handleoffsetcalculator: calc(var(--handleoffset) * -1);
    --togglehandleborder: 0 0;
    height: 1.5rem;
    width: 3rem;
    cursor: pointer;
    appearance: none;
    border-radius: var(--rounded-badge, 1.9rem);
    border-width: 1px;
    border-color: currentColor;
    background-color: currentColor;
    transition:
      background,
      box-shadow var(--animation-input, 0.2s) ease-out;
    box-shadow:
      var(--handleoffsetcalculator) 0 0 2px var(--bg) inset,
      0 0 0 2px var(--bg) inset,
      var(--togglehandleborder);
  }
  .toggle:checked {
    background-image: none;
    --handleoffsetcalculator: var(--handleoffset);
    --tw-text-opacity: 1;
  }
</style>
