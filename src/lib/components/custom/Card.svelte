<script>
    import { ChevronRightOutline, ExpandOutline, InboxFullOutline } from "flowbite-svelte-icons";
    import ButtonLg from "../custom/ButtonLg.svelte";
    import ButtonSm from "./ButtonSm.svelte";
    import { Indicator } from "flowbite-svelte";
    import Pic from "./Pic.svelte";
    

    let { link, label } = $props()


    
</script>


    <div class="relative flex flex-col gap-minimal p-medium rounded-xl border">
        <Indicator color="none" class="absolute left-minimal top-minimal border w-minimal h-minimal" />
        <div class="flex flex-col text-2 rounded-xl justify-center items-center gap-medium">
            <div class="flex flex-col gap-minimal justify-center items-center" >
                <h2 class="text-3" >{label}</h2>
                <a href={link}>
                    <ButtonSm label="Access" ><ChevronRightOutline class="w-minimal h-minimal" /></ButtonSm>
                </a>
            </div>
            <div>
                <slot/>
            </div>
        </div>
    </div>

