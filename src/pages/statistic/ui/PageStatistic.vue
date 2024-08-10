<script setup lang="ts">
import { ref } from 'vue'
import type { IInterview } from '@/entities/interview/model'
import { AppLoader } from '@/shared/ui/my-components'
import { InterviewsStatistic } from '@/widgets/statistic'

const interviews = ref<IInterview[]>([])
const chartData = ref()
const chartOptions = ref<any>(null)
const isLoading = ref<boolean>(false)
</script>

<template>
  <h1>statistic</h1>
  <AppLoader v-if="isLoading" />
  <InterviewsStatistic
    v-model:interviews="interviews"
    v-model:chart-data="chartData"
    v-model:chart-options="chartOptions"
    v-model:is-loading="isLoading"
  />
</template>

<style scoped></style>
