<script setup lang="ts">
import { AuthHeader } from '@/widgets/auth'
import AuthForm from '@/widgets/auth/auth-form/ui/AuthForm.vue'
</script>

<template>
  <app-toast position="bottom-right" />
  <div class="flex justify-content-center p-2">
    <div class="surface-card p-4 shadow-2 border-round w-full lg:w-6">
      <AuthHeader />
      <AuthForm />
    </div>
  </div>
</template>
