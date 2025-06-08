<script>
    import { page } from "$app/state";
    import Anchor from "$lib/components/custom/Anchor.svelte";
    import Content from "$lib/components/custom/Content.svelte";
    import InlineNavigation from "$lib/components/custom/InlineNavigation.svelte";
    import { A404NotFoundSmiley, LaptopServerError } from "flowbite-svelte-illustrations";
</script>

<Content custom="flex flex-col justify-center items-center gap-minimal" >
        <LaptopServerError color1="#E9ECF5" color2="#6200B3" color3="#6200B3" color4="#6200B3" />
        <h1 class="mt-minimal text-maximal text-2 text-center">{page.status}<br>:/</h1>
        <h2 class="text-medium text-center">The content cannot be loaded or the page does not exist</h2>
        <h3>Try to navigate by following next links</h3>
        <br>
        <Anchor href="/">Go to home page</Anchor>
        or
        <Anchor href="/contact">Get help or support</Anchor>
</Content>