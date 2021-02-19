<template>
  <div class="home flex flex-col items-center p-2">
    <h1 class="text-4xl">首页文章列表</h1>
    <div
      v-for="i in 100"
      :key="i"
      class="w-full max-w-lg mt-4 p-4 rounded-lg bg-white shadow-md hover:shadow-lg transition-all"
    >
      <h2 class="text-lg font-bold">Lorem ipsum dolor sit amet consectetur adipisicing elit.</h2>
      <section class="mt-2 text-base">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi
        laudantium ab id molestias nihil eveniet repellat corrupti! Earum sed at
        quam, facilis inventore ex nostrum cupiditate aliquid sunt similique
        fugit!
      </section>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'Home',
});
</script>
