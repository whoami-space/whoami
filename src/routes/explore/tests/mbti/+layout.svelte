<script >
    import { page } from "$app/state";
    import Main from "$lib/components/custom/Main.svelte";
    import { StepIndicator } from "flowbite-svelte";
    import { writable } from "svelte/store";

    let { children } = $props();

    
</script>

<Main>
  {@render children() }
</Main>

