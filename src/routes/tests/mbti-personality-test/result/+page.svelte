<script>
    import ProgressBar from "$lib/components/custom/Progress.svelte";
    import Content from "$lib/components/custom/Content.svelte";
    let siProgress = "50"
    let seProgress = "25"
</script>



<Content>
    <div class="grid grid-cols-2 flex flex-wrap wrap gap-minimal p-minimal rounded-xl bg-2">
        <div class="flex flex-col justify-center items-center gap-minimal p-minimal rounded-xl bg-1">
            <h2>SE <br> Extraverted Sensing</h2>
            <ProgressBar progress={seProgress} />
            <h3>Your probability to be a SI user is over: <b class="text-3" >{seProgress}%</b></h3>
        </div>
        <div class="flex flex-col justify-center items-center gap-minimal p-minimal rounded-xl bg-1">
            <h2>SI <br> Introverted Sensing</h2>
            <ProgressBar progress={siProgress} />
            <h3>Your probability to be a SE user is over: <b class="text-3" >{siProgress}%</b></h3>
        </div>
    </div>
</Content>
