<script>
    import Main from "$lib/components/custom/Content.svelte";
    import Textarea from "$lib/components/stable/Contact.svelte";
</script>



<Content custom="flex flex-col gap-medium" >
    <div class="flex flex-col gap-medium">
        <h1 class="text-maximal text-center" >Help? Doubts? Colaborations?</h1>
    <h2 class="text-medium text-center">Contact me by email and I will respond as quickly as possible:</h2>
    </div>
    <div class="">
        <Textarea />
    </div>
</Content>