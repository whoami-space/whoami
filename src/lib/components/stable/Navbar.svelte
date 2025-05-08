<script>
    import { Popover, Dropdown, DropdownItem } from 'flowbite-svelte';
    import { ChevronDownOutline, ChevronRightOutline, HomeSolid, DotsVerticalOutline } from 'flowbite-svelte-icons';
    import Cookies from '../sloted/Cookies.svelte';

    let links = [
        {
            label: "Explore",
            href: "/explore"
        },
        {
            label: "Posts",
            href: "/posts"
        },
        {
            label: "About",
            href: "/about"
        },
    ]

  </script>
  
<header class="flex fixed top-0 w-full pt-medium px-medium justify-start items-center gap-minimal z-[99999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999] bg-gradient-to-b from-1 to-transparent" >
    <div id="b1">
        <button class="w-medium  h-medium translate-x-[-18px] border-[0] flex justify-center items-center "><DotsVerticalOutline class="text-3 w-medium h-medium drop-shadow-[1px_1px_0_white]" /></button>
    </div> 
    <div class="drop-shadow-[0_0_10px_black]" >
        <Popover trigger="hover" placement="right" color="primary" class="text-minimal drop-shadow-[0_0_10px_black] drop-shadow-[2px_2px_0_white]" triggeredBy="#b1">
            <ul class="flex justify-center items-center gap-minimal text-2">
                <li>
                    <a class="flex justify-center items-center"  href="/">
                        <b class="translate-y-[-1px]" ><HomeSolid/></b>
                        <ChevronRightOutline class="w-minimal h-minimal" />
                    </a>  
                </li>
                {#each links as link}
                <li>
                    <a class="flex justify-center items-center"  href={link.href}>
                        <b class="translate-y-[-1px]" >{link.label}</b>
                        <ChevronRightOutline class="w-minimal h-minimal" />
                    </a>  
                </li>
                {/each}   
            </ul>
        </Popover>
    </div>
</header>


  


