<script>
    import { goto } from "$app/navigation";
    import { page } from "$app/state";
    import Main from "$lib/components/custom/Main.svelte";
    import { Popover } from "flowbite-svelte";
    import { GridPlusSolid, ChevronRightOutline } from "flowbite-svelte-icons";

    


    

</script>




<Main custom="flex flex-col gap-medium" >
    <h1 class="text-maximal text-center" >Explore resources</h1>
    <div>
        <div class="w-full flex flex-col justufy-center items-center">
            <button id="hover" class="rounded-full border-[0] flex justify-center items-center font-bold text-3 underline">Order by</button>
            <Popover class="w-64 text-sm font-light " title="Order by" triggeredBy="#hover" trigger="hover">
                content
            </Popover>
          </div> 
    </div>
    
    <slot/>
</Main>

