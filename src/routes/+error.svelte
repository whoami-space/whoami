<script>
    import { page } from "$app/state";
    import InlineNavigation from "$lib/components/custom/InlineNavigation.svelte";
    import Main from "$lib/components/custom/Main.svelte";
</script>

<Main custom="flex flex-col justify-center items-center gap-minimal" >
        <h1 class="text-maximal text-2 text-center">{page.status}<br>:/</h1>
        <h2 class="text-medium text-center">The content cannot be loaded or the page does not exist</h2>
        <h3>Try to navigate by following next links</h3>
        <br>
        <a href="/" class="select-none p-minimal bg-3 rounded-xl drop-shadow-[2px_2px_0_white] font-bold underline decoration-2">Go to home page</a>
        or
        <a href="/contact" class="select-none  p-minimal bg-3 rounded-xl drop-shadow-[2px_2px_0_white] font-bold underline decoration-2">Get help or support</a>
        <script>
            import { Progressradial } from "flowbite-svelte";
          </script>
</Main>