<template>
   <k-navigation/>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import KNavigation from './views/layouts/k-navigation.vue'

export default defineComponent({
  name: 'App',
  components: {
    KNavigation
  }
})
</script>
