<script>
    import { Blockquote } from 'flowbite-svelte';
    import { QuoteOutline } from 'flowbite-svelte-icons';
    import { clampSize } from 'flowbite-svelte/Input.svelte';
    import Info from './Info.svelte';

    let {description, picture, author, ocupation, size = "medium" } = $props()

</script>
  
  <figure class="flex flex-col justify-center items-center gap-minimal text-2 text-medium">
    <QuoteOutline class="text-3 w-medium h-medium"/>
    <Blockquote alignment="center" class={`text-2 text-${size}`} >{description}</Blockquote>
    <figcaption class="flex justify-center items-center mt-minimal space-x-3 rtl:space-x-reverse">
      <img class="w-8 h-8 rounded-full" src={picture} />
      <div class="flex items-center">
        <p class="pr-3 !font-bold font-medium text-minimal">{author}</p>
        <Info placement="bottom" tooltip={ocupation} />
      </div>
    </figcaption>
  </figure>