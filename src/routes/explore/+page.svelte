<script>
    import Main from "$lib/components/custom/Main.svelte";
    import { CaretRightSolid } from "flowbite-svelte-icons";
</script>



<Main custom="flex flex-col gap-medium" >
    <h1 class="text-maximal text-center" >Explore resources</h1>
    <div class="grid md:grid-cols-2 justify-center items-center gap-medium">
        <div class="flex flex-col gap-minimal">
            <div class="bg-3 p-minimal rounded-xl flex justify-center items-center">
                <a href="" class="flex items-center gap-minimal">
                    <h2 class="text-medium select-none" >
                        MBTI Personality test
                    </h2>
                    <CaretRightSolid class=" w-medium h-medium" />
                </a>
            </div>
            <div class="bg-2 p-minimal rounded-xl flex justify-center items-center">
                <div class="flex flex-col items-center gap-minimal">
                    <h2 class="text-1 text-medium" >
                        Description
                    </h2>
                    <p class="text-minimal text-1 text-center" >The MBTI personality test is a test that weighs your personality on 4 key characteristics. It is one of the most relevant tests in psychology, second only to the BIG 5.</p>
                </div>
            </div>
        </div>
    </div>
</Main>