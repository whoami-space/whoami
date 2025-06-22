<script>
  import {  Toast } from 'flowbite-svelte';
  import {  CookieOutline } from 'flowbite-svelte-icons';
    import  { fly } from 'svelte/transition';
  const defaultstyle = "min-w-full flex bg-1 border rounded-xl "
    let { custom } = $props();
</script>

<Toast transition={fly} params={{duration:400,x:-100}} class={defaultstyle + custom } color="none" >
  <CookieOutline slot="icon" class="w-5 h-5 text-3"  />
  <p class="text-minimal" ><slot/></p>
</Toast>