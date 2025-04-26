<script >
    import { page } from '$app/state';
    import { StepIndicator } from 'flowbite-svelte';
    
    
    let pagename  = page.url.pathname.substr(page.url.pathname.lastIndexOf('/')).replace('/', '')
    
    let currentStep = pagename;

    let steps = ['Step 1', 'Step 2', 'Step 3',];

    let { children } = $props();

  </script>
  hello


  {#if pagename !== "mbti"}
  
  <div class="my-4 p-medium">
    <StepIndicator {currentStep} {steps} color="yellow"  hideLabel size="h-4"/>
  </div>

  {/if}

  The <u>{pagename}</u> Is the page that will be used to define the current step
  <br> <br>
  {@render children() }