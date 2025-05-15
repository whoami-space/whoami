<script>
    const defaultstyle = "p-medium overflow-scroll scroll-smooth "
    let { custom, childreen } = $props();
</script>

<main class={defaultstyle + custom} >
    <slot/>
</main>