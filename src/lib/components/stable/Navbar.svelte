<script>
    import { page } from '$app/state';
    import { Spinner } from 'flowbite-svelte';
    import { ChevronRightOutline, HomeOutline, LinkOutline } from 'flowbite-svelte-icons';
    import { Drawer } from "flowbite-svelte";
    import Anchor from '../custom/Anchor.svelte';
    import ButtonSm from '../custom/ButtonSm.svelte';
    import Info from '../custom/Info.svelte';

    let hiddenBackdropTrue = $state(true);

    let links = [
        {
            label: "Explore Resources",
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
  params={{duration:200}} placement="bottom" class="bg-1 flex flex-col gap-minimal justify-center items-center w-[100vw] select-none rounded-t-xl text-3" backdrop={true} bind:hidden={hiddenBackdropTrue}>
    <div class="flex gap-minimal justify-center items-center">
        <h3 class="text-medium" >Overview</h3>
        <Info placement="bottom" tooltip="Access main pages of website" />
    </div>
    <ul class="flex flex-wrap border p-medium rounded-xl justify-center items-center gap-minimal mt-minimal">
                {#each links as link}
                <li>
                    <a href={link.href}>
                        <ButtonSm label={link.label} onClick={() => (hiddenBackdropTrue = true)}>
                            <ChevronRightOutline/>
                        </ButtonSm>  
                    </a>
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
        <div>
            <div id="loader">
                <Spinner color="primary" size="6" />
            </div>
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




  


