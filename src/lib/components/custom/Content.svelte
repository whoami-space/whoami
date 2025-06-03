<script>
    import { Indicator, Skeleton, TextPlaceholder } from "flowbite-svelte";
    import { ClockOutline } from "flowbite-svelte-icons";

    const defaultstyle = "p-medium py-maximal overflow-scroll scroll-smooth relative "
    let { custom = "flex flex-col items-center justify-center gap-medium " } = $props();
</script>

<div class={defaultstyle + custom } >
    <slot/>
    <div class="content absolute top-0 left-0 w-[100%] h-[100%] gap-minimal flex flex-col items-center rounded-xl bg-gradient-to-br from-1 to-transparent" >
    </div>
</div>



<style>
    .content {
            animation: fadeout 2.5s ease-in forwards;
            animation-iteration-count: 1;
        }
            
    @keyframes fadeout {
            0% {
                    opacity: 1;
            }
            90% {
                    opacity: 1;
            }
            100% {
                    opacity: 0;
                    visibility: hidden;
            }
    }

</style>