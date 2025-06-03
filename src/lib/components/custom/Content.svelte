<script>
    import { Indicator, Skeleton, Spinner, TextPlaceholder } from "flowbite-svelte";
    import { ClockOutline } from "flowbite-svelte-icons";

    const defaultstyle = "p-medium py-maximal overflow-scroll scroll-smooth relative "
    let { custom = "flex flex-col items-center justify-center gap-medium " } = $props();
</script>

<div class={defaultstyle + custom } >
    <Indicator color="none" class="absolute left-minimal top-minimal border w-minimal h-minimal" />   
    <slot/>
    <div class="load absolute top-0 left-0 w-[100%] h-[100%] gap-minimal flex flex-col items-center rounded-xl bg-gradient-to-br from-1 to-transparent" >
        <Spinner size="4" class="absolute top-minimal left-minimal z-50" /> 
    </div>
</div>



<style>
    .load {
            animation: fadeout 2.5s ease-in forwards;
            animation-iteration-count: 1;
        }
            
    @keyframes fadeout {
            0% {
                    backdrop-filter: blur(15px);
            }
            40% {
                    backdrop-filter: blur(10px);
            }
            80% {
                    backdrop-filter: blur(5px);
            }
            85% {
                    backdrop-filter: blur(2px);
            }
            90% {
                    backdrop-filter: blur(1px);
            }
            95% {
                    backdrop-filter: blur(0);
            }
            100% {
                    backdrop-filter: blur(0);
                    display: none;
            }
    }

</style>