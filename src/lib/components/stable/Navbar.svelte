<script>
    import { page } from '$app/state';
    import { Popover, Spinner } from 'flowbite-svelte';
    import { CaretDownSolid, HomeOutline, HomeSolid, LinkOutline } from 'flowbite-svelte-icons';
    import { Drawer, Button, CloseButton } from "flowbite-svelte";
    import { InfoCircleSolid, ArrowRightOutline } from "flowbite-svelte-icons";

    let hiddenBackdropTrue = $state(true);

    let links = [
        {
            label: "Explore Resources",
            href: "/explore"
        },
        {
            label: "Know more",
            href: "/about"
        },
        {
            label: "Big picture",
            href: "/about"
        },
    ]

  </script>
  
  <Drawer transitionType="slide"
  params={{duration:200}} placement="bottom" class="flex flex-col gap-minimal justify-center items-center w-[100vw] select-none py-medium rounded-t-xl text-3" backdrop={true} bind:hidden={hiddenBackdropTrue}>
    <b >Navigate between pages</b>
    <ul class="flex justify-center items-center gap-minimal">
        {#each links as link}
            <li>
                <a onclick={() => (hiddenBackdropTrue = true)} class="flex justify-center items-center rounded-xl p-minimal border-[2px] border-dotted"  href={link.href}>
                    <b class="text-minimal border-b-[2px] border-dotted" >{link.label}</b>
                </a>  
            </li>
        {/each}       
    </ul>
  </Drawer>

<header class="flex top-0 w-full pt-medium px-medium justify-between items-center gap-minimal text-3" >
    <div>
        <a href="/" class="w-medium h-medium border-[0] flex justify-center items-center border border-[2px] border-dotted rounded-full border">
            <HomeOutline class="w-5 h-5" />
        </a>
    </div>
    <div class="flex flex-col justify-center items-center translate-y-[0.5rem] gap-2" >
        <div class="relative">
            <a href="/">
                <img src="https://ucarecdn.com/77da2dbc-5bd4-4c5a-a90a-429185578623/subicon.jpg" alt="" class="p-[5px] shadow-xl w-medium h-medium rounded-full">
            </a>
            <div id="loader">
                <Spinner color="primary" class="absolute top-[4px] left-[4px]" size="10" />
            </div>
        </div>
        <p class="font-bold text-2" >whoami.space</p>
        
    </div>
    <div>
        <button onclick={() => (hiddenBackdropTrue = false)} class="cursor-pointer w-medium h-medium border-[0] flex justify-center items-center border border-[2px] border-dotted rounded-full drop-shadow-[2px_2px_0_white]">
            <LinkOutline class="w-6 h-6" />
        </button>
    </div>
</header>


{#if page.status === 200}
    <style>

        #loader {
            animation: fadeout 4s ease-out forwards;
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




  


