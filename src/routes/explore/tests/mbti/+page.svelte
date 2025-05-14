

<script>
    import { goto } from "$app/navigation";
    import { page } from "$app/state";
    import Acordion from "$lib/components/themed/Acordion.svelte";
    import { redirect } from "@sveltejs/kit";
    import { writable } from "svelte/store";
    let { data } = $props()

    import { Button, List, Modal, P } from "flowbite-svelte";
    import ButtonSm from "$lib/components/sloted/ButtonSm.svelte";
    import { CheckCircleSolid, BackwardStepSolid, ChevronDoubleRightOutline } from "flowbite-svelte-icons";
    import { Indicator } from "flowbite-svelte";
    import Main from "$lib/components/custom/Main.svelte";


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






<Main>
  <div class="flex flex-col items-center gap-minimal">
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
  <Modal class="z-[9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999]" bind:open>
    <h3 class="text-medium text-1">Do you agree with this affirmation?</h3>
    <p class="text-minimal text-1 rounded-xl font-bold">"When i feel bad I often try to make thing that makes me feel better like i'm going out the pain i'm feeling"</p>
    <div class="flex gap-minimal">
      <button class="text-2 bg-3 p-5 font-bold rounded-xl flex justify-center items-center cursor-pointer drop-shadow-[2px_2px_0_white] gap-minimal select-none" > Agree<CheckCircleSolid/></button>
      <button class="text-2 bg-3 p-5 font-bold rounded-xl flex justify-center items-center cursor-pointer drop-shadow-[2px_2px_0_white] gap-minimal select-none" > Disagree<ChevronDoubleRightOutline/></button>
    </div>
  </Modal>
  <h2 class="text-maximal text-center my-medium" >Mbti personality test? Here's a soon explanation...</h2>
</Main>


