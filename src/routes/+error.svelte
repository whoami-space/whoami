<script>
    import Main from "$lib/components/custom/Main.svelte";
    import { page } from "$app/state";

    let pageurl = page.url

</script>

<Main custom="flex flex-col justify-center items-center gap-minimal" >
        <h1 class="text-maximal text-3">404</h1>
        <h2 class="text-medium text-center">It looks like <br><u>{page.url}</u> <br> is not an existing url</h2>
        <p>Try to navigate or go to <a href="/" class="text-3 underline">home page.</a></p>
</Main>