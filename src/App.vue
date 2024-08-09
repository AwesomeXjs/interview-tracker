<script setup lang="ts">
import { onMounted, ref } from 'vue'
import { getAuth, onAuthStateChanged } from 'firebase/auth'
import { useUserStore } from '@/stores/counter'

import AppHeader from '@/components/AppHeader.vue'

const userStore = useUserStore()

const isLoadingComplete = ref<boolean>(false)

onMounted(() => {
  onAuthStateChanged(getAuth(), (user) => {
    if (user) {
      userStore.userId = user.uid
    } else {
      userStore.userId = ''
    }
    isLoadingComplete.value = true
  })
})
</script>

<template>
  <div v-if="isLoadingComplete" class="container">
    <AppHeader />
    <div class="content">
      <RouterView />
    </div>
  </div>
</template>

<style scoped>
.container {
  max-width: 1280px;
  margin: auto;
  padding: 20px;
}
</style>
