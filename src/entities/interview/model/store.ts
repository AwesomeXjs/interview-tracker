import { defineStore } from 'pinia'
import { ref, computed } from 'vue'

export const useInterviewStore = defineStore('interviewStore', () => {
  const company = ref<string>('')
  const vacancyLink = ref<string>('')
  const hrName = ref<string>('')
  const contactTelegram = ref<string>('')
  const contactWhatsApp = ref<string>('')
  const contactPhone = ref<string>('')

  const interview = ref({
    company: '',
    vacancyLink: '',
    hrName: '',
    contactTelegram: '',
    contactWhatsApp: '',
    contactPhone: ''
  })

  const loading = ref<boolean>(false)

  const disabledSaveButton = computed<boolean>(() => {
    return !(company.value && vacancyLink.value && hrName.value)
  })

  return {
    company,
    vacancyLink,
    hrName,
    contactTelegram,
    contactWhatsApp,
    contactPhone,
    loading,
    disabledSaveButton,
    interview
  }
})
