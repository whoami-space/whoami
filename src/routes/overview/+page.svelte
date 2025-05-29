

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
            link: "/tests/mbti-personality-tests",
        },
    ]

    let resources = [
        {
            title: "Tests",
            description: "A test is a formal and comprehensive form of assessment, generally with a greater number of questions and greater weight for the final assessment. Its preparation is done in detail to bring the best possible result.",
            link: "/tests",
        },
        {
            title: "Quizzes",
            description: "A quiz is an informal and short form of assessment. Here, the focus is on specific knowledge to stimulate learning, this knowledge always being related to psychology.",
            link: "/quizzes",
        },
        {
            title: "Posts",
            description: "Posts are created when there is a need to explain in detail something that is within the resources, but cannot be briefly summarized. They follow a web article structure, going beyond common sense, bringing different approaches that break down some perspectives. ",
            link: "/posts",
        },
    ]

    let tests = [
        {
            title: "MBTI test",
            description: "The MBTI personality test is a test that weighs your personality on 4 key characteristics. It is one of the most relevant tests in psychology, second only to the BIG 5. Try it if you want to get a large perspective about yourself.",

            link: "/tests/mbti-personality-test",
        },
    ]

 
    
</script>



<Main custom="flex flex-col justify-center items-center gap-minimal" >
    
    <div class="flex flex-col justify-center items-center gap-minimal">
        <h1>Overview</h1> 
        <h2 >Let's find out what's new!</h2>
        <FaceGrinStarsOutline class="w-medium h-medium" />
    </div>
    <Tabs defaultClass="flex flex-wrap justify-center items-center gap-minimal m-0" contentClass="bg-1 p-0 m-0" tabStyle="underline">
        <TabItem inactiveClasses="p-minimal text-2 cursor-pointer" activeClasses="bg-1 border p-minimal text-3 rounded-xl" open title="All">
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
        <TabItem inactiveClasses="p-minimal text-2 cursor-pointer" activeClasses="bg-1 border p-minimal text-3 rounded-xl" title="Tests">
          <div class="bg-1 flex flex-col gap-medium" >
            <div class="flex flex-col justify-center items-center gap-minimal">
                <h2>Tests</h2>
                <div class="flex justify-center items-center opacity-[.5]">
                    <div>
                        <ArrowUpOutline/>
                    </div>
                    <p>Relevance</p>
                </div>
            </div>
            <div class="grid md:grid-cols-2 gap-medium">
                {#each tests as test}
                    <Card label={test.title} link={test.link} > 
                            <p>{test.description}</p>
                    </Card> 
                {/each}
            </div>
        </div>
        </TabItem>
        <TabItem disabled inactiveClasses="p-minimal text-2 cursor-pointer opacity-[.5]" activeClasses="bg-1 border p-minimal text-3 rounded-xl" title="Quizzes">
            <p class="text-sm text-gray-500 dark:text-gray-400">
              <b>Quizzes</b>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </TabItem>
        <TabItem disabled inactiveClasses="p-minimal text-2 cursor-pointer opacity-[.5]"  activeClasses="bg-1 border p-minimal text-3 rounded-xl" title="Surveys">
          <p class="text-sm text-gray-500 dark:text-gray-400">
            <b>Surveys</b>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </TabItem>
      </Tabs>
</Main>


<style>


</style>


    