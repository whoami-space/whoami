<script >
    import { goto } from "$app/navigation";
    import { page } from "$app/state";
    import Main from "$lib/components/custom/Main.svelte";
    import { error, redirect } from "@sveltejs/kit";
    import { StepIndicator } from "flowbite-svelte";
    import { writable } from "svelte/store";

    /*if (page.error) {
        error(404, redirect(308, "/explore/tests/mbti/"))
    }*/

    let { children } = $props();

    
</script>

<Main>
  {@render children() }
</Main>

