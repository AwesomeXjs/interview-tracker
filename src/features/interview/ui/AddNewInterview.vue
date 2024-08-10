<script setup lang="ts">
import { type IInterview, useInterviewStore } from '@/entities/interview/model'
import { v4 as uuidv4 } from 'uuid'
import { doc, getFirestore, setDoc } from 'firebase/firestore'
import { useUserStore } from '@/entities/user/model'
import { useRouter } from 'vue-router'

const interviewStore = useInterviewStore()
const userStore = useUserStore()
const router = useRouter()
const db = getFirestore()

const addNewInterview = async (): Promise<void> => {
  interviewStore.loading = true
  const payload: IInterview = {
    id: uuidv4(),
    company: interviewStore.company,
    vacancyLink: interviewStore.vacancyLink,
    hrName: interviewStore.hrName,
    contactTelegram: interviewStore.contactTelegram,
    contactWhatsApp: interviewStore.contactWhatsApp,
    contactPhone: interviewStore.contactPhone,
    createdAt: new Date()
  }

  if (userStore.userId) {
    await setDoc(doc(db, `users/${userStore.userId}/interviews`, payload.id), payload).then(() => {
      router.push('/list')
    })
  }
  interviewStore.loading = false
}
</script>

<template>
  <app-button
    @click="addNewInterview"
    label="Создать собеседование"
    :disabled="interviewStore.disabledSaveButton"
    :loading="interviewStore.loading"
  ></app-button>
</template>

<style scoped></style>
