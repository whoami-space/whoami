<script>

let {columns, nostyle = "flex flex-col gap-medium p-minimal"} = $props()

</script>

<slot/>

<div class={`grid gap-medium md:grid-cols-${columns}`}>
    <div class={nostyle} >
        <slot name="1"/>
    </div>
    <div class={nostyle} >
        <slot name="2"/>
    </div>
    <div class={nostyle} >
        <slot name="3"/>
    </div>
    <div class={nostyle} >
        <slot name="4"/>
    </div>
</div>