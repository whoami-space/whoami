<script>
    import { page } from '$app/state';
    import { Popover, Spinner } from 'flowbite-svelte';
    import { CaretDownSolid, HomeOutline, HomeSolid, LinkOutline } from 'flowbite-svelte-icons';

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
  
<header class="flex top-0 w-full pt-medium px-medium justify-between items-center gap-minimal pb-medium" >
    <div>
        <a href="/" class="w-medium h-medium border-[0] flex justify-center items-center bg-3 rounded-xl drop-shadow-[1px_1px_0_white]">
            <HomeOutline class="text-2 w-5 h-5" />
        </a>
    </div>
    <div class="translate-y-[4rem]" >
        <div id="loader">
            <Spinner size="8" />
        </div>
    </div>
    <div id="popover">
        <button class="cursor-pointer w-medium h-medium border-[0] flex justify-center items-center bg-3 rounded-xl drop-shadow-[1px_1px_0_white]">
            <LinkOutline class="text-2 w-6 h-6" />
        </button>
        <div class="sm:hidden top-0 drop-shadow-[0_50px_100px_black]" >
            <Popover arrow={false} trigger="hover" placement="left" color="primary" class="text-minimal drop-shadow-[2px_2px_0_white]" triggeredBy="#popover">
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




  


