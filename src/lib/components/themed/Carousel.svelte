<script>
  import { Carousel } from 'flowbite-svelte';
  export const images = [
    {
      alt: 'Cosmic timetraveler',
      src: 'https://ucarecdn.com/dd001c8e-20eb-4df0-8530-f7d93a68c02b/premium_photo16643609710415024c24fa81e',
      title: 'cosmic-timetraveler-pYyOZ8q7AII-unsplash.com'
    },
  ];
</script>

<div class="" >
  <Carousel class="bg-2" {images} let:Indicators>
    <Indicators class="drop-shadow-[2px_2px_0_darkOrange] rounded-xl" />
  </Carousel>
</div>