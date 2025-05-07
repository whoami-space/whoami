<script>
    import { Progressbar, Range } from "flowbite-svelte";


    let {progress} = $props()
    
</script>

<Progressbar class="drop-shadow-[0_0_10px_black]" color="primary" progress={progress} animated />




