<script>
    import { CaretRightSolid } from "flowbite-svelte-icons";
    import ButtonLg from "../sloted/ButtonLg.svelte";
    

    let { link, label } = $props()
    
</script>


    <div class=" flex flex-col gap-minimal">
        <a href={link}>
            <ButtonLg>{label}</ButtonLg>
        </a>
        <div class="cardcontent bg-2 p-minimal rounded-xl flex justify-center items-center text-1">
            <slot/>
        </div>
    </div>




<style>



</style>