<script>
    import { page } from "$app/state";
    import Anchor from "$lib/components/custom/Anchor.svelte";
    import InlineNavigation from "$lib/components/custom/InlineNavigation.svelte";
    import Main from "$lib/components/custom/Main.svelte";
</script>

<Main custom="flex flex-col justify-center items-center gap-minimal" >
        <h1 class="text-maximal text-2 text-center">{page.status}<br>:/</h1>
        <h2 class="text-medium text-center">The content cannot be loaded or the page does not exist</h2>
        <h3>Try to navigate by following next links</h3>
        <br>
        <Anchor href="//">Go to home page</Anchor>
        or
        <Anchor href="/contact">Get help or support</Anchor>
</Main>