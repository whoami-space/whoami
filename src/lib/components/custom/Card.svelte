<script>
    import { ChevronRightOutline, ExpandOutline, InboxFullOutline } from "flowbite-svelte-icons";
    import ButtonLg from "../custom/ButtonLg.svelte";
    import ButtonSm from "./ButtonSm.svelte";
    import { Indicator } from "flowbite-svelte";
    import Pic from "./Pic.svelte";
    

    let { link, label } = $props()


    
</script>


    <div class="flex flex-col gap-minimal p-medium rounded-xl border">
        <div class="flex flex-col text-2 rounded-xl justify-center items-center gap-medium">
            <div class="flex flex-col gap-minimal justify-center items-center" >
                <h2 class="flex justify-center items-center gap-minimal text-3" ><Indicator color="none" class="border" />{label}</h2>
                <a href={link}>
                    <ButtonSm label="Access" ><ChevronRightOutline class="w-minimal h-minimal" /></ButtonSm>
                </a>
            </div>
            <div>
                <slot/>
            </div>
        </div>
    </div>

