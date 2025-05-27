<script>
    import { page } from '$app/state';
    import { Spinner } from 'flowbite-svelte';
    import { ChevronRightOutline, ClockArrowOutline, HomeOutline, LinkOutline, RedoOutline } from 'flowbite-svelte-icons';
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
            label: "Quizzes",
            href: "/quizzes"
        },
        {
            label: "About",
            href: "/about"
        },
    ]

  </script>

  
  
  <Drawer transitionType="slide"
  params={{duration:200}} placement="bottom" class="bg-1 flex flex-col gap-medium justify-center items-center w-[100vw] select-none rounded-t-xl text-3 p-medium" backdrop={true} bind:hidden={hiddenBackdropTrue}>
    <div class="flex gap-minimal justify-center items-center">
        <b class="text-medium text-2 text-3" >Navigate</b>
        <Info placement="bottom" tooltip="Access main pages" />
    </div>
    <ul class="flex flex-wrap rounded-xl justify-center items-center gap-minimal mt-minimal">
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
  </Drawer>

<header class="flex top-0 w-full pt-medium px-medium justify-between items-center gap-minimal text-3" >
    <div id="loader">
        <Spinner color="primary" size="6" />
    </div>
    <div class="flex justify-center items-center gap-minimal" >
        <div>
            <a class="notranslate" translate="no" href="/">
                <ButtonSm label="Home" >
                    <HomeOutline class="w-5 h-5" />
                </ButtonSm>
            </a> 
        </div>
        <div >
            <ButtonSm label="Navigate" onClick={() => (hiddenBackdropTrue = false)}>
                    <LinkOutline class="w-5 h-5" />
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




  


