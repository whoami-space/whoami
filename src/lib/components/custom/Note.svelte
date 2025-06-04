<script>
  import {  Toast } from 'flowbite-svelte';
  import { AnnotationOutline, FireOutline } from 'flowbite-svelte-icons';
    import { blur, slide } from 'svelte/transition';
  const defaultstyle = "min-w-full flex bg-1 border rounded-xl "
    let { custom } = $props();
</script>

<Toast transition={blur} class={defaultstyle + custom } color="none" >
  <AnnotationOutline slot="icon" class="w-5 h-5 text-3"  />
  <p class="text-minimal" ><slot/></p>
</Toast>