

<script>
    import { updated } from "$app/state";
    import Card from "$lib/components/custom/Card.svelte";
    import Lay from "$lib/components/custom/Lay.svelte";
    import Main from "$lib/components/custom/Main.svelte";
    import { Tabs, TabItem } from "flowbite-svelte";
    import { ArrowUpOutline } from "flowbite-svelte-icons";



    let resources = [
        {
            title: "Personality Tests",
            description: "Explore all the avaiable tests of the website. It includes MBTI, Eneagram and also BIG 5. These tests are created with a custom algorithm that allows user to define or explore the personality traits of theimselves. Every website, aplication or other tools have an specific algorithm, here it is not diferent. The case here is that the user have access in what happen behind it. When the user gets the result it gets also the most compatible pairs of their characteristics, don't only showing them just the result but also the things that are similar to it.",
            link: "/explore/tests",
        },
        {
            title: "Posts",
            description: "Posts are created when there is a need to explain in detail something that is within the resources, but cannot be briefly summarized. They follow a web article structure and are written by a human, although they do not have a specific authorship described. The key here is that it is not necessarily based on specific data to be written, going beyond common sense, bringing different approaches that break down some perspectives.",
            link: "/explore/posts",
        },
    ]

 
    
</script>

<Main custom="flex flex-col gap-medium" >
    <h1 class="text-maximal text-center" >Explore resources</h1> 
    <div class="flex justify-center -tems-center opacity-[.5]">
        <div>
            <ArrowUpOutline/>
        </div>
        <p>Relevance</p>
    </div>
    <Lay columns="2">
        {#each resources as resource}
            <Card label={resource.title} link={resource.link} >
                <div class="flex flex-col items-center gap-medium p-medium min-h-[50vh] max-h-[50vh] overflow-y-scroll">
                    <h2 class="text-1 text-medium" >
                        Description
                    </h2>
                    <p class="text-minimal text-1 text-justify" >{resource.description}</p>
                </div>
            </Card> 
        {/each}
    </Lay>
</Main>


    