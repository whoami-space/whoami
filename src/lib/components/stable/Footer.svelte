<script>
    import { ClockArrowOutline } from "flowbite-svelte-icons";
    import Anchor from "../custom/Anchor.svelte";
    import DividerX from "./DividerX.svelte";
    import DividerY from "./DividerY.svelte";

    let reload = () => {
		window.location.reload()
	}


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


<a href="#top" on:click={reload()} class="w-full flex gap-minimal justify-center items-center border rounded-xl p-minimal text-3 cursor-pointer active:scale-[.8] mb-minimal hover:opacity-[.5]" >
    <b>Reload the page</b>
    <ClockArrowOutline />
</a>

<footer class="w-full p-minimal flex flex-wrap justify-center items-center gap-minimal border rounded-xl">
    <p class="font-light" >whoami.space - {year}</p>
    <div class="flex flex-wrap justify-center items-cengter gap-minimal">
        {#each links as link }
            <Anchor href={link.href} >{link.label}</Anchor>
        {/each}
    </div>
</footer>