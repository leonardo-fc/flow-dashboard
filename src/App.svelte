<script lang="ts">
  import App from "./lib/App.svelte";
  import { setSystemDarkThemeContext } from "./lib/isSystemDarkTheme";
  import { setStorageContext } from "./lib/storage";

  setSystemDarkThemeContext();
  setStorageContext();
</script>

<App />
