<script>
    import { Textarea } from 'flowbite-svelte';
    import { AnnotationSolid, ChevronRightOutline, MailBoxSolid } from 'flowbite-svelte-icons';

    let value = $state('');
   let mailto = "mailto:whoami.spacemail@gmail.com"
   
  </script>

  
  
  <Textarea 
  class=" bg-1 text-2 p-minimal"
  id="textarea-id" placeholder="Write your message here or click the button below to go directly..." rows="4" name="message" bind:value defaultValue="" />
 <div class="w-full flex justify-center items-center">
    <button class="mt-minimal bg-2 text-3 font-bold rounded-xl mx-auto text-minimal cursor-pointer"><a target="_blank" href={`${mailto}?subject=${value}`} class="redirect p-minimal flex  justify-center items-center  gap-2">Send by email<AnnotationSolid class="w-minimal h-minimal" /></a></button>
 </div>