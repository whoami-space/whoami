<script>
  import { Toast } from 'flowbite-svelte';
  import { FireSolid } from 'flowbite-svelte-icons';

  let { custom } = $props()

  let styles = "bg-transparent border text-3 rounded-xl " + custom
</script>

<Toast class={styles} >
  <div class="flex justify-center items-center gap-minimal " >
    <FireSolid class="w-medium" />
    <p class="text-minimal" ><slot/></p>
  </div>
</Toast>