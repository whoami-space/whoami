<script>
  import { Toast } from 'flowbite-svelte';
  import { FireSolid } from 'flowbite-svelte-icons';
</script>

<Toast class="bg-2 text-3 rounded-xl" >
  <FireSolid slot="icon" class="w-medium" />
  <p class="text-minimal" ><slot/></p>
</Toast>