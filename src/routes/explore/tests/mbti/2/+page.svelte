
<script lang="js" >
    
    // External
    import { page } from '$app/state';
    import { writable } from 'svelte/store';
    import { goto } from '$app/navigation';
    import { StepIndicator } from 'flowbite-svelte';

    //external exports
    export let data; 

    // Step state
    let pagename = page.url.pathname.substr(page.url.pathname.lastIndexOf('/')).replace('/', '');
    let currentStep = pagename;
    let steps = ['Step 1', 'Step 2', 'Step 3', 'Step 4'];   

</script>


<div class="my-4 p-medium">
    <StepIndicator {currentStep} {steps} color="yellow"  hideLabel size="h-4"/>
</div>

{page.url.pathname}
<br> 
<br>
{#if data.stepThree }
    <button on:click={data.goTo("/explore/tests/mbti/3", data.stepThree)} class="text-3 bg-2 p-5 font-bold rounded-xl">Next step</button>
{:else}
    { page.error.message }
{/if}
