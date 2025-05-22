<script>
    import Main from "$lib/components/custom/Main.svelte";
    import Hero from "$lib/components/stable/Hero.svelte";
    import InlineNavigation from "$lib/components/custom/InlineNavigation.svelte";
    import Pic from "$lib/components/custom/Pic.svelte";
    
    
</script>


<Main custom>
    <Hero />
    <div  id="self" >
        <div class="flex flex-col justify-center items-center pt-maximal gap-medium" >
            <h1>Get to know your <i class="text-3" >SELF</i></h1>
            <Pic src="https://ucarecdn.com/97402b37-459c-4099-b049-94a14f75be3d/hero.gif" alt="Animation for whoami icon" />
            <p>This website is a non-profit tool for anyone who wants to learn more about psychological theories in general. It's mission is to help people to learn more about themselves in an abstract way. In addition to a greater understanding of theories, there are also different tools that will help on the journey of self-knowledge, a long journey but one that will make you feel more fulfilled and authentic.</p>
            <InlineNavigation d1="Explore" d2="About" d3="Go to top" d1link="/explore" d2link="/about" d3link="#top"/>
        </div>
    </div>
    
</Main>