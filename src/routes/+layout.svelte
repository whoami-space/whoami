<script lang="ts">
	import '../app.css';
	import Navbar from '$lib/components/stable/Navbar.svelte';
	import Footer from '$lib/components/stable/Footer.svelte';
	import Loader from '$lib/components/stable/Loader.svelte';
    import { page } from '$app/state';
	
	let { children } = $props();

</script>

<div>
	<div id="top" ></div>
	<Navbar/>
	<div>
		{@render children()}
	</div>
	<Footer/>
</div>





