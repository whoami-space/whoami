<script>
    let {title = "Whoami", description = "A page for whoami.space", keywords = "whoami, space"} = $props()
</script>

<svelte:head>
    <meta name="title" content={title}>
    <meta name="description" content={description}>
    <meta name="keywords" content={keywords}>
</svelte:head>