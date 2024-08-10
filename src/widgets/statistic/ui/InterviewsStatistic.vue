<script setup lang="ts">
import type { IInterview } from '@/entities/interview/model'
import { onMounted } from 'vue'
import { getAllInterviews } from '@/features/interview/model/getAllInterview'
import { getFirestore } from 'firebase/firestore'
import { useUserStore } from '@/entities/user/model'

const db = getFirestore()
const userStore = useUserStore()
const interviews = defineModel<IInterview[] | any>('interviews')
const isLoading = defineModel('isLoading')
const chartData = defineModel('chartData')
const chartOptions = defineModel('chartOptions')

const setChartData = () => {
  const documentStyle = getComputedStyle(document.body)

  const data: number[] = [0, 0, 0]
  interviews.value.forEach((interviews: IInterview) => {
    if (interviews.result === 'Offer') {
      data[0] += 1
    } else if (interviews.result === 'Refusal') {
      data[1] += 1
    } else {
      data[2] += 1
    }
  })

  return {
    labels: ['Оффер', 'Отказ', 'В процессе'],
    datasets: [
      {
        data: [data[0], data[1], data[2]],
        backgroundColor: [
          documentStyle.getPropertyValue('--p-green-500'),
          documentStyle.getPropertyValue('--p-red-500'),
          documentStyle.getPropertyValue('--p-gray-500')
        ],
        hoverBackgroundColor: [
          documentStyle.getPropertyValue('--p-green-400'),
          documentStyle.getPropertyValue('--p-red-400'),
          documentStyle.getPropertyValue('--p-gray-400')
        ]
      }
    ]
  }
}

const setChartOptions = (): any => {
  const documentStyle = getComputedStyle(document.documentElement)
  const textColor = documentStyle.getPropertyValue('--p-text-color')

  return {
    plugins: {
      legend: {
        labels: {
          cutout: '60%',
          color: textColor
        }
      }
    }
  }
}

onMounted(async () => {
  await getAllInterviews(isLoading, db, userStore, interviews)
  chartData.value = setChartData()
  chartOptions.value = setChartOptions()
})
</script>

<template>
  <div class="chart-wrapper">
    <app-chart type="doughnut" :data="chartData" :options="chartOptions" class="w-30rem" />
  </div>
</template>

<style scoped>
.chart-wrapper {
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
