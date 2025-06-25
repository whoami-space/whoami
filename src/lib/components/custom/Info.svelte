<script>
    import { Tooltip } from "flowbite-svelte";
    import { InboxFullSolid, InfoCircleOutline, InfoCircleSolid } from "flowbite-svelte-icons";
    let {tooltip, placement} = $props()
    import "$lib/components/styles/transitions.css";
</script>
  


<div class="z-40" >
    <InfoCircleOutline class="hover:opacity-[.5] text-3 rounded-full w-6 h-6 translate-y-[2px]" />
    <Tooltip placement={placement} color="gray" >{tooltip}</Tooltip>
</div>