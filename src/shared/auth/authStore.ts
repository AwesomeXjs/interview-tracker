import { defineStore } from 'pinia'
import { computed, ref } from 'vue'
import { useRouter } from 'vue-router'
import { useToast } from 'primevue/usetoast'
import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword } from 'firebase/auth'

export const useAuthStore = defineStore('auth', () => {
  const email = ref<string>('')
  const password = ref<string>('')
  const isLogin = ref<boolean>(true)
  const isLoading = ref<boolean>(false)

  const router = useRouter()
  const toast = useToast()

  const toggleAuth = () => {
    isLogin.value = !isLogin.value
  }

  const subtitleText = computed<string>(() => {
    return isLogin.value ? 'Аккаунта еще нет?' : 'Уже есть аккаунт?'
  })

  const linkAccountText = computed<string>(() => {
    return isLogin.value ? 'Cоздайте сейчас?' : 'Войдите в него'
  })

  const submitButtonText = computed<string>(() => {
    return isLogin.value ? 'Вход' : 'Регистрация'
  })

  const signUp = async (): Promise<void> => {
    isLoading.value = true
    try {
      await createUserWithEmailAndPassword(getAuth(), email.value, password.value)
      router.push('/')
    } catch (error: unknown) {
      if (error instanceof Error) {
        toast.add({ severity: 'error', summary: 'Error', detail: error.message, life: 3000 })
      }
    } finally {
      isLoading.value = false
    }
  }

  const signIn = async (): Promise<void> => {
    isLoading.value = true
    try {
      await signInWithEmailAndPassword(getAuth(), email.value, password.value)
      router.push('/')
    } catch (error: unknown) {
      if (error instanceof Error) {
        toast.add({ severity: 'error', summary: 'Error', detail: error.message, life: 3000 })
      }
    } finally {
      isLoading.value = false
    }
  }

  const submitForm = async (): Promise<void> => {
    if (isLogin.value) {
      await signIn()
    } else {
      await signUp()
    }
  }

  return {
    isLogin,
    isLoading,
    email,
    password,
    submitButtonText,
    submitForm,
    toggleAuth,
    linkAccountText,
    subtitleText
  }
})
