<script lang="ts">
	import '../app.css';
	import Navbar from '$lib/components/stable/Navbar.svelte';
	import Footer from '$lib/components/stable/Footer.svelte';
	import Loader from '$lib/components/stable/Loader.svelte';
    import { page } from '$app/state';
	
	let { children } = $props();

</script>

<div >
	<div id="top" ></div>
	<Navbar/>
	<div id="content" >
		{@render children()}
	</div>
	<Footer/>
</div>


<style>

#content {
	animation: show 2.5s ease-in forwards;
	animation-iteration-count: 1;
	overflow-x: hidden;
}

@keyframes show {
	0% {
		opacity: 0;
	}
	100% {
		opacity: 1;
	}
}

</style>





