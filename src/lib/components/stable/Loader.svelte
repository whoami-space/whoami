

<script>
    import { page } from '$app/state';
    import { TextPlaceholder } from 'flowbite-svelte';
    
    let pageurl = page.url;

</script>


<div class="z-[90000000000000000000000000000] loader absolute top-[0] w-[100vw] h-[100vh] bg-1 p-maximal flex flex-col justify-center gap-medium text-1 bg-2">
    <h2 class="text-medium animate-pulse text-1">Wait a sec...</h2>
    <TextPlaceholder class="" />
    {#if pageurl}
    <p class="animate-pulse font-bold text-1 text-minimal" >You're in <br>  <u>{pageurl}</u></p>
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



