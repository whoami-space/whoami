<script>
    import Anchor from "$lib/components/custom/Anchor.svelte";
    import Content from "$lib/components/custom/Content.svelte";
    import { ManQuestionMarks } from "flowbite-svelte-illustrations";
</script>



<Content  custom="flex flex-col justify-center items-center gap-medium">
    <ManQuestionMarks color1="#393D3F" color2="#6200B3" color3="#6200B3" color4="#6200B3" color5="#393D3F" color6="#E9ECF5" />
    <h1>Frequently Asked Questions ( FAQ )</h1>
    <h2 class="text-medium text-center">:/ It looks like the users have not asked anything yet</h2>
    <h3>Send a question and your answer will be here</h3>
    <div class="flex flex-col justify-center items-center gap-minimal">
        <Anchor href="/contact">Send your question</Anchor>
        or
        <Anchor href="/explore">Explore resources before</Anchor>
    </div>
</Content>