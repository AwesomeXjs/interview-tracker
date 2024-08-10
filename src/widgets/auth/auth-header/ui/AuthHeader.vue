<script setup lang="ts">
import { useAuthStore } from '@/shared/auth/authStore'

const authStore = useAuthStore()
</script>

<template>
  <div class="text-center mb-3">
    <div class="text-900 text-3xl font-medium mb-3">Приветствую!</div>
    <span class="text-600 font-medium line-height-3">{{ authStore.subtitleText }}</span>
    <a
      class="font-medium no-underline ml-2 text-blue-500 cursor-pointer"
      @click="authStore.toggleAuth"
    >
      {{ authStore.linkAccountText }}
    </a>
  </div>
</template>

<style scoped></style>
