<script>
    import { page } from '$app/state';
    import { ArrowDownOutline, ArrowUpOutline } from 'flowbite-svelte-icons';
    import { Drawer } from "flowbite-svelte";
    import Anchor from '../custom/Anchor.svelte';
    import Button from '../custom/Button.svelte';
    import { blur } from 'svelte/transition';



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

  
  
  <div class="border rounded-xl" >
    <Drawer transitionType="slide"
 placement="top" class="relative bg-1 flex flex-col gap-minimal justify-center items-center w-full select-none text-3 p-minimal rounded-xl" backdrop={false} bind:hidden={hiddenBackdropTrue}>
    <div class="rounded-xl flex flex-col justify-center items-center gap-minimal">
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
  </div>

<header class="flex w-full p-minimal justify-between items-center gap-minimal text-3 border rounded-xl mt-minimal" >
            <a href="/" class="flex gap-2 justify-center items-center p-minimal rounded-xl border">
                <b>whoami.space</b>
            </a>
            {#if hiddenBackdropTrue}
                <div >
                    <Button onClick={() => (hiddenBackdropTrue = false)} >
                            <ArrowDownOutline class="w-5 h-5" />
                    </Button>
                </div>
            {:else}
                <div>
                    <Button onClick={() => (hiddenBackdropTrue = true)} >
                        <ArrowUpOutline class="w-5 h-5" />
                    </Button>
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
{:else}
<style>
    #loaded {
        visibility: hidden;
    }       
</style>
{/if}




  


