<script>
    import { Img } from "flowbite-svelte";

    let {src, alt = "An image from whoami.space website", custom = "w-[50vw] md:w-[40vw] rounded-xl " } = $props()
</script>



<div class="relative justify-center items-center p-minimal border rounded-xl">
    
    <Img
    class={custom}
    alt={alt}
    src={src}
    effect="grayscale"/>
</div>