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
  <button @click="authStore.signInWithGoogle" class="login-with-google-btn google-btn">
    Sign in with Google</button
  ><button @click="authStore.signInWithGigub" class="login-with-google-btn github-btn">
    Sign in with Github
  </button>
</template>

<style scoped>
.login-with-google-btn {
  width: 100%;
  margin-top: 5px;
  cursor: pointer;

  transition:
    background-color 0.3s,
    box-shadow 0.3s;

  padding: 10px 16px 10px 42px;
  border: 1px solid transparent;
  border-radius: 8px;
  box-shadow:
    0 -1px 0 rgba(0, 0, 0, 0.04),
    0 1px 1px rgba(0, 0, 0, 0.25);

  color: #757575;
  font-size: 14px;
  font-weight: 500;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell,
    'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif;

  background-color: white;
  background-repeat: no-repeat;
  background-position: 12px 11px;

  &:hover {
    box-shadow:
      0 -1px 0 rgba(0, 0, 0, 0.04),
      0 2px 4px rgba(0, 0, 0, 0.25);

    background-color: #cac9c9;
    color: black;
    border: 1px solid white;
  }

  &:active {
    background-color: #eeeeee;
  }

  &:focus {
    outline: none;
    box-shadow:
      0 -1px 0 rgba(0, 0, 0, 0.04),
      0 2px 4px rgba(0, 0, 0, 0.25),
      0 0 0 3px #c8dafc;
  }

  &:disabled {
    filter: grayscale(100%);
    background-color: #ebebeb;
    box-shadow:
      0 -1px 0 rgba(0, 0, 0, 0.04),
      0 1px 1px rgba(0, 0, 0, 0.25);
    cursor: not-allowed;
  }
  &.google-btn {
    background-image: url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTgiIGhlaWdodD0iMTgiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGcgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj48cGF0aCBkPSJNMTcuNiA5LjJsLS4xLTEuOEg5djMuNGg0LjhDMTMuNiAxMiAxMyAxMyAxMiAxMy42djIuMmgzYTguOCA4LjggMCAwIDAgMi42LTYuNnoiIGZpbGw9IiM0Mjg1RjQiIGZpbGwtcnVsZT0ibm9uemVybyIvPjxwYXRoIGQ9Ik05IDE4YzIuNCAwIDQuNS0uOCA2LTIuMmwtMy0yLjJhNS40IDUuNCAwIDAgMS04LTIuOUgxVjEzYTkgOSAwIDAgMCA4IDV6IiBmaWxsPSIjMzRBODUzIiBmaWxsLXJ1bGU9Im5vbnplcm8iLz48cGF0aCBkPSJNNCAxMC43YTUuNCA1LjQgMCAwIDEgMC0zLjRWNUgxYTkgOSAwIDAgMCAwIDhsMy0yLjN6IiBmaWxsPSIjRkJCQzA1IiBmaWxsLXJ1bGU9Im5vbnplcm8iLz48cGF0aCBkPSJNOSAzLjZjMS4zIDAgMi41LjQgMy40IDEuM0wxNSAyLjNBOSA5IDAgMCAwIDEgNWwzIDIuNGE1LjQgNS40IDAgMCAxIDUtMy43eiIgZmlsbD0iI0VBNDMzNSIgZmlsbC1ydWxlPSJub256ZXJvIi8+PHBhdGggZD0iTTAgMGgxOHYxOEgweiIvPjwvZz48L3N2Zz4=);
  }
  &.github-btn {
    background-color: #495561;
    color: white;
    background-image: url('@/shared/ui/logo/github-original.svg');
    background-size: 23px 23px;
    background-position: 8px 6px;
  }
}
</style>
