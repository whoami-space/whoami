<script lang="ts">
	import '../app.css';
	import Navbar from '$lib/components/stable/Navbar.svelte';
	import Footer from '$lib/components/stable/Footer.svelte';
	import Main from '$lib/components/custom/Main.svelte';
	
	let { children } = $props();
</script>

<div id="top" ></div>

<Navbar/>

{@render children()}

<Footer/>
