<script>
    let {href, target, onClick} = $props()
</script>



<a on:click={onClick} href={href} target={target} class="rounded-xl text-3"><b class="border-b-[2px] border-dotted" ><slot/></b></a>
