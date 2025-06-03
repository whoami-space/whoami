<script lang="ts">
	import '../app.css';
	import Navbar from '$lib/components/stable/Navbar.svelte';
	import Footer from '$lib/components/stable/Footer.svelte';
	import Loader from '$lib/components/stable/Loader.svelte';
    import { page } from '$app/state';
    import Cookies from '$lib/components/custom/Cookies.svelte';
    import Note from '$lib/components/custom/Note.svelte';
    import Anchor from '$lib/components/custom/Anchor.svelte';
	
	let { children } = $props();

</script>
<div id="top" ></div>

<div class="p-minimal flex flex-col justify-center" >
	<Navbar/>
	<main class="">
		<section class="flex flex-wrap">
			<Cookies custom="my-minimal" >Low use of Cookies! <Anchor href="/privacy-policy" >Check!</Anchor></Cookies>
			<Note >The website is currently in test phase!</Note>
		</section>
		<section class="border rounded-xl mt-minimal">
			{@render children()}
		</section>
	</main>
	<Footer/>
</div>








