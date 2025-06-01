<script>
    import Main from "$lib/components/custom/Main.svelte";
    import Hero from "$lib/components/stable/Hero.svelte";
    import InlineNavigation from "$lib/components/custom/InlineNavigation.svelte";
    import Pic from "$lib/components/custom/Pic.svelte";
    import Metadata from "$lib/components/custom/Metadata.svelte";
    import Anchor from "$lib/components/custom/Anchor.svelte";
    
    
</script>

<Metadata title="Whoami" description="The space to learn more about yourself" keywords="Whoami, Space, Learn, Self, Tipology, Mind, Psychology" />

<Main custom>
    <div >
        <div class="flex flex-col justify-center items-center gap-medium" >
            <h1>Who am I?</h1>
            <Pic src="https://ucarecdn.com/9ba2e34d-11c8-4cb6-a0de-31e84196c03e/hero.gif" alt="Animation for whoami icon" />
            <p>This website is a non-profit tool for anyone who wants to learn more about psychological theories in general. It's mission is to help people to learn more about themselves in an abstract way. In addition to a greater understanding of theories, there are also different tools that will help on the journey of self-knowledge, a long journey but one that will make you feel more fulfilled and authentic.</p>
            <h2>Get to know your <Anchor href="#self" >self</Anchor></h2>
        </div>
    </div>
    <Hero />
</Main>