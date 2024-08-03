<script lang="ts">
  import { setStoryDarkThemeContext } from "../isSystemDarkTheme";
  import { setNoopStorageContext } from "../storage";

  setStoryDarkThemeContext();
  setNoopStorageContext();
</script>

<slot />
