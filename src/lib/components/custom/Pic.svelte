<script>
    import { Img } from "flowbite-svelte";

    let {src, alt = "An image from whoami.space website", custom = "w-[50vw] hover:scale-[1.2] hover:cursor-zoom-in rounded-xl " } = $props()
</script>



<div class="flex w-full justify-center items-center">
    <Img
    class={custom}
    alt={alt}
    src={src}
    effect="grayscale"/>
</div>