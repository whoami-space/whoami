<script>
    import { Popover, Dropdown, DropdownItem } from 'flowbite-svelte';
    import { ChevronDownOutline, ChevronRightOutline, LinkOutline, DotsHorizontalOutline } from 'flowbite-svelte-icons';
    import Cookies from '../sloted/Cookies.svelte';

    let links = [
        {
            label: "Home",
            href: "/"
        },
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
  
<header class="flex top-0 w-full pt-medium px-medium justify-around items-center gap-minimal" >
    <div id="b1">
        <button class="w-medium h-medium rounded-full border-[0] flex justify-center items-center"><DotsHorizontalOutline class="text-3 w-medium h-medium drop-shadow-[1px_1px_0_white]" /></button>
    </div> 
</header>


  <div class="z-[10000]" >
    <Popover  color="primary" class="p-minimal text-minimal drop-shadow-[2px_2px_0_white]" triggeredBy="#b1">
        <ul class="flex justify-center items-center gap-minimal text-2 ">
            {#each links as link}
            <li>
                <a target="_self"  class="flex items-center"  href={link.href}>
                    <b>{link.label}</b>
                    <ChevronRightOutline/>
                </a>  
            </li>
            {/each}   
        </ul>
    </Popover>
</div>


