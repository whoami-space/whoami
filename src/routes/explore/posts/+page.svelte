

<script>
    import Card from "$lib/components/custom/Card.svelte";
    import Main from "$lib/components/custom/Main.svelte";
    import Pic from "$lib/components/custom/Pic.svelte";
    import { Tabs, TabItem } from "flowbite-svelte";
    import { ArrowUpOutline } from "flowbite-svelte-icons";


    let posts = [
        {
            title: "How does MBTI theory works ",
            description: "The MBTI personality test is a test that weighs your personality on 4 key characteristics. It is one of the most relevant tests in psychology, second only to the BIG 5. Try it if you want to get a large perspective about yourself.",
            img: "https://ucarecdn.com/2a81533f-bd01-4f14-846f-b6009fafb407/about.png",
            link: "/explore/posts/mbti",
            publishDate: "2025/05/20"
        },
    ]

 
    
</script>

<Main custom="flex flex-col gap-medium" >
    <h1 class="text-maximal text-center" >Posts</h1> 
    <div class="flex justify-center -tems-center opacity-[.5]">
        <div>
            <ArrowUpOutline/>
        </div>
        <p>Publish Date</p>
    </div>
    <div class="flex flex-col justify-center items-center gap-medium">
        {#each posts as post}
        <Card label={post.title} link={post.link} >
            <div class="grid md:grid-cols-2 items-start justify-center gap-medium p-medium min-h-[50vh] max-h-[50vh] overflow-y-scroll">
                <div class="flex flex-col justify-center items-center gap-minimal" >
                    <Pic alt="Representation of about page" src={post.img} />
                    <b>Published at {post.publishDate}</b> 
                </div>
                <div class="flex flex-col gap-minimal">
                    <h2>
                        Description
                    </h2>
                    <p>{post.description}</p>
                </div>
            </div>
        </Card> 
        {/each}
   </div>
</Main>


    