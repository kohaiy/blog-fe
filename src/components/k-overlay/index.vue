<template>
  <div class="k-overlay">
    <transition name="fade">
      <div
        v-show="visible"
        @click="handleClicked"
        class="fixed top-0 right-0 bottom-0 left-0 bg-gray-900 bg-opacity-80"
      ></div>
    </transition>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'KOverlay',
  props: {
    visible: {
      type: Boolean,
      default: false,
    },
  },
  emits: ['close'],
  setup(props, { emit }) {
    const handleClicked = () => {
      emit('close');
    };

    return {
      handleClicked,
    };
  },
});
</script>
