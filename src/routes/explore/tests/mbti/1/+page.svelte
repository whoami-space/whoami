
<script lang="js" >
    
    // Sveltekit
    import { page } from '$app/state';
    import { writable } from 'svelte/store';
    import { goto } from '$app/navigation';

    // Flowbite
    import { CaretRightSolid } from 'flowbite-svelte-icons';
    import { StepIndicator } from 'flowbite-svelte';
    import { Select, Label } from 'flowbite-svelte';

    // Components
    import ButtonSm from '$lib/components/sloted/ButtonSm.svelte';

    //Exporting data
    export let data;

    // Selections
    let selectedOne = 0;
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
    let selectedTwo = 0;
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

    // Step state
    let pagename = page.url.pathname.substr(page.url.pathname.lastIndexOf('/')).replace('/', '');
    let currentStep = pagename;
    let steps = ['Step 1', 'Step 2', 'Step 3', 'Step 4'];   

    // Counter function
    function Counter(select) {

        let counter = data.counter;
        counter.set(select.reduce((items, current) => items + current, 0))
        return counter;

    }
   
   
    
    

</script>


<div class="my-4 p-medium">
    <StepIndicator {currentStep} {steps} color="yellow"  hideLabel size="h-4"/>
</div>
{#if data.stepOne }


    <div class="flex flex-col gap-medium">
        <h1 class="text-maximal text-center" >Step 1</h1>
        <h2 class="text-medium text-center" >Feelings and social life</h2>
    </div>

    <Label class="text-2">
    When stressed i'm able to, the value is
    <Select class="mt-2" items={countriesOne} bind:value={selectedOne} />
     </Label>
     <Label class="text-2 mb-minimal">
        When stressed i'm able to, the value is
        <Select class="mt-2" items={countriesTwo} bind:value={selectedTwo} />
    </Label>

    <button on:click={data.goTo("/explore/tests/mbti/2", data.stepTwo)} on:click={Counter([selectedOne, selectedTwo])} >
        <ButtonSm>Next step</ButtonSm>
    </button>
    
{:else}
    { page.error.message }
{/if}
