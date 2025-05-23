<script>
    import { Tooltip } from "flowbite-svelte";
    import { InfoCircleOutline } from "flowbite-svelte-icons";
    let {tooltip, placement} = $props()
</script>
  


<div>
    <InfoCircleOutline class="text-3 w-minimal h-minimal translate-y-[1px]" />
    <Tooltip placement={placement} color="gray" >{tooltip}</Tooltip>
</div>