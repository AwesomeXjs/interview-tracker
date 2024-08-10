<script setup lang="ts">
import { useAuthStore } from '@/shared/auth/authStore'

const authStore = useAuthStore()
</script>

<template>
  <form @submit.prevent="authStore.submitForm">
    <label for="email1" class="block text-900 font-medium mb-2">Email</label>
    <app-input-text v-model="authStore.email" id="email1" type="email" class="w-full mb-3" />

    <label for="password1" class="block text-900 font-medium mb-2">Пароль</label>
    <app-input-text
      v-model="authStore.password"
      id="password1"
      type="password"
      class="w-full mb-3"
    />

    <app-button
      :label="authStore.submitButtonText"
      type="submit"
      icon="pi pi-user"
      :loading="authStore.isLoading"
      class="w-full"
    ></app-button>
  </form>
</template>

<style scoped></style>
