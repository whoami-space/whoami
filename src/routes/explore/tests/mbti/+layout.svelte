<script >
    import { page } from "$app/state";
    import Main from "$lib/components/custom/Main.svelte";
    import { StepIndicator } from "flowbite-svelte";

    

    let pagename = page.url.pathname.substr(page.url.pathname.lastIndexOf('/')).replace('/', '');

    let { children } = $props();

    let currentStep = pagename;

    let steps = ['Step 1', 'Step 2', 'Step 3', 'Step 4'];   

  </script>

{#if pagename !== "mbti" }
    <div class="my-4 p-medium">
      <StepIndicator {currentStep} {steps} color="yellow"  hideLabel size="h-4"/>
    </div>
{/if}

<Main>
  {@render children() }
</Main>

