<script>
    import Main from "$lib/components/custom/Main.svelte";
    import Hero from "$lib/components/stable/Hero.svelte";
    import InlineNavigation from "$lib/components/custom/InlineNavigation.svelte";

    
    
    
</script>


<Main>
    <Hero />
    <div  id="abstract" >
        <div class="scroll-mt-medium flex flex-col justify-center items-center mt-maximal gap-medium" >
            <h1 class="text-maximal text-center">Get to know your <i class="text-3" >SELF</i></h1>
            <p class="text-center" >This website is a non-profit tool for anyone who wants to learn more about psychological theories in general. It's mission is to help people to learn more about themselves in an abstract way. In addition to a greater understanding of theories, there are also different tools that will help on the journey of self-knowledge, a long journey but one that will make you feel more fulfilled and authentic.</p>
            <InlineNavigation d1="About" d2="Explore" d3="Go to top" d3link="#top"/>
        </div>
    </div>
</Main>