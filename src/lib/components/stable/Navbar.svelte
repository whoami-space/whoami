<script>
    import { Popover, Dropdown, DropdownItem } from 'flowbite-svelte';
    import { ChevronDownOutline, ChevronRightOutline, GridPlusSolid, PaperPlaneOutline, CogOutline } from 'flowbite-svelte-icons';
    import Cookies from '../sloted/Cookies.svelte';
    

  </script>
  
  <header class="flex w-full pt-medium px-medium justify-around items-center gap-minimal" >
    <a href="/explore" class="font-bold underline decoration-2 max-w-medium">Explore</a>
    <div id="b1">
        <button class="w-medium h-medium rounded-full border-[0] flex justify-center items-center"><GridPlusSolid class="text-3 w-10 h-10" /></button>
      </div> 
      
  </header>

<div class="z-[10000]" >
    <Popover class="max-w-64 text-minimal" triggeredBy="#b1">
        <ul class="flex flex-col justify-center text-3">
            <li>
                <a  class="flex items-center p-[5px]"  href="/">
                    <b>Home Page</b>
                    <ChevronRightOutline/>
                </a>    
            </li>
            <li>
                <a  class="flex items-center p-[5px]"  href="/about">
                    <b>About</b>
                    <ChevronRightOutline/>
                </a>    
            </li>
            <li>
                <a  class="flex items-center p-[5px]"  href="/component-testing">
                    <b>Components</b>
                    <ChevronRightOutline/>
                </a>    
            </li>
            
        </ul>
    </Popover>
</div>

