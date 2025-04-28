
<script lang="js" >
    
    // External
    import { page } from '$app/state';
    import { writable } from 'svelte/store';
    import { goto } from '$app/navigation';
    import { StepIndicator } from 'flowbite-svelte';

    import { Select, Label } from 'flowbite-svelte';
    let selectedOne = '';
    let countriesOne = [
        { value: 1, name: 'Go to bed' },
        { value: 2, name: 'Eat a lot' },
        { value: 3, name: 'Run or practice sports' }, 
        { value: 4, name: 'Go with people' },
        { value: 5, name: 'Nothing interesting' },
        { value: 6, name: 'I go to cinema' },
        { value: 7, name: 'Drive' },
        { value: 8, name: 'Play a game' },
    ];
    let selectedTwo = '';
    let countriesTwo = [
        { value: 1, name: 'Go to bed' },
        { value: 2, name: 'Eat a lot' },
        { value: 3, name: 'Run or practice sports' }, 
        { value: 4, name: 'Go with people' },
        { value: 5, name: 'Nothing interesting' },
        { value: 6, name: 'I go to cinema' },
        { value: 7, name: 'Drive' },
        { value: 8, name: 'Play a game' },
    ];

    //external exports
    export let data; 
    // Step state
    let pagename = page.url.pathname.substr(page.url.pathname.lastIndexOf('/')).replace('/', '');
    let currentStep = pagename;
    let steps = ['Step 1', 'Step 2', 'Step 3', 'Step 4'];   

    // PROBLEM | Can't set return into a variable
    function counter(select) {

        const selected = select.reduce((items, current) => items + current, 0);
        return selected;

    }
   
   
    
    

</script>


<div class="my-4 p-medium">
    <StepIndicator {currentStep} {steps} color="yellow"  hideLabel size="h-4"/>
</div>
{#if data.stepOne }


    <h1 class="mb-medium text-maximal text-center" >Step 1</h1>
    <h2 class="mb-medium text-medium text-center" >Feelings and social life</h2>

    <Label class="text-2">
    When stressed i'm able to, the value is
    <Select class="mt-2" items={countriesOne} bind:value={selectedOne} />
     </Label>
     <Label class="text-2">
        When stressed i'm able to, the value is
        <Select class="mt-2" items={countriesTwo} bind:value={selectedTwo} />
    </Label>

    {counter([selectedOne, selectedTwo])
    }
     
    <br>
    <button on:click={data.goTo("/explore/tests/mbti/2", data.stepTwo)} class="text-3 bg-2 p-5 font-bold rounded-xl">Next step</button>
{:else}
    { page.error.message }
{/if}
