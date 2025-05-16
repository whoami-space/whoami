<script>
    import Main from "$lib/components/custom/Main.svelte";
</script>



<Main  custom="flex flex-col justify-center items-center gap-medium">
    <h1>Frequently Asked Questions ( FAQ )</h1>
    <h2 class="text-medium text-center">:/ It looks like the users have not asked anything yet</h2>
    <h3>Send a question and your answer will be here</h3>
    <div class="flex flex-col justify-center items-center gap-minimal">
        <a href="/contact" class="select-none p-minimal bg-3 rounded-xl drop-shadow-[2px_2px_0_white] font-bold underline decoration-2">Send your question here</a>
        or
        <a href="/explore" class="select-none  p-minimal bg-3 rounded-xl drop-shadow-[2px_2px_0_white] font-bold underline decoration-2">Explore the resources before</a>
    </div>
</Main>