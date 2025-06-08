<script>
    import { ChevronRightOutline, ExpandOutline, InboxFullOutline } from "flowbite-svelte-icons";
    import Button from "./Button.svelte";
    import { Indicator, Spinner } from "flowbite-svelte";
    import Pic from "./Pic.svelte";
    

    let { link, label } = $props()


    
</script>


    <div class="relative flex flex-col gap-minimal p-medium rounded-xl border">
        <Indicator color="none" class="absolute left-minimal top-minimal border w-minimal h-minimal" />
        <div class="flex flex-col text-2 rounded-xl justify-center items-center gap-medium">
            <div class="flex flex-col gap-minimal justify-center items-center" >
                <h2 class="text-3" >{label}</h2>
                <a href={link}>
                    <Button label="Access" ><ChevronRightOutline class="w-minimal h-minimal" /></Button>
                </a>
            </div>
            <div>
                <slot/>
            </div>
        </div>
        <div class="load absolute top-0 left-0 w-[100%] h-[100%] gap-minimal flex flex-col items-center rounded-xl bg-gradient-to-br from-1 to-transparent" >
            <Spinner size="4" class="absolute top-minimal left-minimal z-50" /> 
        </div>
    </div>


    <style>
        .load {
                animation: fadeout 2s ease-in forwards;
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
                        visibility: hidden;
                }
        }
    
    </style>

