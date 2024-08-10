import { computed, ref } from 'vue'
import type { IInterview } from '@/entities/interview/model/interfaces'

export const useFilter = (interviews: any) => {
  const selectedFilterResult = ref<string | null>('')

  const filteredInterviews = computed(() => {
    if (selectedFilterResult.value) {
      return interviews.value.filter(
        (item: IInterview) => item.result === selectedFilterResult.value
      )
    }
    return interviews.value
  })

  return { selectedFilterResult, filteredInterviews }
}
