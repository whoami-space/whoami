<script>
    import { page } from '$app/state';
    import { Spinner } from 'flowbite-svelte';
    import { AlignLeftOutline, AlignRightOutline, ArrowDownOutline, ArrowUpOutline, ChevronRightOutline, ClockArrowOutline, HomeOutline, LinkOutline, ListOutline, PlusOutline, RedoOutline } from 'flowbite-svelte-icons';
    import { Drawer } from "flowbite-svelte";
    import Anchor from '../custom/Anchor.svelte';
    import ButtonSm from '../custom/ButtonSm.svelte';
    import Info from '../custom/Info.svelte';



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
  params={{duration:3000}} placement="bottom" class="relative bg-1 flex flex-col gap-minimal justify-center items-center w-[100vw] select-none text-3 pt-medium" backdrop={false} bind:hidden={hiddenBackdropTrue}>
    <div class="flex gap-minimal justify-center items-center">
        <b class="text-medium" >Navigate</b>
        <Info placement="bottom" tooltip="Access main pages" />
    </div>
    <ul class="w-full flex flex-wrap rounded-xl justify-center items-center gap-minimal">
        {#each links as link}
            {#if page.url.pathname === link.href}
                <li class="border-b pb-minimal scale-[.8]" >
                    <a href={link.href}>
                        <ButtonSm label={link.label} onClick={() => (hiddenBackdropTrue = true)}>
                            <ChevronRightOutline/>
                        </ButtonSm>  
                    </a>
                </li>
            {:else} 
            <li>
                <a href={link.href}>
                    <ButtonSm label={link.label} onClick={() => (hiddenBackdropTrue = true)}>
                        <ChevronRightOutline/>
                    </ButtonSm>  
                </a>
            </li>
            {/if}
        {/each}
    </ul>
    <div>
        <ButtonSm onClick={() => (hiddenBackdropTrue = true)} >
            <ArrowDownOutline class="w-5 h-5" />
        </ButtonSm>
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
            <div >
                <ButtonSm onClick={() => (hiddenBackdropTrue = false)} >
                        <ArrowUpOutline class="w-5 h-5" />
                </ButtonSm>
            </div>
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




  


