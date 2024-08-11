import './main.css'
import 'primeicons/primeicons.css'
import 'primeflex/primeflex.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import ConfirmationService from 'primevue/confirmationservice'
import Tooltip from 'primevue/tooltip'
import PrimeVue from 'primevue/config'
import Aura from '@primevue/themes/aura'

import ToastService from 'primevue/toastservice'
import { initializeApp } from 'firebase/app'

import App from './App.vue'
import router from './providers/router'
import { primeComponents } from '@/shared/ui/prime-vue-components'

const firebaseConfig = {
  apiKey: import.meta.env.VITE_API_KEY,
  authDomain: import.meta.env.VITE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_STORAGE,
  messagingSenderId: import.meta.env.VITE_MESSAGING,
  appId: import.meta.env.VITE_APP_ID
}

initializeApp(firebaseConfig)

const app = createApp(App)

app.use(ToastService)
app.use(createPinia())
app.use(router)
app.use(PrimeVue, {
  theme: {
    preset: Aura
  }
})
app.use(ConfirmationService)
app.directive('tooltip', Tooltip)

primeComponents.forEach((el) => {
  app.component(el.name, el.component)
})

export { app as application }
