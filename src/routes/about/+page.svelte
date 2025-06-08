<script>
    import Content from "$lib/components/custom/Content.svelte";
    import Pic from "$lib/components/custom/Pic.svelte";
    import Lay from "$lib/components/custom/Lay.svelte";
    import Anchor from "$lib/components/custom/Anchor.svelte";
    import DividerX from "$lib/components/stable/DividerX.svelte";
    import { ManWorkingQuestionMark, WomanRocketFlying } from "flowbite-svelte-illustrations";
</script>



<Content>
    <WomanRocketFlying color1="#393D3F" color2="#6200B3" color3="#6200B3" color4="#6200B3" color5="#E9ECF5" color6="#E9ECF5" />
        <h1 class="" >About the project</h1>
        
    <h2>Objective</h2>
            <p>In short, the objective of this website is to allow greater immersion in self-knowledge to users in the most accessible way possible. And how is this done?   Through tools such as personality tests, through articles covering complex concepts or even through more direct contact if necessary. If you are a psychologist or have knowledge in psychology, you can also collaborate with ideas by <Anchor href="/contact">contacting</Anchor>
            </p>
    <Lay columns="2">
        <svelte:fragment slot="1">
            <h2>The history behind</h2>
            <p>
                Taking inspiration from the reflection on the search for identity, addressed in the song Wutiwant by saraunh0ly, this project was designed to bring the user a more acute perception of themselves, even if this makes them question their own internal values. In the song Wutiwant, uncertainty about oneself is recurrent, and it is this uncertainty that makes us have a greater understanding of ourselves. Not knowing who we are is a sign that there is room for us to learn more about ourselves and as we doubt whether we really are a certain way, we will remain aware that the trajectory does not lie and that recurring doubt has created a solid foundation of authenticity for us to continue firmly in life. The repetition of the rhetorical question <i translate="no" class="m-2" >"Who am I?"</i> in music it reflects the importance of knowing who we are and that to have the real satisfaction of living we need to resolve the enigmatic bonds of our own mind.
            </p>
        </svelte:fragment>
        <svelte:fragment slot="2">
            <h2>Developer message</h2>
            <p>Hello! I am the developer of this website and for some reasons I will keep my identity anonymous for now. I will be using the project identity as a divider between you and me. Know that there is a person like you behind the project with a lot of knowledge to share and I will be available to contact you via email, if necessary. I do not use anyone's personal data for any purpose and I keep user data in their own browsers. This website does not have a database and does not store data outside of your browser so don't worry, your data is safe and will not be shared. This website was not created for commercial purposes as it is a personal project that is completely free to use. So there is no sale of resources and there is no expectation that this site will have premium resources in the future. However, to keep the website working properly and keeping it active, advertisements may be displayed and user collaboration will be permitted, both directly and indirectly.</p>
        </svelte:fragment>
    </Lay>
    
</Content>