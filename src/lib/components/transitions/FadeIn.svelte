<script>
    import { ClockOutline } from "flowbite-svelte-icons";

</script>
<div class="w-[100%] absolute top-0 bg-1 z-[1000000000000000000000000000000000000000000000000000000000000000000] flex justify-center items-center text-2">
    <b class="filtered fixed flex flex-col justify-center gap-minimal items-center top-[30%] h-auto w-auto p-medium rounded-xl bg-1 drop-shadow-[0_0_20px_gray] border">
        <ClockOutline class="w-maximal h-maximal animate-[bounce_6s_ease-out]" />
        <b>Wait...</b>
    </b>
</div>



<style>
    div {
        animation: fade-in 6s ease-in forwards;
        animation-iteration-count: 1;  
    }

    .filtered {
        backdrop-filter: blur(10px)
    }

    @keyframes fade-in {
        0% {
            opacity: 1;
        }
        90% {
            opacity: 1;
        }
        to {
            opacity: 0;
            display: none;
        }
    }

</style>