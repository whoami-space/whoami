

<script>
    import { page } from "$app/state";
    import Anchor from "$lib/components/custom/Anchor.svelte";
    import Card from "$lib/components/custom/Card.svelte";
    import Lay from "$lib/components/custom/Lay.svelte";
    import Main from "$lib/components/custom/Main.svelte";
    import Pic from "$lib/components/custom/Pic.svelte";
    import Toast from "$lib/components/sloted/Toast.svelte";
    import DividerX from "$lib/components/stable/DividerX.svelte";
    import { Marquee, ArrowKeyLeft, TabItem, Tabs } from "flowbite-svelte";
    import { ArrowUpOutline, ChevronDoubleDownOutline, FaceGrinStarsOutline } from "flowbite-svelte-icons";

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
            title: "Quizzes",
            description: "Explore all the avaiable quizzes of the website. It includes MBTI, Eneagram and also BIG 5. These quizzes are created with a custom algorithm that allows user to define or explore the personality traits of theimselves. Every website, aplication or other tools have an specific algorithm, here it is not diferent. The case here is that the user have access in what happen behind it. When the user gets the result it gets also the most compatible pairs of their characteristics, don't only showing them just the result but also the things that are similar to it.",
            publishDate: "2025/06/01",
            link: "/quizzes",
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
        <h2 >Let's find out what's new!</h2>
        <FaceGrinStarsOutline class="w-medium h-medium" />
    </div>
    <Tabs defaultClass="flex flex-wrap justify-center items-center gap-minimal" contentClass="bg-1 p-0" tabStyle="underline">
        <TabItem activeClasses="bg-1 border p-minimal text-3 rounded-xl" open title="All">
            <div class="bg-1 flex flex-col gap-medium" >
                <div class="flex flex-col justify-center items-center gap-minimal">
                    <h2>All Resources</h2>
                    <div class="flex justify-center items-center opacity-[.5]">
                        <div>
                            <ArrowUpOutline/>
                        </div>
                        <p>Relevance</p>
                    </div>
                </div>
                <div class="grid md:grid-cols-2 gap-medium">
                    {#each resources as resource}
                        <Card label={resource.title} link={resource.link} > 
                            <div class="flex flex-col items-center gap-medium p-medium min-h-[50vh] max-h-[50vh] overflow-y-scroll">
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
                    </div>
            </div>
        </TabItem>
        <TabItem disabled activeClasses="bg-1 border p-minimal text-3 rounded-xl" title="Quizzes">
          <p class="text-sm text-gray-500 dark:text-gray-400">
            <b>Dashboard:</b>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </TabItem>
        <TabItem disabled activeClasses="bg-1 border p-minimal text-3 rounded-xl" title="AI">
          <p class="text-sm text-gray-500 dark:text-gray-400">
            <b>Settings:</b>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </TabItem>
        <TabItem disabled activeClasses="bg-1 border p-minimal text-3 rounded-xl" title="Surveys">
          <p class="text-sm text-gray-500 dark:text-gray-400">
            <b>Users:</b>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </TabItem>
      </Tabs>
</Main>


<style>


</style>


    