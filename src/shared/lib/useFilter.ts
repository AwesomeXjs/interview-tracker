import { computed, ref } from 'vue'

export const useFilter = (interviews: any) => {
  const selectedFilterResult = ref<string | null>('')

  const filteredInterviews = computed(() => {
    if (selectedFilterResult.value) {
      return interviews.value.filter((item: any) => item.result === selectedFilterResult.value)
    }
    return interviews.value
  })

  return { selectedFilterResult, filteredInterviews }
}
