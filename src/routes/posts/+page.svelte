

<script>
    import Card from "$lib/components/custom/Card.svelte";
    import Main from "$lib/components/custom/Main.svelte";
    import Pic from "$lib/components/custom/Pic.svelte";
    import {ArrowUpOutline, CalendarMonthOutline } from "flowbite-svelte-icons";


    let posts = [
        {
            title: "How does MBTI theory works",
            img: "https://ucarecdn.com/acb11743-6357-490f-b626-27191bf73e5b/about.png",
            link: "/posts/mbti",
            publishDate: "2025/6/1"
        },
    ]

 
    
</script>

<Main >
    <div class="bg-1 flex flex-col gap-medium" >
        <div class="flex flex-col justify-center items-center gap-minimal">
            <h1>Posts</h1>
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
                        <div class="border p-minimal rounded-xl mb-minimal">
                            <Pic src={post.img} alt="Card Image" custom="w-[50vw] md:w-[40vw] object-cover rounded-xl"/>
                        </div>
                        <div class="flex justify-center items-center gap-minimal" >
                            <CalendarMonthOutline/>
                            <b>Published at: {post.publishDate}</b>
                        </div>
                    </div>
                </Card> 
            {/each}
        </div>
    </div>
</Main>


    