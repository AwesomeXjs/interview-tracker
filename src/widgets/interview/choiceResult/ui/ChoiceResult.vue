<script setup lang="ts">
const interview = defineModel<any>('interview')
</script>

<template>
  <div class="flex flex-wrap gap-3 mb-3">
    <div class="flex align-items-center">
      <app-radiobutton
        inputId="interviewResult1"
        name="result"
        value="Refusal"
        v-model="interview.result"
      />
      <label for="interviewResult1" class="ml-2">Отказ</label>
    </div>
    <div class="flex align-items-center">
      <app-radiobutton
        inputId="interviewResult2"
        name="result"
        value="Offer"
        v-model="interview.result"
      />
      <label for="interviewResult2" class="ml-2">Оффер</label>
    </div>
  </div>
</template>

<style scoped></style>
