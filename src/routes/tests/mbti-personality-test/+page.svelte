

<script>
    import { goto } from "$app/navigation";
    import { page } from "$app/state";
    import Acordion from "$lib/components/themed/Acordion.svelte";
    import { redirect } from "@sveltejs/kit";
    import { writable } from "svelte/store";

    import { Button, List, Modal, P } from "flowbite-svelte";
    import ButtonSm from "$lib/components/custom/ButtonSm.svelte";
    import { CheckCircleSolid, BackwardStepSolid, ChevronDoubleRightOutline } from "flowbite-svelte-icons";
    import { Indicator } from "flowbite-svelte";
    import Content from "$lib/components/custom/Content.svelte";


    let open = $state(false);


    function goTo(link) {
        goto(link)
    }

    let next;

    let isselected;

    if ( isselected ) {
        next = "Continue test"
    } else {
        next = "Start test"
    }


    let steps = {
      list: [1,],
      current: 1,
    }

    
</script>






<Content custom="flex flex-col gap-medium justify-center items-center">
  <h1>MBTI Personality Test</h1>
  <div class=" flex flex-col items-center gap-minimal">
    <ol class="bg-2 p-[10px] rounded-full flex flex-wrap gap-[10px] items-center">
      {#each steps.list as step}
        <li class="p-[10px] rounded-full bg-3 text-2">
        </li>
      {/each}
      <li class="p-[10px] rounded-full bg-3 text-2 animate-pulse">
      </li>
    </ol>
    {#if steps.current == 1}
      <h2 class="text-center" >You already started the test, continue answering to check the result</h2>
    {/if}
    
    <Button class="text-2 bg-3 p-5 font-bold rounded-xl flex justify-center items-center gap-minimal cursor-pointer drop-shadow-[2px_2px_0_white] select-none" on:click={() => (open = true)}>Continue</Button>
  </div>

  <h2>A soon explanation...</h2>
  <p>Personality tests are widely used, with a wide variety of characteristics, and the MBTI test is not left out. The MBTI personality test is one of the most accepted today, and together with the BIG 5 personality test, it has achieved great relevance in the corporate and socioeconomic environment in general, facilitating not only the way people deal with each other but the recognition of personal limitations that individuals deal with on a daily basis.</p>
  <h2>How does it work?</h2>
  <p>The MBTI personality test works using a logical model based on the structure of the MBTI theory itself. This theory consists of 8 cognitive functions that direct the way we prefer to deal with ourselves and the world around us. The cognitive functions are NE (EXTROVERTED INTUITION), SE (EXTROVERTED SENSING), SI (INTROVERTED SENSING), NI (INTROVERTED INTUITION, TE (EXTROVERTED THINKING), TI (INTROVERTED THINKING), FE (EXTROVERTED FEELING) AND FI (INTROVERTED FEELING). Each type, of the 16, carries with it 4 cognitive functions that define its consciousness and decisions. For example, the ISTJ type uses SI, TE, FI, NE as its cognitive functions, so the most used is SI and the least used is NE, if we look only at the conscious spectrum. The functions are ordered from most to least used, if a function is being used more frequently in relation to the others we call it the DOMINANT FUNCTION. In general, there are 16 types and among these types there will always be common cognitive functions. Each type is unique, with a pair of dominant and auxiliary functions that guide your personality and your self-development in life. This test is like this logical system, based on the MBTI theory (Myers-Briggs Type Indicator) and a website-specific algorithm that provides a final result depending on the user's propositions.</p>

</Content>


<!--Modal 1-->
<Modal class="z-[9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999]" bind:open>
  <h3 class="text-medium text-1">Do you agree with this affirmation?</h3>
  <p class="text-minimal text-1 rounded-xl font-bold">"When i feel bad I often try to make thing that makes me feel better like i'm going out the pain i'm feeling"</p>
  <div class="flex gap-minimal">
    <button class="text-2 bg-3 p-5 font-bold rounded-xl flex justify-center items-center cursor-pointer drop-shadow-[2px_2px_0_white] gap-minimal select-none" > Agree<CheckCircleSolid/></button>
    <button class="text-2 bg-3 p-5 font-bold rounded-xl flex justify-center items-center cursor-pointer drop-shadow-[2px_2px_0_white] gap-minimal select-none" > Disagree<ChevronDoubleRightOutline/></button>
  </div>
</Modal>


