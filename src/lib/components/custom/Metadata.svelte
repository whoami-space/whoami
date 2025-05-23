<script>
    let {title, description, keywords} = $props()
</script>

<svelte:head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name={title} content="Título da página">
    <meta name={description} content="Título da página">
    <meta name={keywords} content="HTML, CSS, JavaScript">
</svelte:head>

<slot/>