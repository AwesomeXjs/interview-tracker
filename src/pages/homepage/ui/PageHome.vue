<script setup lang="ts">
import { AddNewInterview } from '@/features/interview/ui'
import InterviewForm from '@/widgets/interview/interview-form/ui/InterviewForm.vue'
import { useInterviewStore } from '@/entities/interview/model'

const interviewStore = useInterviewStore()
</script>

<template>
  <div class="content-interview">
    <app-card>
      <template #title>Новое собеседование</template>
      <template #content>
        <InterviewForm
          v-model:company-value="interviewStore.company"
          v-model:contact-phone-value="interviewStore.contactPhone"
          v-model:contact-telegram-value="interviewStore.contactTelegram"
          v-model:hr-name-value="interviewStore.hrName"
          v-model:vacancy-link-value="interviewStore.vacancyLink"
          v-model:contact-whats-app-value="interviewStore.contactWhatsApp"
        />
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
