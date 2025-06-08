<script>
    import { Textarea } from 'flowbite-svelte';
    import { AnnotationSolid, ChevronRightOutline } from 'flowbite-svelte-icons';
    import Anchor from '../custom/Anchor.svelte';
    import Button from '../custom/Button.svelte';

    let value = $state('');
    let mailto = "mailto:whoami.spacemail@gmail.com"
   
  </script>

  
  
  <Textarea 
  class=" bg-1 text-2 p-minimal"
  id="textarea-id" placeholder="Write your message here or click the button below to go directly..." rows="4" name="message" bind:value defaultValue="" />
 <div class="w-full flex flex-col justify-center items-center gap-[5px] m-minimal">
    {#if value !== '' }
      <a target="_blank" href={`${mailto}?subject=${value}`} >
        <Button label="Send by email" ><AnnotationSolid class="w-minimal h-minimal" /></Button>
      </a>
    {:else}
      <a target="_blank" >
        <Button disabled={true} label="Send by email" ><AnnotationSolid class="w-minimal h-minimal" /></Button>
      </a>
    {/if}
 </div>