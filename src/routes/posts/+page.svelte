

<script>
    import Card from "$lib/components/custom/Card.svelte";
    import Lay from "$lib/components/custom/Lay.svelte";
    import Main from "$lib/components/custom/Main.svelte";
    import Pic from "$lib/components/custom/Pic.svelte";
    import DividerX from "$lib/components/stable/DividerX.svelte";
    import { Tabs, TabItem, Indicator } from "flowbite-svelte";
    import { AlignLeftOutline, ArrowUpOutline, CalendarMonthOutline, ClockOutline, LockTimeOutline, TextUnderlineOutline } from "flowbite-svelte-icons";

    let date = new Date()
    let currentDate = `${date.getUTCDate()}/${date.getUTCMonth()}/${date.getFullYear()}`


    let posts = [
        {
            title: "How does MBTI theory works",
            img: "https://ucarecdn.com/2a81533f-bd01-4f14-846f-b6009fafb407/about.png",
            link: "/posts/mbti",
            publishDate: "2025/6/1"
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
                    <div class="flex justify-center items-center gap-minimal" >
                        {#if post.publishDate <= currentDate}
                            <ClockOutline/>
                            <b>In: {post.publishDate}</b>
                        {:else}
                            <CalendarMonthOutline/>
                            <b>Published at: {post.publishDate}</b>
                        {/if}
                    </div>
                </Card> 
            {/each}
        </div>
    </div>
</Main>


    