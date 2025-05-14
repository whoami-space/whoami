<script>
    const defaultstyle = "p-maximal overflow-scroll scroll-smooth "
    let { custom, childreen } = $props();
</script>

<main class={defaultstyle + custom} >
    <slot/>
</main>