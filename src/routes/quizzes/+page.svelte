

<script>
    import Card from "$lib/components/custom/Card.svelte";
    import Lay from "$lib/components/custom/Lay.svelte";
    import Main from "$lib/components/custom/Main.svelte";
    import { Tabs, TabItem } from "flowbite-svelte";
    import { ArrowUpOutline } from "flowbite-svelte-icons";



    let tests = [
        {
            title: "MBTI test",
            description: "The MBTI personality test is a test that weighs your personality on 4 key characteristics. It is one of the most relevant tests in psychology, second only to the BIG 5. Try it if you want to get a large perspective about yourself.",

            link: "/explore/tests/mbti",
        },
    ]

 
    
</script>

<Main>
    <div class="flex flex-col justify-center items-center gap-minimal">
        <h1 class="text-maximal text-center" >Quizzes</h1> 
        <div class="flex justify-center -tems-center opacity-[.5]">
            <div>
                <ArrowUpOutline/>
            </div>
            <p>Publish Date</p>
        </div>
    </div>
    <Lay columns="2">
        {#each tests as test}
        <Card label={test.title} link={test.link} >
            <div class="flex flex-col items-center gap-medium p-medium min-h-[50vh] max-h-[50vh] overflow-y-scroll">
                <h2 class="text-medium" >
                    Description
                </h2>
                <p class="text-minimal text-justify" >{test.description}</p>
            </div>
        </Card> 
        {/each}
    </Lay>
</Main>


    