<script>
    import { CaretRightSolid } from "flowbite-svelte-icons";

    let { link, title } = $props()
    
</script>


    <div class=" flex flex-col gap-minimal">
        <a href={link} class="bg-3 p-minimal rounded-xl flex justify-center items-center">
            <div class="flex items-center gap-minimal">
                <h2 class="text-medium select-none" >
                    {title}
                </h2>
                <CaretRightSolid class=" w-medium h-medium" />
            </div>
        </a>
        <div class="cardcontent bg-2 p-minimal rounded-xl flex justify-center items-center text-1">
            <slot/>
        </div>
    </div>




<style>



</style>