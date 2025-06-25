<script lang="ts">
	import '../app.css';
	import Navbar from '$lib/components/stable/Navbar.svelte';
	import Footer from '$lib/components/stable/Footer.svelte';
	import Loader from '$lib/components/stable/Loader.svelte';
    import { page } from '$app/state';
    import Cookies from '$lib/components/custom/Cookies.svelte';
    import Log from '$lib/components/custom/Log.svelte';
    import Anchor from '$lib/components/custom/Anchor.svelte';
    import '$lib/components/styles/transitions.css';
    import { ArrowUpOutline, ClockArrowOutline } from 'flowbite-svelte-icons';
    import { writable } from 'svelte/store';
    import { TabItem, Tabs } from 'flowbite-svelte';
    import Info from '$lib/components/custom/Info.svelte';
	
	let { children } = $props();

</script>

<div id="top" ></div>

<div class="p-minimal flex flex-col justify-center overflow-hidden" >
	<Navbar/>
	<main>
		<section class="flex">
			<Cookies custom="mt-minimal" >Low use of Cookies! <Anchor href="/privacy-policy" >Check it!</Anchor></Cookies>
		</section>
		<section class="border rounded-xl mt-minimal">
			{@render children()}
		</section>
		<section id="log" class="border p-medium flex flex-col gap-minimal my-minimal rounded-xl show-medium">
			<h3 class="text-medium">Log ( Last Changes )</h3>
			<div class="flex justify-center items-center opacity-[.5]">
                <div >
                    <ArrowUpOutline/>
                </div>
                <p>Date</p>
            </div>
			<Tabs defaultClass="flex flex-wrap justify-center items-center gap-minimal m-0" contentClass="bg-1 p-0 m-0" tabStyle="underline">
				<TabItem open inactiveClasses="p-minimal text-2 cursor-pointer" activeClasses="bg-1 border p-minimal text-3 rounded-xl" title="1">
					<div class="bg-1 flex flex-col gap-minimal" >
						<Log date="2025/06/25" >MBTI Personality Test is in building... </Log>
						<Log date="2025/06/20" >Overview Page is Already <Anchor href="/overview" >Access it!</Anchor></Log>
					</div>
				</TabItem>
				<TabItem disabled inactiveClasses="p-minimal text-2 cursor-pointer opacity-[.5]" activeClasses="bg-1 border p-minimal text-3 rounded-xl" title="...">
				</TabItem>
			</Tabs>
		</section>
	</main>
	<Footer/>
</div>








