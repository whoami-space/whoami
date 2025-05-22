<script>
    import { ButtonGroup, Button } from 'flowbite-svelte';
    import { ChevronRightOutline } from 'flowbite-svelte-icons';

    let { d1 = "item", d1link, d2 = "item", d2link, d3 = "item", d3link } = $props();
    
  </script>
  
<div class="select-none rounded-xl flex justify-center itesm-center gap-minimal text-3 border border-[2px] border-dotted  p-minimal font-bold" >
   <div class="border-b-[2px] border-dotted" >
        <a href={d1link}>{ d1 }</a>
   </div>
   <div class="border-b-[2px] border-dotted" >
       <a href={d2link}>{ d2 }</a>
   </div>
   <div class="border-b-[2px] border-dotted" >
       <a href={d3link}>{ d3 }</a>
   </div>
</div>