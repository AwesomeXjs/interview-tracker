import './assets/main.css'
import 'primeicons/primeicons.css'
import 'primeflex/primeflex.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import ConfirmationService from 'primevue/confirmationservice'
import Tooltip from 'primevue/tooltip'

import PrimeVue from 'primevue/config'
import Aura from '@primevue/themes/aura'
import Menubar from 'primevue/menubar'
import Button from 'primevue/button'
import InputText from 'primevue/inputtext'
import Toast from 'primevue/toast'
import ToastService from 'primevue/toastservice'
import Card from 'primevue/card'
import DataTable from 'primevue/datatable'
import Column from 'primevue/column'
import ConfirmDialog from 'primevue/confirmdialog'
import InlineMessage from 'primevue/inlinemessage'
import InputNumber from 'primevue/inputnumber'
import Textarea from 'primevue/textarea'
import Calendar from 'primevue/calendar'
import RadioButton from 'primevue/radiobutton'
import Badge from 'primevue/badge'
import Chart from 'primevue/chart'

import App from './App.vue'
import router from './router'

import { initializeApp } from 'firebase/app'

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
app.use(PrimeVue, { theme: { preset: Aura } })
app.use(ConfirmationService)
app.directive('tooltip', Tooltip)
app.component('app-menubar', Menubar)
app.component('app-button', Button)
app.component('app-input-text', InputText)
app.component('app-toast', Toast)
app.component('app-card', Card)
app.component('app-data-table', DataTable)
app.component('app-column', Column)
app.component('app-dialog', ConfirmDialog)
app.component('app-inline-message', InlineMessage)
app.component('app-input-number', InputNumber)
app.component('app-textarea', Textarea)
app.component('app-calendar', Calendar)
app.component('app-radiobutton', RadioButton)
app.component('app-badge', Badge)
app.component('app-chart', Chart)

app.mount('#app')
