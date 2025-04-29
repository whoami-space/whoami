

<script>
    import { updated } from "$app/state";
    import Card from "$lib/components/custom/Card.svelte";
    import Main from "$lib/components/custom/Main.svelte";
    import { Tabs, TabItem } from "flowbite-svelte";
    import { ArrowUpOutline } from "flowbite-svelte-icons";



    let resources = [
        {
            title: "MBTI test",
            description: "The MBTI personality test is a test that weighs your personality on 4 key characteristics. It is one of the most relevant tests in psychology, second only to the BIG 5. Try it if you want to get a large perspective about yourself.",
            published: "2025/04/22",
            link: "/explore/tests/mbti",
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
    <div class="grid md:grid-cols-2 justify-center items-center gap-medium">
        {#each resources as resource}
        <Card label={resource.title} link={resource.link} >
            <div class="flex flex-col items-center gap-medium p-medium min-h-[50vh] max-h-[50vh] overflow-y-scroll">
                <h2 class="text-1 text-medium" >
                    Description
                </h2>
                <p class="text-minimal text-1 text-justify" >{resource.description}</p>
                <p><b>Published at</b> {resource.published}</p>
            </div>
        </Card> 
        {/each}
   </div>
</Main>


    