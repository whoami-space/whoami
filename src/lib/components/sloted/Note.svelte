<script>
  import {  Toast } from 'flowbite-svelte';
  import { AnnotationOutline, FireOutline } from 'flowbite-svelte-icons';
</script>

<Toast color="none" class="min-w-full flex bg-1 border rounded-xl" >
  <AnnotationOutline slot="icon" class="w-5 h-5 text-3"  />
  <p class="text-minimal" ><slot/></p>
</Toast>