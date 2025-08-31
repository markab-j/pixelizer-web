<script lang="ts">
    import Button from "./button.svelte";
    import SunIcon from "@lucide/svelte/icons/sun";
    import MoonIcon from "@lucide/svelte/icons/moon";

    import { toggleMode } from "mode-watcher";
    import {cn} from '$lib/utils';

    let { class: className } = $props();
</script>

<Button class={cn("size-9 hover:bg-accent hover:text-accent-foreground dark:hover:bg-accent/50", className)}
  onclick={toggleMode}>
  <SunIcon
    class="size-5 rotate-0 scale-100 !transition-all dark:-rotate-90 dark:scale-0"
  />
  <MoonIcon
    class="absolute size-5 rotate-90 scale-0 !transition-all dark:rotate-0 dark:scale-100"
  />
  <span class="sr-only">Toggle theme</span>
</Button>