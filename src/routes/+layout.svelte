<script lang="ts">
	import '../app.css';
	import Navbar from '$lib/components/stable/Navbar.svelte';
	import Footer from '$lib/components/stable/Footer.svelte';
	import Loader from '$lib/components/stable/Loader.svelte';
    import { page } from '$app/state';
    import Cookies from '$lib/components/custom/Cookies.svelte';
    import Note from '$lib/components/custom/Note.svelte';
    import Anchor from '$lib/components/custom/Anchor.svelte';
    import '$lib/components/styles/transitions.css';
    import { ClockArrowOutline } from 'flowbite-svelte-icons';
	
	let { children } = $props();

	let reload = () => {
		window.location.reload()
	}

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
		<section id="notes" class="flex gap-medium my-minimal show-medium">
			<Note >The website is currently in test phase! <Anchor href="/overview" >See what's new!</Anchor></Note>
			<Note >MBTI Personality Test is in building... </Note>
			<Note >Overview Page is Already <Anchor href="/overview" >Access it!</Anchor></Note>
			<div on:click={reload()} class="w-full flex gap-minimal justify-center items-center border rounded-xl p-minimal text-3 cursor-pointer" >
				<b>Reload Notes</b>
				<ClockArrowOutline />
			</div>
		</section>
	</main>
	<Footer/>
</div>








