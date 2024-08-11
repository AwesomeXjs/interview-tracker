<script setup lang="ts"></script>

<template>
  <app-inline-message
    >Нет добавленных собеседований,
    <router-link class="link_first" to="/"> создайте первое!</router-link>
  </app-inline-message>
</template>

<style scoped>
.link_first {
  text-decoration: none;
  color: white;
  &:hover {
    text-decoration: underline;
  }
}
</style>
