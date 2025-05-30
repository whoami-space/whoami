<script>
    import { page } from '$app/state';
    import { Spinner } from 'flowbite-svelte';
    import { AlignLeftOutline, AlignRightOutline, ArrowDownOutline, ArrowUpOutline, ChevronRightOutline, ClockArrowOutline, HomeOutline, LinkOutline, ListOutline, PlusOutline, RedoOutline } from 'flowbite-svelte-icons';
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
    <div class="p-medium border rounded-xl flex flex-col justify-center items-center gap-minimal">
            <h3>Navigate</h3>
            <DividerX />
            <ul class="w-full flex flex-wrap rounded-xl justify-center items-center gap-minimal">
            {#each links as link}
                {#if page.url.pathname === link.href}
                    <li class="line-through" >
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

<header class="flex top-0 w-full pt-medium px-medium justify-between items-center gap-minimal text-3" >
        <div id="loader">
            <Spinner color="primary" size="6" />
        </div>
       <div>
        <div class="flex gap-minimal justify-center items-center" >
            <div >
                <a class="notranslate" translate="no" href="/">
                    <ButtonSm>
                        <HomeOutline class="w-5 h-5" />
                    </ButtonSm>
                </a> 
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




  


