<script>
    import { goto } from "$app/navigation";
    import { redirect } from "@sveltejs/kit";
    import { writable } from "svelte/store";
    


    function goTo(link) {
        goto(link)
    }

    export let stepOne = writable(false)


    
</script>

<button on:click={goTo("/explore/tests/mbti/1") & stepOne.set(true)} class="text-3 bg-2 p-5 font-bold rounded-xl">Access test</button>
