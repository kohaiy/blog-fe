<template>
  <div class="k-dialog" ref="dialogEL">
    <k-overlay :visible="visible" @close="handleClose" />
    <transition name="k-dialog">
      <section
        v-show="visible"
        class="k-dialog__inner fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 rounded-md bg-white shadow-md"
      >
        <header
          class="flex items-center justify-between px-6 py-2 border-b border-gray-200"
        >
          <h2 class="pt-1 text-lg font-bold">{{ title }}</h2>
          <button
            @click="handleClose"
            class="w-6 cursor-pointer transform hover:scale-110 transition-all"
          >
            <i class="fa fa-times"></i>
          </button>
        </header>
        <main class="px-6 py-2 pb-6">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure sit
          dolore nulla quibusdam? Asperiores magnam aspernatur nostrum qui aut
          tenetur vitae ratione doloribus aliquid quo. Dolor quia distinctio
          error quam?
        </main>
        <footer class="flex justify-end px-6 pb-4">
          <k-button>取消</k-button>
          <k-button color="primary">确定</k-button>
        </footer>
      </section>
    </transition>
  </div>
</template>

<script lang="ts">
import {
  defineComponent,
  ref,
  onMounted,
  watch,
} from 'vue';
import KOverlay from '../k-overlay/index.vue';

export default defineComponent({
  name: 'KDialog',
  components: { KOverlay },
  emits: ['update:visible'],
  props: {
    visible: {
      type: Boolean,
      default: false,
    },
    title: {
      type: String,
      default: '',
    },
  },
  setup(props, { emit }) {
    const dialogEL = ref<HTMLDivElement | null>(null);
    onMounted(() => {
      if (dialogEL.value) {
        document.body.append(dialogEL.value);
      }
    });
    watch(
      (value: boolean) => {
        if (value && dialogEL.value) {
          document.body.append(dialogEL.value);
        }
      },
      () => props.visible,
    );
    const handleClose = () => {
      emit('update:visible', false);
    };
    return {
      dialogEL,
      handleClose,
    };
  },
});
</script>

<style lang="scss">
.k-dialog-enter-active,
.k-dialog-leave-active {
  transition: all 0.3s ease-in-out;
}
.k-dialog-enter-from,
.k-dialog-leave-to {
  opacity: 0;
  transform: translate(-50%, 50%) !important;
}
</style>
