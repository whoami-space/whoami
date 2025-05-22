<script>
    import { CaretRightSolid } from "flowbite-svelte-icons";
    import ButtonLg from "../custom/ButtonLg.svelte";
    

    let { link, label } = $props()
    
</script>


    <div class="flex flex-col gap-minimal">
        <a href={link}>
            <ButtonLg>{label}</ButtonLg>
        </a>
        <div class="cardcontent p-minimal text-2 rounded-xl flex justify-center items-center border bg-1">
            <slot/>
        </div>
    </div>

