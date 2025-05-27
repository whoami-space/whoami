

<script>
    import Card from "$lib/components/custom/Card.svelte";
    import Lay from "$lib/components/custom/Lay.svelte";
    import Main from "$lib/components/custom/Main.svelte";
    import Pic from "$lib/components/custom/Pic.svelte";
    import DividerX from "$lib/components/stable/DividerX.svelte";
    import { Tabs, TabItem, Indicator } from "flowbite-svelte";
    import { ArrowUpOutline } from "flowbite-svelte-icons";


    let posts = [
        {
            title: "How does MBTI theory works",
            img: "https://ucarecdn.com/2a81533f-bd01-4f14-846f-b6009fafb407/about.png",
            link: "/posts/mbti",
            publishDate: "2025/06/01"
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
            {#each posts as post}
                <Card label={post.title} link={post.link} >
                        <div class="flex flex-col justify-center items-center gap-minimal" >
                            <Pic src={post.img}/> 
                            <div class="flex justify-center items-center gap-minimal" >
                                <b>Published at: {post.publishDate}</b>
                            </div> 
                        </div>
                </Card> 
            {/each}
        </div>
    </div>
</Main>


    