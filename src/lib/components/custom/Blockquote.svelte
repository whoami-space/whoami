<script>
    import { Blockquote } from 'flowbite-svelte';
    import { QuoteSolid } from 'flowbite-svelte-icons';

    let {description, picture, author, ocupation} = $props()
  </script>
  
  <figure class="flex flex-col justify-center items-center gap-minimal text-2 text-medium p-medium">
    <QuoteSolid class="text-3 w-maximal" />
    <Blockquote alignment="center" size="maximal" class="text-2 text-minimal" >{description}</Blockquote>
    <figcaption class="flex justify-center items-center mt-minimal space-x-3 rtl:space-x-reverse">
      <img class="w-8 h-8 rounded-full" src={picture} />
      <div class="flex items-center divide-x-2 rtl:divide-x-reverse divide-3">
        <p class="pr-3 font-medium text-minimal">{author}</p>
        <p class="pl-3 text-sm font-light">{ocupation}</p>
      </div>
    </figcaption>
  </figure>