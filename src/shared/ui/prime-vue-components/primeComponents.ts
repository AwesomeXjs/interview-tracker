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
import Menubar from 'primevue/menubar'
import Button from 'primevue/button'
import InputText from 'primevue/inputtext'
import Toast from 'primevue/toast'

export const primeComponents = [
  { name: 'app-menubar', component: Menubar },
  { name: 'app-button', component: Button },
  { name: 'app-input-text', component: InputText },
  { name: 'app-toast', component: Toast },
  { name: 'app-card', component: Card },
  { name: 'app-data-table', component: DataTable },
  { name: 'app-column', component: Column },
  { name: 'app-dialog', component: ConfirmDialog },
  { name: 'app-inline-message', component: InlineMessage },
  { name: 'app-input-number', component: InputNumber },
  { name: 'app-textarea', component: Textarea },
  { name: 'app-calendar', component: Calendar },
  { name: 'app-radiobutton', component: RadioButton },
  { name: 'app-badge', component: Badge },
  { name: 'app-chart', component: Chart }
]
