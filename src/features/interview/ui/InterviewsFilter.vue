<script setup lang="ts">
const selectedFilterResult = defineModel<string | null>('selectedFilterResult')
</script>

<template>
  <div class="flex align-items-center">
    <div class="flex align-items-center mr-5">
      <app-radiobutton
        inputId="interviewResult1"
        name="result"
        value="Offer"
        v-model="selectedFilterResult"
      />
      <label for="interviewResult1" class="ml-2">Оффер</label>
    </div>
    <div class="flex align-items-center mr-5">
      <app-radiobutton
        inputId="interviewResult1"
        name="result"
        value="Refusal"
        v-model="selectedFilterResult"
      />
      <label for="interviewResult1" class="ml-2">Отказ</label>
    </div>
    <app-button
      :disabled="!selectedFilterResult"
      @click="selectedFilterResult = null"
      severity="danger"
      class="mr-5"
      >Сбросить</app-button
    >
  </div>
</template>

<style scoped></style>
