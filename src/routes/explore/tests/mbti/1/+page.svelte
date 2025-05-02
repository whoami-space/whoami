
<script lang="js" >
    
    // Sveltekit
    import { page } from '$app/state';
    import { readable, writable } from 'svelte/store';
    import { goto } from '$app/navigation';

    // Flowbite
    import { CaretRightSolid } from 'flowbite-svelte-icons';
    import { StepIndicator } from 'flowbite-svelte';
    import { Select, Label } from 'flowbite-svelte';

    // Components
    import ButtonSm from '$lib/components/sloted/ButtonSm.svelte';
    import Toast from '$lib/components/sloted/Toast.svelte';
    import { applyAction } from '$app/forms';

    //Exporting data
    export let data;

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
    // Next function
    function next(param) {

         let selected = param.map(a => ( a ))

         let condition = selected.every(a => a.selected != 0)

         if ( condition ) {
            return true
         } else {
            return false
         }

    }
    // Other
    let toast = () => {
        let toast = document.getElementById("toast")
        toast.classList.remove("hidden")
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
    {#each data.selectsOne.map(a => ( a )) as i}
        <Label class="py-minimal text-2 felx flex-col gap-minimal">
            <p class="font-bold" >{i.question}</p>
            <Select class="mt-2 text-2 bg-1 font-bold" placeholder={i.question} items={i.options} bind:value={i.selected} />
        </Label>
    {/each}
    {#if next(data.selectsOne) }
        <button class="mt-minimal" on:click={data.goTo("/explore/tests/mbti/2", data.stepTwo)} on:click={Counter(
            [
                data.selectsOne[0].selected,
                data.selectsOne[1].selected
            ]
        )} >
            <ButtonSm>Next step</ButtonSm>
        </button>
    {:else} 
        <button class="mt-minimal" on:click={toast()} >
            <ButtonSm>Next step</ButtonSm>
        </button>
        <div class="hidden" id="toast">
            <Toast custom="toast toast my-minimal" >Please select all options</Toast>
        </div>
    {/if}
{:else}
    { page.error.message }
{/if}
