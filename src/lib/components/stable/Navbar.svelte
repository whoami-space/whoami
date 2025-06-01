<script>
    import { page } from '$app/state';
    import { Spinner } from 'flowbite-svelte';
    import { AlignLeftOutline, AlignRightOutline, ArrowDownOutline, ArrowUpOutline, CheckOutline, ChevronRightOutline, ClockArrowOutline, HomeOutline, LinkOutline, ListOutline, PlusOutline, RedoOutline } from 'flowbite-svelte-icons';
    import { Drawer } from "flowbite-svelte";
    import Anchor from '../custom/Anchor.svelte';
    import ButtonSm from '../custom/ButtonSm.svelte';
    import Info from '../custom/Info.svelte';
    import DividerX from './DividerX.svelte';



    let hiddenBackdropTrue = $state(true);


    let links = [
        {
            label: "Overview",
            href: "/overview"
        },
        {
            label: "Posts",
            href: "/posts"
        },
        {
            label: "Tests",
            href: "/tests"
        },
        {
            label: "About",
            href: "/about"
        },
    ]

  </script>

  
  
  <Drawer transitionType="slide"
 placement="top" class="relative bg-1 flex flex-col gap-minimal justify-center items-center w-[100vw] select-none text-3 pt-medium" backdrop={false} bind:hidden={hiddenBackdropTrue}>
    <div class="rounded-xl flex flex-col justify-center items-center gap-minimal">
            <h3>Navigate</h3>
            <DividerX />
            <ul class="w-full flex flex-wrap rounded-xl justify-center items-center gap-minimal">
                {#if page.url.pathname === "/"}
                    <li class="font-bold" >
                        <Anchor onClick={() => (hiddenBackdropTrue = true)} href="/">
                           Home
                        </Anchor>
                    </li>
                {:else}
                <li >
                    <Anchor onClick={() => (hiddenBackdropTrue = true)} href="/">
                       Home
                    </Anchor>
                </li>
                {/if}
            {#each links as link}
                {#if page.url.pathname === link.href}
                    <li class="font-bold" >
                        <Anchor onClick={() => (hiddenBackdropTrue = true)} href={link.href}>
                           {link.label} 
                        </Anchor>
                    </li>
                {:else} 
                <li>
                    <Anchor onClick={() => (hiddenBackdropTrue = true)} href={link.href}>
                        {link.label} 
                     </Anchor>
                </li>
                {/if}
            {/each}
        </ul>
    </div>
</Drawer>

<header class="flex top-0 w-full pt-medium px-medium justify-between items-start gap-minimal text-3" >
            <div >
                <a class="notranslate" translate="no" href="/">
                    <ButtonSm>
                        <HomeOutline class="w-5 h-5" />
                    </ButtonSm>
                </a> 
            </div>
            <div class="relative flex justify-center items-center">
                <div class="absolute top-[20px] flex justify-center gap-[2px] items-center" id="loader">
                    <Spinner color="primary" size="8" />
                </div>
                <div class="absolute top-[25px] flex justify-center items-center gap-minimal text-3" id="loaded">
                    <CheckOutline/>
                </div>
            </div>
            {#if hiddenBackdropTrue}
                <div >
                    <ButtonSm onClick={() => (hiddenBackdropTrue = false)} >
                            <ArrowDownOutline class="w-5 h-5" />
                    </ButtonSm>
                </div>
            {:else}
                <div>
                    <ButtonSm onClick={() => (hiddenBackdropTrue = true)} >
                        <ArrowUpOutline class="w-5 h-5" />
                    </ButtonSm>
                </div>
            {/if}
</header>


{#if page.status === 200}
    <style>

        #loader {
            animation: fadeout 3.5s ease-in forwards;
            animation-iteration-count: 1;
        }
            
        @keyframes fadeout {
            0% {
                    opacity: 1;
            }
            50% {
                    opacity: 1;
            }
            80% {
                    opacity: 0;
                    visibility: hidden;
            }
            100% {
                    opacity: 0;
                    visibility: hidden;
            }
        }

        #loaded {
            animation: loaded 4s ease-in-out forwards;
            animation-iteration-count: 1;
        }

        @keyframes loaded {
            0% {
                    opacity: 0;
                    visibility: hidden;
            }
            60% {
                    opacity: 0;
                    visibility: hidden;
            }
            70% {
                    opacity: 0.5;
                    visibility: visible;
            }
            100% {
                    opacity: 0;
                    visibility: hidden;
            }
        }


            
    </style>
{/if}




  


