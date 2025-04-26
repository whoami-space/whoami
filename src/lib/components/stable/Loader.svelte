

<script>
    import { page } from '$app/state';
    import { TextPlaceholder } from 'flowbite-svelte';
    import { GlobeSolid } from 'flowbite-svelte-icons';
    
    let pageurl = page.url;

</script>


<div class="z-[90000000000000000000000000000] loader absolute top-[0] w-[100vw] h-[100vh] p-maximal flex flex-col gap-medium text-1 bg-2 overflow-hidden">
    <div class="flex gap-minimal items-center">
        <img src="https://ucarecdn.com/77da2dbc-5bd4-4c5a-a90a-429185578623/subicon.jpg" alt="" class="shadow-xl w-medium h-medium rounded-full">
        <h2 class="text-medium animate-pulse">whoami.space</h2>
    </div>
   
    <TextPlaceholder class="" />

    {#if pageurl}
    <p class="animate-pulse font-bold text-minimal flex gap-minimal items-center max-w-[60vw]" ><GlobeSolid/><u>{pageurl}<br/></u></p>
    {/if}
    
    
</div>




<style>

.loader {
    animation: fadeout 5s ease-out forwards;
    animation-iteration-count: 1;
}

@keyframes fadeout {
    0% {
        opacity: 1;
        position: fixed;
        overflow-y: hidden;
    }
    90% {
        opacity: 1;
        position: fixed;
        overflow-y: hidden;
    }
    100% {
        opacity: 0;
        visibility: hidden;
    }
}

</style>



