<script>
    import { Textarea } from 'flowbite-svelte';
    import { AnnotationSolid, ChevronRightOutline } from 'flowbite-svelte-icons';
    import Anchor from '../custom/Anchor.svelte';
    import ButtonSm from '../custom/ButtonSm.svelte';

    let value = $state('');
   let mailto = "mailto:whoami.spacemail@gmail.com"
   
  </script>

  
  
  <Textarea 
  class=" bg-1 text-2 p-minimal"
  id="textarea-id" placeholder="Write your message here or click the button below to go directly..." rows="4" name="message" bind:value defaultValue="" />
 <div class="w-full flex flex-col justify-center items-center gap-[5px] m-minimal">
    <a target="_blank" href={`${mailto}?subject=${value}`} >
      <ButtonSm label="Send by email" ><AnnotationSolid class="w-minimal h-minimal" /></ButtonSm>
    </a>
 </div>