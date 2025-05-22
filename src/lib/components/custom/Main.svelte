<script>
    const defaultstyle = "p-medium overflow-scroll scroll-smooth "
    let { custom = "flex flex-col items-center justify-center gap-medium", childreen } = $props();
</script>

<main class={defaultstyle + custom } >
    <slot/>
</main>