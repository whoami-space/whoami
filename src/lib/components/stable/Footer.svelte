<script>
    import Anchor from "../custom/Anchor.svelte";
    import DividerX from "./DividerX.svelte";
    import DividerY from "./DividerY.svelte";

    let currentdate = new Date()
    let year = `${currentdate.getFullYear()}`

    let links = [
        {
            label: "Faq", href: "/faq"
        },
        {
            label: "Privacy Policy", href: "/privacy-policy"
        }
    ]
</script>



<footer class="mt-minimal w-full p-minimal flex flex-wrap justify-center items-center gap-minimal border rounded-xl">
    <p class="font-light" >whoami.space - {year}</p>
    <div class="flex flex-wrap justify-center items-cengter gap-minimal">
        {#each links as link }
            <Anchor href={link.href} >{link.label}</Anchor>
        {/each}
    </div>
</footer>