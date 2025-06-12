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
	
	let { children } = $props();

</script>
<div id="top" ></div>


<div class="p-minimal flex flex-col justify-center overflow-hidden" >
	<Navbar/>
	<main>
		<section class="flex">
			<Cookies custom="mt-minimal" >Low use of Cookies! <Anchor href="/privacy-policy" >Check!</Anchor></Cookies>
		</section>
		<section class="border rounded-xl mt-minimal">
			{@render children()}
		</section>
		<section class="flex flex-wrap">
			<Note custom="mt-minimal" >The website is currently in test phase! <Anchor href="/overview" >See what's new!</Anchor></Note>
		</section>
	</main>
	<Footer/>
</div>








