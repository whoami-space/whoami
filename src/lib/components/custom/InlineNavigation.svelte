<script>
    import { ButtonGroup, Button } from 'flowbite-svelte';
    import { ChevronRightOutline } from 'flowbite-svelte-icons';
    import Anchor from './Anchor.svelte';
    import DividerY from '../stable/DividerY.svelte';

    let { d1 = "item", d1link, d2 = "item", d2link, d3 = "item", d3link } = $props();
    
  </script>
  
<div class="select-none rounded-xl flex justify-center items-center gap-minimal text-3 border border  p-minimal font-bold" >
   <div>
        <Anchor href={d1link}>{ d1 }</Anchor>
   </div>
   <DividerY/>
   <div>
       <Anchor href={d2link}>{ d2 }</Anchor>
   </div>
   <DividerY/>
   <div>
       <Anchor href={d3link}>{ d3 }</Anchor>
   </div>
</div>