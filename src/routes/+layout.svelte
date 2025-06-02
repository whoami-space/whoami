<script lang="ts">
	import '../app.css';
	import Navbar from '$lib/components/stable/Navbar.svelte';
	import Footer from '$lib/components/stable/Footer.svelte';
	import Loader from '$lib/components/stable/Loader.svelte';
    import { page } from '$app/state';
    import Cookies from '$lib/components/sloted/Cookies.svelte';
    import Note from '$lib/components/sloted/Note.svelte';
	
	let { children } = $props();

</script>
<div id="top" ></div>

<div class="p-minimal flex flex-col justify-center gap-minimal" >
	<Navbar/>
	<section class="flex flex-wrap gap-minimal rounded-xl overflow-x-scroll">
		<Cookies>Low use of Cookies!</Cookies>
		<Note>The website is currently in test phase!</Note>
	</section>
	<main class="border rounded-xl" >
		{@render children()}
	</main>
	<Footer/>
</div>








