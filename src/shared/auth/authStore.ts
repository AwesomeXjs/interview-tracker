import { defineStore } from 'pinia'
import { computed, ref } from 'vue'
import { useRouter } from 'vue-router'
import { useToast } from 'primevue/usetoast'
import {
  createUserWithEmailAndPassword,
  getAuth,
  signInWithEmailAndPassword,
  signInWithPopup,
  GoogleAuthProvider,
  GithubAuthProvider
} from 'firebase/auth'
import { useUserStore } from '@/entities/user'

export const useAuthStore = defineStore('auth', () => {
  const email = ref<string>('')
  const password = ref<string>('')
  const isLogin = ref<boolean>(true)
  const isLoading = ref<boolean>(false)

  const router = useRouter()
  const toast = useToast()
  const userStore = useUserStore()

  const toggleAuth = () => {
    isLogin.value = !isLogin.value
  }

  const subtitleText = computed<string>(() => {
    return isLogin.value ? 'Аккаунта еще нет?' : 'Уже есть аккаунт?'
  })

  const linkAccountText = computed<string>(() => {
    return isLogin.value ? 'Cоздайте сейчас!' : 'Войдите в него'
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

  const signInWithGoogle = async (): Promise<void> => {
    try {
      const provider = new GoogleAuthProvider()
      const { user } = await signInWithPopup(getAuth(), provider)
      router.push('/')
    } catch (error: unknown) {
      if (error instanceof Error) {
        toast.add({ severity: 'error', summary: 'Error', detail: error.message, life: 3000 })
      }
    }
  }

  const signInWithGithub = async (): Promise<void> => {
    try {
      const provider = new GithubAuthProvider()
      await signInWithPopup(getAuth(), provider)
        .then((result) => {
          // This gives you a GitHub Access Token. You can use it to access the GitHub API.
          const credential: any = GithubAuthProvider.credentialFromResult(result)
        })
        .catch((error) => {
          // Handle Errors here.
          const errorCode = error.code
          const errorMessage = error.message
          // The email of the user's account used.
          const email = error.customData.email
          // The AuthCredential type that was used.
          const credential = GithubAuthProvider.credentialFromError(error)
          // ...
        })
      router.push('/')
    } catch (error: unknown) {
      if (error instanceof Error) {
        toast.add({ severity: 'error', summary: 'Error', detail: error.message, life: 3000 })
      }
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
    subtitleText,
    signInWithGoogle,
    signInWithGithub
  }
})
