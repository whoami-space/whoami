
<script>
    import { page } from '$app/state';
    import { writable } from 'svelte/store';

    let pathname = page.url.pathname;

    // Step deafult state and writable values
        let stepTwo = writable(false)
        let stepThree = writable(false)
        let stepFour = writable(false)
    

</script>

{#if pathname === "/explore/tests/mbti/1"}

1st 

<a on:click={ stepTwo.set(true) } href="/explore/tests/mbti/2" class=" m-medium text-3 bg-2 rounded-xl p-minimal font-bold">Go to next step</a>

{:else if stepTwo }

Step 2

<a on:click={ stepThree.set(true) } href="/explore/tests/mbti/3" class=" m-medium text-3 bg-2 rounded-xl p-minimal font-bold">Go to next step</a>


{:else if stepThree }

Step 3

<a on:click={ stepFour.set(true) } href="/explore/tests/mbti/4" class=" m-medium text-3 bg-2 rounded-xl p-minimal font-bold">Go to next step</a>

{:else if stepFour }

End step 4

{:else}
    { page.error.message }
{/if}
