<script>
  import {  Toast } from 'flowbite-svelte';
  import { ArrowUpRightFromSquareOutline, HourglassOutline } from 'flowbite-svelte-icons';
    import { fly } from 'svelte/transition';
    import Anchor from './Anchor.svelte';
  const defaultstyle = "p-minimal px-medium min-w-full flex gap-minimal items-center justify-between bg-1 border rounded-xl "
    let { custom, date } = $props();
</script>

<div class={defaultstyle + custom } color="none" >
  <div class="flex gap-minimal items-center" >
    <HourglassOutline class="w-5 h-5 text-3"  />
    <div>
      <b class="text-3" >Log - {date}</b>
      <p class="text-minimal" ><slot/></p>
    </div>
  </div>
  <Anchor href="/terms/#source">
    <ArrowUpRightFromSquareOutline/>
  </Anchor>

</div>