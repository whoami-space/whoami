<script>
    import { ChevronRightOutline } from 'flowbite-svelte-icons';
    let {onClick, label, disabled} = $props()
    import "$lib/components/styles/transitions.css";
</script>

<button on:click={onClick} class={disabled ? "show-maximal p-minimal font-bold rounded-xl flex justify-center items-center gap-minimal select-none hover:cursor-not-allowed text-2" : "show-maximal border p-minimal font-bold rounded-xl flex justify-center items-center gap-minimal cursor-pointer select-none active:scale-[.8] text-3 hover:opacity-[.5]"}>{label}<slot/></button>


