<script>
    import { ChevronRightOutline } from 'flowbite-svelte-icons';
    let {onClick, label} = $props()
</script>



<button on:click={onClick} class="p-minimal border text-3 font-bold rounded-xl flex justify-center items-center gap-minimal cursor-pointer text-medium w-full  select-none active:scale-[.8]">{label}<slot/></button>
