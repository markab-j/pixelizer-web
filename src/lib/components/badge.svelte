<script lang="ts">
    import {cn} from '$lib/utils';

    const base = "focus-visible:border-ring focus-visible:ring-ring/50 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive inline-flex w-fit shrink-0 items-center justify-center gap-1 overflow-hidden whitespace-nowrap rounded-md border px-2 py-0.5 text-xs font-medium transition-[color,box-shadow] focus-visible:ring-[3px] [&>svg]:pointer-events-none [&>svg]:size-3";

    let { class: className, children } = $props();
</script>

<span class={cn(base, className)}
      data-slot="badge"
>
  {@render children?.()}
</span>