<script setup lang="ts">
import { ref, onMounted } from 'vue'
import {
  getFirestore,
  collection,
  query,
  orderBy,
  getDocs,
  deleteDoc,
  doc,
  where
} from 'firebase/firestore'
import { useUserStore } from '@/stores/counter'
import type { IInterview } from '@/interfaces'
import AppLoader from '@/views/AppLoader.vue'

const userStore = useUserStore()
const db = getFirestore()
const interviews = ref<IInterview[]>([])
const chartData = ref()
const chartOptions = ref(null)
const isLoading = ref<boolean>(false)

const getAllInterviews = async <T extends IInterview>(): Promise<void> => {
  try {
    isLoading.value = true
    const q = query(
      collection(db, `users/${userStore.userId}/interviews`),
      orderBy('createdAt', 'desc')
    )
    const querySnapshot = await getDocs(q)
    const listInterviews: IInterview[] = querySnapshot.docs.map((doc) => doc.data() as T)
    interviews.value = [...listInterviews]
  } catch (e) {
    console.log(e)
  } finally {
    isLoading.value = false
  }
}

onMounted(async () => {
  await getAllInterviews()
  chartData.value = setChartData()
  chartOptions.value = setChartOptions()
})
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
</script>

<template>
  <h1>statistic</h1>
  <AppLoader v-if="isLoading" />
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
