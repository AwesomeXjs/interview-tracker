<script setup lang="ts">
import { NewInterviewForm } from '@/widgets/new-interview-form'
import { AddNewInterview } from '@/features/interview'
</script>

<template>
  <div class="content-interview">
    <app-card>
      <template #title>Новое собеседование</template>
      <template #content>
        <NewInterviewForm />
        <AddNewInterview />
      </template>
    </app-card>
  </div>
</template>

<style scoped>
.content-interview {
  max-width: 600px;
  margin: auto;
}
</style>
