<script lang="ts">
	import '../app.css';
	import Navbar from '$lib/components/stable/Navbar.svelte';
	import Footer from '$lib/components/stable/Footer.svelte';
	import Loader from '$lib/components/stable/Loader.svelte';
    import { page } from '$app/state';

	let host = page.url.hostname
	
	let { children } = $props();
</script>

<div id="app">
	{#if host !== "localhost"}
	<Loader/>
	{/if}
	<div id="top" ></div>

	<Navbar/>

	{@render children()}

	<Footer/>
</div>


