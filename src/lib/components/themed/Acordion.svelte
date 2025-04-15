<script>
    import { AccordionItem, Accordion } from 'flowbite-svelte';
    import { ChevronDoubleUpOutline, ChevronDoubleDownOutline } from 'flowbite-svelte-icons';
  </script>
  
  <Accordion class="m-medium flex flex-col gap-5" >
    <AccordionItem class="rounded-xl hover:bg-2  bg-2 text-minimal" >
      <span class="text-3 " slot="header">Header</span>
      <div slot="arrowup">
        <ChevronDoubleUpOutline class="w-medium text-3" />
      </div>
      <span slot="arrowdown">
        <ChevronDoubleDownOutline class="w-medium text-3" />
      </span>
      <p class="p-minimal text-minimal text-2">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illo ab necessitatibus sint explicabo ...</p>
    </AccordionItem>
  </Accordion>