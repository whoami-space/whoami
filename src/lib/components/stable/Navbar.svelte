<script>
    import { page } from '$app/state';
    import { ArrowDownOutline, ArrowUpOutline, SearchOutline } from 'flowbite-svelte-icons';
    import { Drawer, Input } from "flowbite-svelte";
    import Anchor from '../custom/Anchor.svelte';
    import Button from '../custom/Button.svelte';
    import { blur } from 'svelte/transition';
    import '$lib/components/styles/transitions.css'



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

  <div class="absolute top-0 left-0 border show-left-load-maximal"></div>

  <div class="border rounded-xl mt-[2px]" >
    <Drawer transitionType="slide"
 placement="top" class="relative bg-1 flex flex-col gap-minimal justify-center items-center w-full select-none text-3 p-minimal rounded-xl" backdrop={false} bind:hidden={hiddenBackdropTrue}>
    <div class="rounded-xl flex flex-col justify-center items-center gap-minimal">
         <div class="show-medium">
            <ul class="w-full flex flex-wrap rounded-xl justify-center items-center gap-minimal">
                {#if page.url.pathname === "/"}
                    <li translate="no" class="font-bold no-translate" >
                        <Anchor onClick={() => (hiddenBackdropTrue = true)} href="/">
                           Home
                        </Anchor>
                    </li>
                {:else}
                <li translate="no" class="no-translate" >
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
    </div>
</Drawer>
  </div>

<header class="flex w-full p-minimal justify-between items-center gap-minimal text-3 border rounded-xl mt-minimal" >
            <a href="/" class="show-maximal flex gap-2 justify-center items-center p-minimal rounded-xl border">
                <b>whoami.space</b>
            </a>
            {#if hiddenBackdropTrue}
                <div class="show-maximal" >
                    <Button onClick={() => (hiddenBackdropTrue = false)} >
                            <ArrowDownOutline class="w-5 h-5" />
                    </Button>
                </div>
            {:else}
                <div class="show-maximal" >
                    <Button onClick={() => (hiddenBackdropTrue = true)} >
                        <ArrowUpOutline class="w-5 h-5" />
                    </Button>
                </div>
            {/if}
</header>






  


