<script>
    import { page } from '$app/state';
    import { Popover, Spinner } from 'flowbite-svelte';
    import { CaretDownSolid, HomeOutline, HomeSolid, LinkOutline } from 'flowbite-svelte-icons';
    import { Drawer, Button, CloseButton } from "flowbite-svelte";
    import { InfoCircleSolid, ArrowRightOutline } from "flowbite-svelte-icons";

  let hiddenBackdropTrue = $state(true);

    let links = [
        {
            label: "Explore",
            href: "/explore"
        },
        {
            label: "Posts",
            href: "/explore/posts"
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
  
  <Drawer transitionType="slide"
  params={{duration:200}} placement="bottom" class="flex flex-col gap-minimal justify-center items-center bg-3 text-2 w-[100vw] select-none py-medium rounded-t-xl drop-shadow-[0_-2px_0_white]" backdrop={true} bind:hidden={hiddenBackdropTrue}>
    <b >Navigate between pages</b>
    <ul class="flex justify-center items-center gap-minimal text-2">
        {#each links as link}
            <li>
                <a onclick={() => (hiddenBackdropTrue = true)} class="flex justify-center items-center"  href={link.href}>
                    <b class="text-minimal underline decoration-2" >{link.label}</b>
                </a>  
            </li>
        {/each}       
    </ul>
  </Drawer>

<header class="flex top-0 w-full pt-medium px-medium justify-between items-center gap-minimal pb-medium" >
    <div>
        <a href="/" class="w-medium h-medium border-[0] flex justify-center items-center bg-3 rounded-xl drop-shadow-[2px_2px_0_white] border">
            <HomeOutline class="text-2 w-5 h-5" />
        </a>
    </div>
    <div class="translate-y-[4rem]" >
        <div id="loader">
            <Spinner size="8" />
        </div>
    </div>
    <div>
        <button onclick={() => (hiddenBackdropTrue = false)} class="cursor-pointer w-medium h-medium border-[0] flex justify-center items-center bg-3 rounded-xl drop-shadow-[2px_2px_0_white]">
            <LinkOutline class="text-2 w-6 h-6" />
        </button>
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




  


