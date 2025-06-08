<script>
    import { Blockquote } from 'flowbite-svelte';
    import { QuoteOutline } from 'flowbite-svelte-icons';
    import { clampSize } from 'flowbite-svelte/Input.svelte';
    import Info from './Info.svelte';
    import DividerY from '../stable/DividerY.svelte';
    import DividerX from '../stable/DividerX.svelte';

    let {description, picture, author, ocupation, size = "minimal" } = $props()

</script>
  
  <figure class="flex rounded-xl flex-wrap justify-center items-center gap-minimal text-2 text-medium px-medium">
    <Blockquote italic={false} alignment="center" class={`flex !font-bold gap-minimal text-2 text-${size}`} >"{description}"</Blockquote>
    <figcaption class="flex flex-col justify-center items-center gap-minimal p-minimal">
      <img class="w-medium h-medium rounded-full" alt="Cite Author" src={picture} />
      <p class="!font-bold font-medium text-minimal">{author}</p>
      <p class="!font-light font-medium text-minimal">{ocupation}</p>
    </figcaption>
  </figure>