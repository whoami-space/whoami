<script>
    import { ChevronRightOutline } from 'flowbite-svelte-icons';
    let {onClick, label} = $props()
</script>



<button on:click={onClick} class="text-3 p-minimal font-bold rounded-xl flex justify-center items-center gap-minimal cursor-pointer select-none border-[2px] border-dotted">{label}<slot/></button>
