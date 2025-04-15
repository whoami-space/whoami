<script>
    import { ButtonGroup, Button } from 'flowbite-svelte';
    import { UserCircleSolid, AdjustmentsVerticalOutline, DownloadSolid } from 'flowbite-svelte-icons';

    let { d1 = "item", d1link, d2 = "item", d2link, d3 = "item", d3link } = $props();
    
  </script>
  
  <ButtonGroup>
    <Button class="bg-2 text-3" >
        <a href={d1link} class="">{ d1 }</a>
    </Button>
    <Button  class="bg-2 text-3" >
       <a href={d2link} class="">{ d2 }</a>
    </Button>
    <Button  class="bg-2 text-3" >
       <a href={d3link} class="">{ d3 }</a>
    </Button>
  </ButtonGroup>