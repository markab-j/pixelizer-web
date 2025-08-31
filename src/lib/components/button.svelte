<script lang="ts">
    import {cn, type WithElementRef} from '$lib/utils';
    import type {HTMLButtonAttributes} from 'svelte/elements';

    let { class: className, children, disabled, ...restProps }: WithElementRef<HTMLButtonAttributes> = $props();

    const base = "focus-visible:border-ring focus-visible:ring-ring/50 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive inline-flex shrink-0 items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium outline-none transition-all focus-visible:ring-[3px] disabled:pointer-events-none disabled:opacity-50 aria-disabled:pointer-events-none aria-disabled:opacity-50 [&_svg:not([class*='size-'])]:size-4 [&_svg]:pointer-events-none [&_svg]:shrink-0";
</script>

<button class={cn(base, className)}
        {disabled}
        {...restProps}
>
  {@render children?.()}
</button>