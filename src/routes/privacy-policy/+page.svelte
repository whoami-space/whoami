<script>
    import Lay from "$lib/components/custom/Lay.svelte";
    import Content from "$lib/components/custom/Content.svelte";
    import { CloudArrowUpOutline, RedoOutline } from "flowbite-svelte-icons";
    import { WomanCyberSecurity } from "flowbite-svelte-illustrations";
</script>



<Content  custom="flex flex-col justify-center items-center gap-medium">
    <h1>Privacy Policy</h1>
    <h2>In this case</h2>
            <p>Although this website does not have terms and conditions for use and does not contain a large number of cookies, it is very necessary to address how and for what user data is used on a broad scale. In the context of the web, it is extremely important for most websites to have an idea of ​​what user data to use and for what reasons it is used. Therefore, it is very possible that there are rules and laws for the processing of personal data in different countries, whether in physical or digital media, by individuals or legal entities, public or private and this website is not left out of this, this page was chosen to specifically address this subject.</p>

    <Lay columns="2" >
        <svelte:fragment slot="1" >
            <h2>What data is colected</h2>
            <p>This site does not qualify as either an individual or a legal entity, as it is merely an abstract and philosophical learning tool that is not directed towards scientific or corporate language. However, there is no need to transmit precise information. Likewise, the data collected does not seek factual accuracy or precision, nor is it based on evidence, names, dates of birth or location are not necessary for the likely use of user data, only subjective data that can infer the user's behavior and personality. The data collected here is completely non-specific data and does not need to go to an external database for future use. Psychological tests, for example, keep user data in the browser until the page is reloaded, this is a great way to ensure safe use of data, preventing it from leaking to other sources. The development tools are modern and efficient, allowing data to be rendered and updated in the browser itself without the need for requests to databases or external APIs. This allows us to state that this site basically does not use much data, except when the user initiates an interaction with specific pages. In general, basic website data is just real-time interaction data and deployment data that is used to manage things like user experience, etc... This data comes from third parties like Vercel, or even Google and is not necessarily this website's responsibility to collect.</p>
        </svelte:fragment>
        <svelte:fragment slot="2" >
            <h2>What is the data used for</h2>
            <p>The main objective of the collected data is, in practice, to bring a final result that the user is looking for, or to update a false value to a more corresponding value. At the end of the day, there is no use of data for login and no external storage of data and there is no need to worry about data usage, here the data is safe and in fact it is not of much use.</p>
        </svelte:fragment>
    </Lay>
    
    <h3>In short...</h3>
    <div class="flex gap-minimal">
        <RedoOutline/><CloudArrowUpOutline/><RedoOutline class="rotate-[180deg]" />
    </div>
    <p>Your data remains in the cloud and is only modified or updated when you refresh your browser page. Ensure more security by making sure that the domain is spelled correctly and that the Hypertext Transfer Protocol ( HTTPS ) is used in its URL.</p>
</Content>