

<script>
    import { page } from "$app/state";
    import Anchor from "$lib/components/custom/Anchor.svelte";
    import Card from "$lib/components/custom/Card.svelte";
    import Lay from "$lib/components/custom/Lay.svelte";
    import Main from "$lib/components/custom/Main.svelte";
    import Pic from "$lib/components/custom/Pic.svelte";
    import DividerX from "$lib/components/stable/DividerX.svelte";
    import { Tabs, TabItem, Marquee, ArrowKeyLeft, ArrowKeyRight } from "flowbite-svelte";
    import { ArrowUpOutline, ChevronDoubleDownOutline } from "flowbite-svelte-icons";


    let newResources = [
        {
            label: "MBTI Personality Test",
            link: "/tests/mbti",
        },
        {
            label: "BIG 5 Personality Test",
            link: "/tests/mbti",
        },
    ]

    let resources = [
        {
            title: "Personality Tests",
            description: "Explore all the avaiable tests of the website. It includes MBTI, Eneagram and also BIG 5. These tests are created with a custom algorithm that allows user to define or explore the personality traits of theimselves. Every website, aplication or other tools have an specific algorithm, here it is not diferent. The case here is that the user have access in what happen behind it. When the user gets the result it gets also the most compatible pairs of their characteristics, don't only showing them just the result but also the things that are similar to it.",
            publishDate: "2025/06/01",
            link: "/tests",
        },
        {
            title: "Posts",
            description: "Posts are created when there is a need to explain in detail something that is within the resources, but cannot be briefly summarized. They follow a web article structure and are written by a human, although they do not have a specific authorship described. The key here is that it is not necessarily based on specific data to be written, going beyond common sense, bringing different approaches that break down some perspectives.",
            publishDate: "2025/06/01",
            link: "/posts",
        },
    ]

 
    
</script>

<Main>
    <div class="flex flex-col justify-center items-center gap-minimal">
        <h1>Overview</h1> 
        <h2>Let's find out what's new!</h2>
    </div>
    <Marquee speed={0.1} hoverSpeed={0.1} class="flex py-minimal text-medium text-2 rounded-xl  font-bold animate-pulse">
        <ArrowKeyLeft/>
        <div class="flex justify-around items-center gap-medium">
                {#each newResources as resource}
                <Anchor href={resource.link}>{resource.label}</Anchor>
                {/each}
        </div>    
    </Marquee>
    <div>
        <div class="flex flex-col justify-center items-center gap-minimal">
            <h2>All Resources</h2>
            <div class="flex justify-center items-center opacity-[.5]">
                <div>
                    <ArrowUpOutline/>
                </div>
                <p>Relevance</p>
            </div>
        </div>
        <Lay columns="2">
            {#each resources as resource}
                <Card label={resource.title} link={resource.link} >
                    <div class="flex flex-col items-center gap-medium p-medium min-h-[50vh] max-h-[50vh] overflow-y-scroll">
                        <div class="flex justify-center items-center gap-minimal">
                            <Pic custom="w-[50vw] rounded-xl" src="https://ucarecdn.com/2a81533f-bd01-4f14-846f-b6009fafb407/about.png" alt=""/>
                            <div  class="z-0">
                                <ChevronDoubleDownOutline class="w-minimal h-minimal translate-y-[-2px]" />
                                <ChevronDoubleDownOutline class="w-minimal h-minimal translate-y-[-2px] opacity-[0.5]" />
                                <ChevronDoubleDownOutline class="w-minimal h-minimal translate-y-[-2px] opacity-[0.2]" />
                            </div>
                        </div>
                        <DividerX/>
                        <div class="flex flex-col justify-center items-center gap-minimal">
                            <h2 >
                                Description
                            </h2>
                            <p >{resource.description}</p>
                        </div>
                        <DividerX/>
                        <div class="flex flex-col justify-center items-center gap-minimal">
                            <b>Published at: {resource.publishDate}</b>
                        </div>
                    </div>
                </Card> 
            {/each}
        </Lay>
    </div>
</Main>


<style>


</style>


    