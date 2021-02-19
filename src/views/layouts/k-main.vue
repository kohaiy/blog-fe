<template>
  <div class="k-main w-full h-screen flex flex-col">
    <k-navigation />
    <div class="flex-1 overflow-auto bg-gray-100">
      <router-view />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import kNavigation from './k-navigation.vue';

export default defineComponent({
  name: 'KMain',
  components: { kNavigation },
});
</script>
