<script>
  import { Toast } from 'flowbite-svelte';
  import { FireSolid } from 'flowbite-svelte-icons';

  let { custom } = $props()

  let styles = "bg-2 text-3 rounded-xl " + custom
</script>

<Toast class={styles} >
  <FireSolid slot="icon" class="w-medium" />
  <p class="text-minimal" ><slot/></p>
</Toast>