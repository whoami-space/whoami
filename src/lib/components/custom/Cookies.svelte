<script>
  import {  Toast } from 'flowbite-svelte';
  import {  CookieOutline } from 'flowbite-svelte-icons';
  const defaultstyle = "min-w-full flex bg-1 border rounded-xl "
    let { custom } = $props();
</script>

<Toast class={defaultstyle + custom } color="none" >
  <CookieOutline slot="icon" class="w-5 h-5 text-3"  />
  <p class="text-minimal" ><slot/></p>
</Toast>