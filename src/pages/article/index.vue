<template>
  <div class="article flex flex-col items-center p-2">
    <h1 class="text-4xl">所有文章</h1>
    <div
      v-for="i in 20"
      :key="i"
      class="w-full max-w-lg mt-4 p-4 rounded-lg bg-white shadow-md hover:shadow-lg transition-all"
    >
      <h2 class="text-lg font-bold">
        <router-link :to="{ name: 'ArticleDetail', params: { id: i } }">
          Lorem ipsum dolor sit amet consectetur elit
        </router-link>
      </h2>
      <section class="mt-2 text-base">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi
        laudantium ab id molestias nihil eveniet repellat corrupti! Earum sed at
        quam, facilis inventore ex nostrum cupiditate aliquid sunt similique
        fugit!
        <router-link
          :to="{ name: 'ArticleDetail', params: { id: i } }"
          class="text-blue-600 cursor-pointer"
          >进入全文</router-link
        >
      </section>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'Article',
});
</script>
