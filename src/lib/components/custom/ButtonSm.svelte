<script>
    import { ChevronRightOutline } from 'flowbite-svelte-icons';
    let {onClick, label} = $props()
</script>

    <button on:click={onClick} class="border p-minimal font-bold rounded-xl flex justify-center items-center gap-minimal cursor-pointer select-none active:scale-[.8] text-3">{label}<slot/></button>

