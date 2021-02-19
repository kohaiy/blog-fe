<template>
  <div class="acticle-detail flex flex-col items-center px-2 py-6">
    <article
      class="w-full max-w-xl p-4 rounded-lg bg-white shadow-md hover:shadow-lg transition-all"
    >
      <header>
        <h1 class="text-2xl font-bold">
          Lorem ipsum dolor sit amet consectetur elit
        </h1>
        <p class="mt-2 text-right text-sm text-gray-600">
          <span class="">kohai</span>
          <time class="ml-4">2021-02-19 16:58:47</time>
        </p>
      </header>
      <section class="mt-6">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis
          impedit ipsam iusto iure provident, eos soluta, optio perferendis
          nesciunt ab voluptate totam laborum. Labore inventore quisquam eaque
          delectus quis. Error? Lorem, ipsum dolor sit amet consectetur
          adipisicing elit.
        </p>
        <p>
          Quidem iusto ad, rem delectus sit facere velit, hic odit ex laboriosam
          deleniti deserunt nesciunt accusantium similique ullam quasi.
          Veritatis, modi minus.
        </p>
      </section>
    </article>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'ActicleDetail',
});
</script>
