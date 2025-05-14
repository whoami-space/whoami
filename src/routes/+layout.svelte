<script lang="ts">
	import '../app.css';
	import Navbar from '$lib/components/stable/Navbar.svelte';
	import Footer from '$lib/components/stable/Footer.svelte';
	import Loader from '$lib/components/stable/Loader.svelte';
    import { page } from '$app/state';
	
	let { children } = $props();

	let is = page.status === 200
	let isNot = page.status === 404

</script>

<div class="overflow-x-hidden">
	<div id="top" ></div>
	<Navbar/>
	<div class={is || isNot ? "" : "hidden"}>
		{@render children()}
	</div>
	<Footer/>
</div>


