<script>
    import { Blockquote } from 'flowbite-svelte';
    import { QuoteOutline } from 'flowbite-svelte-icons';
    import { clampSize } from 'flowbite-svelte/Input.svelte';
    import Info from './Info.svelte';

    let {description, picture, author, ocupation, size = "medium" } = $props()

</script>
  
  <figure class="flex flex-col justify-center items-center gap-minimal text-2 text-medium">
    <Blockquote alignment="center" class={`flex gap-minimal text-2 text-${size}`} ><QuoteOutline class="text-3 w-minimal h-minimal rotate-[180deg]"/>{description}<QuoteOutline class="text-3 w-minimal h-minimal"/></Blockquote>
    <figcaption class="flex justify-center items-center mt-minimal space-x-3 rtl:space-x-reverse">
      <img class="w-8 h-8 rounded-full" alt="Cite Author" src={picture} />
      <div class="flex items-center">
        <p class="pr-3 !font-bold font-medium text-minimal">{author}</p>
        <Info placement="bottom" tooltip={ocupation} />
      </div>
    </figcaption>
  </figure>