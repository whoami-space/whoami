<script>
    import { ButtonGroup, Button } from 'flowbite-svelte';
    import { ChevronRightOutline } from 'flowbite-svelte-icons';

    let { d1 = "item", d1link, d2 = "item", d2link, d3 = "item", d3link } = $props();
    
  </script>
  
  <ButtonGroup class="drop-shadow-[2px_2px_0_white] underline decoration-2" >
    <Button class="bg-3 text-2 font-bold hover:bg-3 hover:text-2" >
        <a href={d1link}>{ d1 }</a>
    </Button>
    <Button  class="bg-3 text-2 font-bold hover:bg-3 hover:text-2" >
       <a href={d2link}>{ d2 }</a>
    </Button>
    <Button  class="bg-3 text-2 font-bold hover:bg-3 hover:text-2" >
       <a href={d3link}>{ d3 }</a>
    </Button>
  </ButtonGroup>