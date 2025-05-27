<script>
    import { ChevronRightOutline, ExpandOutline, InboxFullOutline } from "flowbite-svelte-icons";
    import ButtonLg from "../custom/ButtonLg.svelte";
    import ButtonSm from "./ButtonSm.svelte";
    

    let { link, label } = $props()


    
</script>


    <div class="flex flex-col gap-minimal">
        <a href={link}>
            <ButtonLg label={label} ><ChevronRightOutline class="w-medium h-medium" /></ButtonLg>
        </a>
        <div class="p-minimal text-2 rounded-xl flex justify-center items-center border bg-1">
            <slot/>
        </div>
    </div>

