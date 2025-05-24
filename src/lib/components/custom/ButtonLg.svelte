<script>
    import { ChevronRightOutline } from 'flowbite-svelte-icons';
    let {onClick, label} = $props()
</script>



<button on:click={onClick} class="p-minimal text-3 font-bold rounded-xl flex justify-center items-center gap-minimal cursor-pointer text-medium w-full  select-none border-[2px] border-dotted">{label}<slot/></button>
