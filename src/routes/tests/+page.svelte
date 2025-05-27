

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

            link: "/tests/mbti-personality-test",
        },
    ]

 
    
</script>

<Main>
    <div class="bg-1 flex flex-col gap-medium" >
        <div class="flex flex-col justify-center items-center gap-minimal">
            <h1>Tests</h1>
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
</Main>


    