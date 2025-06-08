<script>
    import { ChevronRightOutline } from 'flowbite-svelte-icons';
    let {onClick, label, disabled} = $props()
</script>

<button on:click={onClick} class={disabled ? "p-minimal font-bold rounded-xl flex justify-center items-center gap-minimal select-none text-2 opacity-[.5]" : "border p-minimal font-bold rounded-xl flex justify-center items-center gap-minimal cursor-pointer select-none active:scale-[.8] text-3"}>{label}<slot/></button>


