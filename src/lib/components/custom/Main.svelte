<script>
    const defaultstyle = "p-medium overflow-scroll scroll-smooth "
    let { custom } = $props();
    
</script>

<main class={defaultstyle + custom} >
    <slot/>
</main>