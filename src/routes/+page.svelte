<script>
    import Hero from "$lib/components/stable/Hero.svelte";
    import InlineNavigation from "$lib/components/custom/InlineNavigation.svelte";
    import Pic from "$lib/components/custom/Pic.svelte";
    import Metadata from "$lib/components/custom/Metadata.svelte";
    import Anchor from "$lib/components/custom/Anchor.svelte";
    import FadeIn from "$lib/components/transitions/FadeIn.svelte";
    import Content from "$lib/components/custom/Content.svelte";
    import { ManVrHeadset, ManVrHeadsetDark, WomanEarthHugging } from "flowbite-svelte-illustrations";
    
    
</script>

<Metadata title="Whoami" description="The space to learn more about yourself" keywords="Whoami, Space, Learn, Self, Tipology, Mind, Psychology" />






<Content>
    <div class="flex flex-col justify-center items-center gap-medium" >
        <h1>WHOAMI.SPACE</h1>
        <div>
            <WomanEarthHugging color1="#393D3F" color2="#6200B3" color3="#6200B3" color4="#6200B3" color5="#E9ECF5" color6="#E9ECF5" />
        </div>
        <h2>Get to know your <Anchor href="#self" >self</Anchor> and help others to do the same</h2>
    </div>
    <Hero />
</Content>