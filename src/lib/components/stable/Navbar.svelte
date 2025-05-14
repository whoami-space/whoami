<script>
    import { page } from '$app/state';
    import { Popover, Dropdown, DropdownItem, Spinner } from 'flowbite-svelte';
    import { CaretDownSolid, HomeSolid } from 'flowbite-svelte-icons';

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
            label: "Tests",
            href: "/explore"
        },
        {
            label: "About",
            href: "/about"
        },
    ]

  </script>
  
<header class="flex fixed top-0 w-full pt-medium px-medium justify-between items-center gap-minimal bg-gradient-to-b from-1 to-transparent z-[99999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999] " >
    <ul class="flex justify-center items-center" > 
        <li>
            <a class="border-[0] flex justify-center items-center "  href="/">
                <HomeSolid class="text-3 h-[2.1rem] w-[2.1rem] drop-shadow-[1px_1px_0_white]" />
            </a>  
        </li>
        <li id="popover">
            <button class="w-medium  h-medium border-[0] flex justify-center items-center "><CaretDownSolid class="text-3 w-medium h-medium drop-shadow-[1px_1px_0_white]" /></button>
        </li>
    </ul>
    <div class="px-medium drop-shadow-[0_50px_100px_black]" >
        <Popover arrow={false} trigger="hover" placement="bottom" color="primary" class="text-minimal drop-shadow-[2px_2px_0_white] px-minimal py-minimal" triggeredBy="#popover">
            <ul class="flex justify-start items-center flex-wrap max-w-medium gap-minimal text-2">
                {#each links as link}
                    <li>
                        <a class="flex justify-center items-center"  href={link.href}>
                            <b class="text-[0.8rem] underline decoration-2" >{link.label}</b>
                        </a>  
                    </li>
                {/each}       
            </ul>
        </Popover>
    </div>
    <div>
        <div id="loader">
            <Spinner/>
        </div>
    </div> 
</header>


{#if page.status === 200}
<style>

    #loader {
        animation: fadeout 2s ease-out forwards;
        animation-iteration-count: 1;
    }
        
    @keyframes fadeout {
        0% {
                opacity: 1;
        }
        90% {
                opacity: 1;
        }
        100% {
                opacity: 0;
                visibility: hidden;
        }
    }
        
    </style>

{/if}




  


