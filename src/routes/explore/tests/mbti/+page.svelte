

<script>
    import { goto } from "$app/navigation";
    import { page } from "$app/state";
    import Acordion from "$lib/components/themed/Acordion.svelte";
    import { redirect } from "@sveltejs/kit";
    import { writable } from "svelte/store";
    let { data } = $props()

    import { Button, Modal, P } from "flowbite-svelte";
    import ButtonSm from "$lib/components/sloted/ButtonSm.svelte";
    import { CheckCircleSolid, BackwardStepSolid, ChevronDoubleRightOutline } from "flowbite-svelte-icons";
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

    
</script>




<button>Next</button>

<Button onclick={() => (open = true)}>Default modal</Button>

<Modal bind:open autoclose outsideclose={false}>
  <h3 class="text-medium text-1">Step 1</h3>
  <p class="text-minimal text-1 rounded-xl font-bold">"When i feel bad I often try to make thing that makes me feel better like i'm going out the pain i'm feeling"</p>
  <div class="flex gap-minimal">
    <button class="text-2 bg-3 p-5 font-bold rounded-xl flex justify-center items-center cursor-pointer drop-shadow-[2px_2px_0_white] gap-minimal" >Agree<CheckCircleSolid/></button>
    <button class="text-2 bg-3 p-5 font-bold rounded-xl flex justify-center items-center cursor-pointer drop-shadow-[2px_2px_0_white] gap-minimal" >Disagree<ChevronDoubleRightOutline/></button>
  </div>
</Modal>

