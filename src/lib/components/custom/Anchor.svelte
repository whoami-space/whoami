<script>
    import { P } from "flowbite-svelte";

    let {href, target, onClick} = $props()
</script>



<a on:click={onClick} href={href} target={target} class="p-minimal rounded-xl border-b-[2px] border-dashed select-none border-[2px] border-dotted text-3"><b class="border-b-[2px] border-dotted" ><slot/></b></a>
