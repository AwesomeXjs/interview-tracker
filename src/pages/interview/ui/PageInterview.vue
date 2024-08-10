<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { useRoute } from 'vue-router'
import { getFirestore, doc, updateDoc } from 'firebase/firestore'
import { useUserStore } from '@/entities/user/model'
import type { IInterview } from '@/entities/interview/model/interfaces'
import { AppLoader } from '@/shared/ui/my-components'
import { getData } from '@/features/interview/model'
import { Salary } from '@/widgets/interview/salary'
import { ChoiceResult } from '@/widgets/interview/choiceResult'
import { InterviewForm } from '@/widgets/interview/interview-form'
import { InterviewStages } from '@/widgets/interview/stages'

const db = getFirestore()
const userStore = useUserStore()
const route = useRoute()

const isLoading = ref<boolean>(true)
const interview = ref<IInterview>()

const docref = doc(db, `users/${userStore.userId}/interviews`, route.params.id as string)

const saveInterview = async (): Promise<void> => {
  isLoading.value = true
  await updateDoc(docref, { ...interview.value })
  await getData(docref, interview, isLoading)
}

const removeStage = (index: number) => {
  if (interview.value) {
    if (interview.value.stages) {
      interview.value.stages.splice(index, 1)
    }
  }
}

const addStage = () => {
  if (interview.value) {
    if (!interview.value.stages) {
      interview.value.stages = []
    }
    interview.value.stages.push({ name: '', date: null, description: '' })
  }
}

onMounted(async () => await getData(docref, interview, isLoading))
</script>

<template>
  <AppLoader v-if="isLoading" />
  <div class="content-interview" v-else-if="interview?.id && !isLoading">
    <app-card>
      <template #title>Собеседование в компанию {{ interview.company }}</template>
      <template #content>
        <InterviewForm
          v-model:company-value="interview.company"
          v-model:contact-phone-value="interview.contactPhone"
          v-model:contact-telegram-value="interview.contactTelegram"
          v-model:hr-name-value="interview.hrName"
          v-model:vacancy-link-value="interview.vacancyLink"
          v-model:contact-whats-app-value="interview.contactWhatsApp"
        />
        <Salary
          v-model:salary-two-value="interview.salaryTo"
          v-model:salary-one-value="interview.salaryFrom"
        />

        <app-button
          label="Добавить этап"
          severity="info"
          icon="pi pi-plus"
          class="mb-3"
          @click="addStage"
        />
        <InterviewStages v-model:interview="interview" @remove-stage="removeStage" />
        <ChoiceResult v-model:interview="interview" />
        <app-button label="Сохранить" icon="pi pi-save" @click="saveInterview" />
      </template>
    </app-card>
  </div>
</template>

<style scoped>
.content-interview {
  max-width: 600px;
  margin: auto;
}
.input {
  width: 100%;
}
.interview-stage {
  border: 1px solid #ccc;
  border-radius: 6px;
  padding: 10px;
  margin-bottom: 10px;
}
</style>
