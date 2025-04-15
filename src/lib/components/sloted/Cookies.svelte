<script>
    import { Toast } from 'flowbite-svelte';
    import { CookieSolid } from 'flowbite-svelte-icons';
  </script>
  
  <Toast class="bg-2 text-3 rounded-xl" >
    <CookieSolid slot="icon" class="w-medium"  />
    <p class="text-minimal" ><slot/></p>
  </Toast>