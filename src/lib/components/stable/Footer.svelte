<script>
    import Anchor from "../custom/Anchor.svelte";

    let currentdate = new Date()
    let year = `${currentdate.getFullYear()}`
</script>


<footer class="pt-medium px-minimal flex flex-col items-center gap-minimal  m-medium">
    <div class="flex flex-wrap justify-center items-center gap-minimal" >
        <Anchor href="/privacy-policy">Privacy policy</Anchor>
        <Anchor href="/faq">Faq</Anchor>
    </div>
    <p>&copy whoami.space - {year}</p>
</footer>