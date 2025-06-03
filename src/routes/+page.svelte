<script>
    import Hero from "$lib/components/stable/Hero.svelte";
    import InlineNavigation from "$lib/components/custom/InlineNavigation.svelte";
    import Pic from "$lib/components/custom/Pic.svelte";
    import Metadata from "$lib/components/custom/Metadata.svelte";
    import Anchor from "$lib/components/custom/Anchor.svelte";
    import FadeIn from "$lib/components/transitions/FadeIn.svelte";
    import Content from "$lib/components/custom/Content.svelte";
    
    
</script>

<Metadata title="Whoami" description="The space to learn more about yourself" keywords="Whoami, Space, Learn, Self, Tipology, Mind, Psychology" />

<Content custom>
    <div >
        <div class="flex flex-col justify-center items-center gap-medium" >
            <h1>Who am I?</h1>
            <Pic src="https://ucarecdn.com/9ba2e34d-11c8-4cb6-a0de-31e84196c03e/hero.gif" alt="Animation for whoami icon" />
            <h2>Get to know your <Anchor href="#self" >self</Anchor></h2>
        </div>
    </div>
    <Hero />
</Content>