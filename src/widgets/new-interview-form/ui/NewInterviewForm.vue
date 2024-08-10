<script setup lang="ts">
import { useInterviewStore } from '@/entities/interview/model'

const interviewStore = useInterviewStore()
</script>

<template>
  <div>
    <app-input-text class="input mb-3" placeholder="Компания" v-model="interviewStore.company" />
    <app-input-text
      v-model="interviewStore.vacancyLink"
      class="input mb-3"
      placeholder="Описание вакансии (ссылка)"
    />
    <app-input-text
      v-model="interviewStore.hrName"
      class="input mb-3"
      placeholder="Контакт (имя)"
    />
    <app-input-text
      v-model="interviewStore.contactTelegram"
      class="input mb-3"
      placeholder="Telegram username HR"
    />
    <app-input-text
      v-model="interviewStore.contactWhatsApp"
      class="input mb-3"
      placeholder="WhatsApp телефон HR"
    />
    <app-input-text
      v-model="interviewStore.contactPhone"
      class="input mb-3"
      placeholder="Телефон HR"
    />
  </div>
</template>

<style scoped>
.input {
  width: 100%;
}
</style>
