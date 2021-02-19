<template>
  <div class="app">
    <k-main />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import KMain from '@/views/layouts/k-main.vue';

export default defineComponent({
  components: { KMain },
  setup() {
    return {};
  },
});
</script>
