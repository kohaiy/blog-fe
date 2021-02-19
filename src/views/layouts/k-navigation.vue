<template>
  <div class="k-navigation">
    <nav class="flex items-center justify-between flex-wrap bg-blue-500 p-4">
      <div class="flex items-center flex-shrink-0 text-white mr-6">
        <router-link to="/" class="font-semibold text-xl tracking-tight"
          >XX Blog</router-link
        >
      </div>
      <div class="flex-1 flex items-center justify-between bg-blue-500">
        <div class="flex text-sm">
          <router-link
            :to="{ name: 'Article' }"
            class="block text-blue-200 hover:text-white mr-4"
          >
            文章列表
          </router-link>
          <a
            href="#responsive-header"
            class="block text-blue-200 hover:text-white mr-4"
          >
            标签
          </a>
          <a
            href="#responsive-header"
            class="block text-blue-200 hover:text-white"
          >
            关于
          </a>
        </div>
        <div>
          <k-button @click="loginDialogVisible = true" color="primary"
            >后台登录</k-button
          >
        </div>
      </div>
    </nav>
  </div>
  <k-dialog v-model:visible="loginDialogVisible" title="管理员登录" />
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import KDialog from '@/components/k-dialog/index.vue';

export default defineComponent({
  name: 'KNavigation',
  components: { KDialog },
  setup() {
    const loginDialogVisible = ref(false);

    return {
      loginDialogVisible,
    };
  },
});
</script>
