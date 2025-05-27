

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
            title: "Tests",
            description: "A test is a formal and comprehensive form of assessment, generally with a greater number of questions and greater weight for the final assessment. Its preparation is done in detail to bring the best possible result.",
            link: "",
        },
        {
            title: "Quizzes",
            description: "A quiz is an informal and short form of assessment. Here, the focus is on specific knowledge to stimulate learning, this knowledge always being related to psychology.",
            link: "",
        },
        {
            title: "Posts",
            description: "Posts are created when there is a need to explain in detail something that is within the resources, but cannot be briefly summarized. They follow a web article structure, going beyond common sense, bringing different approaches that break down some perspectives. ",
            link: "",
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
                                <p>{resource.description}</p>
                        </Card> 
                    {/each}
                    </div>
            </div>
        </TabItem>
        <TabItem disabled activeClasses="bg-1 border p-minimal text-3 rounded-xl" title="Tests">
          <p class="text-sm text-gray-500 dark:text-gray-400">
            <b>Dashboard:</b>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
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


    