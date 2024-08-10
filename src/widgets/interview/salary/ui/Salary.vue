<script setup lang="ts">
const salaryOneValue = defineModel('salaryOneValue')
const salaryTwoValue = defineModel('salaryTwoValue')
</script>

<template>
  <div class="flex flex-wrap gap-3 p-fluid mb-3">
    <div class="flex-auto">
      <app-input-number
        inputId="salaryFrom"
        placeholder="Зарплатная вилка от"
        v-model="salaryOneValue"
      />
    </div>
    <div class="flex-auto">
      <app-input-number
        inputId="salaryTo"
        placeholder="Зарплатная вилка до"
        v-model="salaryTwoValue"
      />
    </div>
  </div>
</template>

<style scoped></style>
