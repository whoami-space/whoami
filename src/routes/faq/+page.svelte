<script>
    import Anchor from "$lib/components/custom/Anchor.svelte";
    import Content from "$lib/components/custom/Content.svelte";
</script>



<Content  custom="flex flex-col justify-center items-center gap-medium">
    <h1>Frequently Asked Questions ( FAQ )</h1>
    <h2 class="text-medium text-center">:/ It looks like the users have not asked anything yet</h2>
    <h3>Send a question and your answer will be here</h3>
    <div class="flex flex-col justify-center items-center gap-minimal">
        <Anchor href="/contact">Send your question</Anchor>
        or
        <Anchor href="/explore">Explore resources before</Anchor>
    </div>
</Content>