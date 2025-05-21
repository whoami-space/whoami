<script>
    import { Img } from "flowbite-svelte";

    let {src, alt = "An image from whoami.space website"} = $props()
</script>



<div class="flex w-full justify-center items-center">
    <Img
    class="w-[50vw] md:w-[30vw] hover:scale-[1.2] hover:cursor-zoom-in rounded-xl drop-shadow-[2px_2px_0_white]"
    alt={alt}
    src={src}
    effect="grayscale"/>
</div>