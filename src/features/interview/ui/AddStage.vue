<script setup lang="ts">
const interview = defineModel('interview')
const addStage = () => {
  if (interview.value) {
    if (!interview.value.stages) {
      interview.value.stages = []
    }
    interview.value.stages.push({ name: '', date: null, description: '' })
  }
}
</script>

<template>
  <app-button
    label="Добавить этап"
    severity="info"
    icon="pi pi-plus"
    class="mb-3"
    @click="addStage"
  />
</template>

<style scoped></style>
