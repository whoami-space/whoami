<script>
    import { ButtonGroup, Button } from 'flowbite-svelte';
    import { ChevronRightOutline } from 'flowbite-svelte-icons';

    let { d1 = "item", d1link, d2 = "item", d2link, d3 = "item", d3link } = $props();
    
  </script>
  
  <ButtonGroup class="drop-shadow-[2px_2px_0_white]" >
    <Button class="bg-3 text-2 font-bold hover:bg-3 hover:text-2" >
        <a href={d1link} class="">{ d1 }</a>
        <ChevronRightOutline class="w-minimal h-minimal" />
    </Button>
    <Button  class="bg-3 text-2 font-bold hover:bg-3 hover:text-2" >
       <a href={d2link} class="">{ d2 }</a>
       <ChevronRightOutline class="w-minimal h-minimal" />
    </Button>
    <Button  class="bg-3 text-2 font-bold hover:bg-3 hover:text-2" >
       <a href={d3link} class="">{ d3 }</a>
       <ChevronRightOutline class="w-minimal h-minimal" />
    </Button>
  </ButtonGroup>