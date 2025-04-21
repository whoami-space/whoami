<script>
    import { goto } from "$app/navigation";
    import { page } from "$app/state";
    import Main from "$lib/components/custom/Main.svelte";
    import { Popover } from "flowbite-svelte";
    import { GridPlusSolid, ChevronRightOutline } from "flowbite-svelte-icons";

    


    

</script>




<Main custom="flex flex-col gap-medium" >
    <h1 class="text-maximal text-center" >Explore resources</h1> 
    <slot/>
</Main>


