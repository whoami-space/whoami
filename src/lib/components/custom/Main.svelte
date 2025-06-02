<script>
    const defaultstyle = "p-medium py-maximal overflow-scroll scroll-smooth "
    let { custom = "flex flex-col items-center justify-center gap-medium " } = $props();
</script>

<section class={defaultstyle + custom } >
    <slot/>
</section>




<style>

    section {
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