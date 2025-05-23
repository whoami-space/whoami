<script>
    import { page } from '$app/state';
    import { Spinner } from 'flowbite-svelte';
    import { HomeOutline, LinkOutline } from 'flowbite-svelte-icons';
    import { Drawer } from "flowbite-svelte";
    import Anchor from '../custom/Anchor.svelte';

    let hiddenBackdropTrue = $state(true);

    let links = [
        {
            label: "Explore Resources",
            href: "/explore"
        },
        {
            label: "About",
            href: "/about"
        },
        {
            label: "Overview",
            href: "/overview"
        },
    ]

  </script>

  
  
  <Drawer transitionType="slide"
  params={{duration:200}} placement="bottom" class="bg-1 flex flex-col gap-minimal justify-center items-center w-[100vw] select-none py-medium rounded-t-xl text-3" backdrop={true} bind:hidden={hiddenBackdropTrue}>
    <b >Navigate between pages</b>
    <ul class="flex justify-center items-center gap-minimal mt-minimal">
        {#each links as link}
            <li>
                <Anchor onClick={() => (hiddenBackdropTrue = true)} class="flex justify-center items-center" href={link.href}>
                    <b class="text-minimal border-b-[2px] border-dotted" >{link.label}</b>
                </Anchor>  
            </li>
        {/each}       
    </ul>
  </Drawer>

<header class="flex top-0 w-full pt-medium px-medium justify-between items-center gap-minimal text-3" >
    <div>
        <a href="/" class="w-medium h-medium border-[0] flex justify-center items-center border border-[2px] border-dotted rounded-xl border">
            <HomeOutline class="w-5 h-5" />
        </a>
    </div>
    <div class="flex flex-col justify-center items-center translate-y-[0.5rem] gap-2" >
            <div id="loader">
                <Spinner color="primary" size="6" />
            </div>
    </div>
    <div>
        <button onclick={() => (hiddenBackdropTrue = false)} class="cursor-pointer w-medium h-medium border-[0] flex justify-center items-center border border-[2px] border-dotted rounded-xl ">
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




  


