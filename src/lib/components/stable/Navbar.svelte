<script>
    import { page } from '$app/state';
    import { Popover, Dropdown, DropdownItem, Spinner } from 'flowbite-svelte';
    import { CaretDownSolid, HomeSolid, LinkOutline } from 'flowbite-svelte-icons';

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
            href: "/explore/tests"
        },
        {
            label: "About",
            href: "/about"
        },
    ]

  </script>
  
<header class="flex top-0 w-full pt-maximal px-maximal justify-between items-center gap-minimal" >
    <div id="popover">
        <button class="w-medium h-medium border-[0] flex justify-center items-center bg-3 rounded-xl drop-shadow-[1px_1px_0_white]">
            <LinkOutline class="text-2 w-10 h-10" />
        </button>
    </div>
    <div class="drop-shadow-[0_50px_100px_black]" >
        <Popover arrow={false} trigger="hover" placement="right" color="primary" class="text-minimal drop-shadow-[2px_2px_0_white]" triggeredBy="#popover">
            <ul class="flex justify-start items-center gap-minimal text-2">
                {#each links as link}
                    <li>
                        <a class="flex justify-center items-center"  href={link.href}>
                            <b class="text-minimal underline decoration-2" >{link.label}</b>
                        </a>  
                    </li>
                {/each}       
            </ul>
        </Popover>
    </div>
    <div class="translate-y-[10px]" >
        <div id="loader">
            <Spinner size="10" />
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




  


