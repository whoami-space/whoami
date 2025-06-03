

<script >
    import { goto } from "$app/navigation";
    import { page } from "$app/state";
    import Content from "$lib/components/custom/Content.svelte";
    import { error, redirect } from "@sveltejs/kit";
    import { StepIndicator } from "flowbite-svelte";
    import { writable } from "svelte/store";

    /*if (page.error) {
        error(404, redirect(308, "/explore/tests/mbti/"))
    }*/



    let { children } = $props();

    
</script>


{@render children() }

