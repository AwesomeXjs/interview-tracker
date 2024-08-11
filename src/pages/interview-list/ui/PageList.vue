<script setup lang="ts">
import { ref } from 'vue'
import type { IInterview } from '@/entities/interview/model'
import { AppLoader } from '@/shared/ui/my-components'
import { useFilter } from '@/shared/lib'
import { InterviewsFilter } from '@/features/interview/ui'
import { InterviewsTable } from '@/widgets/interview/interviews-table'

const interviews = ref<IInterview[]>([])

const { selectedFilterResult, filteredInterviews } = useFilter(interviews)

const isLoading = ref<boolean>(false)
</script>

<template>
  <app-dialog></app-dialog>
  <div class="flex justify-content-between align-items-center">
    <h1>Список собеседований</h1>
    <InterviewsFilter v-model:selected-filter-result="selectedFilterResult" />
  </div>

  <InterviewsTable
    v-model:filtered-interviews="filteredInterviews"
    v-model:interviews="interviews"
    v-model:is-loading="isLoading"
  />
  <AppLoader v-if="isLoading" />
</template>

<style scoped></style>
