<script>
    import Hero from "$lib/components/stable/Hero.svelte";
    import InlineNavigation from "$lib/components/custom/InlineNavigation.svelte";
    import Pic from "$lib/components/custom/Pic.svelte";
    import Metadata from "$lib/components/custom/Metadata.svelte";
    import Anchor from "$lib/components/custom/Anchor.svelte";
    import Content from "$lib/components/custom/Content.svelte";
    import { ManVrHeadset, ManVrHeadsetDark, WomanEarthHugging } from "flowbite-svelte-illustrations";
    
    
</script>

<svelte:head>
    <Metadata title="Whoami" description="The space to learn more about yourself" keywords="Whoami, Space, Learn, Self, Tipology, Mind, Psychology" />
</svelte:head>





<Content>
    <div class="flex flex-col justify-center items-center gap-medium" >
        <h1>WHOAMI.SPACE</h1>
        <h2>Get to know your <Anchor href="#self" >self</Anchor> and <Anchor href="/support" >help others</Anchor> to do the same</h2>
    </div>
    <Hero />
</Content>