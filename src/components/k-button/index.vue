<template>
  <button class="k-button" :class="classList">
    <slot />
  </button>
</template>

<script lang="ts">
import { defineComponent, computed } from 'vue';

export default defineComponent({
  name: 'KButton',
  props: {
    color: {
      type: String,
      default: 'default',
    },
  },
  setup(props) {
    const classList = computed(() => {
      const list: string[] = [];
      list.push(`k-button--${props.color}`);
      return list;
    });

    return {
      classList,
    };
  },
});
</script>

<style lang="scss">
.k-button {
  @apply py-2;
  @apply px-4;
  @apply text-sm;
  @apply border;
  @apply rounded;
  @apply leading-none;
  @apply border-gray-800;
  @apply text-gray-800;
  @apply bg-white;

  &:hover {
    @apply bg-gray-200;
  }

  + .k-button {
    @apply ml-4;
  }

  &.k-button--primary {
    @apply border-blue-500;
    @apply text-white;
    @apply bg-blue-500;

    &:hover {
      @apply border-blue-400;
      @apply bg-blue-400;
    }
  }
}
</style>
