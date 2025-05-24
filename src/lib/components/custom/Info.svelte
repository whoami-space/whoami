<script>
    import { Tooltip } from "flowbite-svelte";
    import { InfoCircleOutline } from "flowbite-svelte-icons";
    let {tooltip, placement} = $props()
</script>
  


<div >
    <InfoCircleOutline class="text-1 bg-3 rounded-xl w-5 p-[2px] h-5 translate-y-[1px]" />
    <Tooltip placement={placement} color="gray" >{tooltip}</Tooltip>
</div>