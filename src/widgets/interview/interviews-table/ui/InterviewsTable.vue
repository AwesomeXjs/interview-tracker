<script setup lang="ts">
import type { IInterview } from '@/entities/interview/model'
import { deleteDoc, doc, getFirestore } from 'firebase/firestore'
import { useConfirm } from 'primevue/useconfirm'
import { useUserStore } from '@/entities/user/model'
import { onMounted } from 'vue'
import { getAllInterviews } from '@/features/interview/model/getAllInterview'

const isLoading = defineModel('isLoading')
const filteredInterviews = defineModel<IInterview[] | any>('filteredInterviews')
const interviews = defineModel('interviews')

const confirm = useConfirm()
const userStore = useUserStore()
const db = getFirestore()

const confirmRemoveInterview = async (id: string): Promise<void> => {
  confirm.require({
    message: 'Вы действительно хотите удалить собеседование?',
    header: 'Подтверждение',
    icon: 'pi pi-info-circle',
    rejectLabel: 'Отмена',
    acceptLabel: 'Удалить',
    acceptClass: 'p-button-danger',
    rejectClass: 'p-button-secondary p-button-outlined',
    accept: async () => {
      isLoading.value = true
      await deleteDoc(doc(db, `users/${userStore.userId}/interviews`, id))
      await getAllInterviews(isLoading, db, userStore, interviews)
      isLoading.value = false
    }
  })
}

onMounted(async () => {
  await getAllInterviews(isLoading, db, userStore, interviews)
})
</script>

<template>
  <div class="mt-5">
    <app-inline-message v-if="!isLoading && !filteredInterviews.length"
      >Нет добавленных собеседований</app-inline-message
    >
    <app-data-table v-else :value="filteredInterviews">
      <app-column field="company" header="Компания"></app-column>
      <app-column field="hrName" header="HR"></app-column>
      <app-column field="vacancyLink" header="Вакансия">
        <template #body="slotProps">
          <a :href="slotProps.data.vacancyLink" target="_blank">Ссылка на вакансию</a>
        </template>
      </app-column>
      <app-column header="Контакты">
        <template #body="slotProps">
          <div class="contacts">
            <a
              v-if="slotProps.data.contactTelegram"
              :href="`https://t.me/${slotProps.data.contactTelegram}`"
              target="_blank"
              class="contacts__telegram"
              v-tooltip.top="slotProps.data.contactTelegram"
            >
              <span class="contacts__icons pi pi-telegram"></span> </a
            ><a
              v-if="slotProps.data.contactWhatsApp"
              :href="`https://wa.me/${slotProps.data.contactWhatsApp}`"
              target="_blank"
              class="contacts__whatsapp"
              v-tooltip.top="slotProps.data.contactWhatsApp"
            >
              <span class="contacts__icons pi pi-whatsapp"></span>
            </a>
            <a
              v-if="slotProps.data.contactPhone"
              :href="`tel:${slotProps.data.contactPhone}`"
              target="_blank"
              class="contacts__phone"
              v-tooltip="slotProps.data.contactPhone"
            >
              <span class="contacts__icons pi pi-phone"></span>
            </a>
          </div>
        </template>
      </app-column>
      <app-column header="Пройденные этапы">
        <template #body="slotProps">
          <span v-if="!slotProps.data.stages || !slotProps.data.stages.length">-</span>
          <div class="interview-stage" v-else>
            <app-badge
              v-for="(stage, i) in slotProps.data.stages"
              class="mr-2"
              :key="stage.name"
              :value="i + 1"
              rounded
              v-tooltip.top="stage.name"
            ></app-badge>
          </div>
        </template>
      </app-column>

      <app-column header="Зарплатная вилка">
        <template #body="slotProps">
          <span v-if="!slotProps.data.salaryFrom">-</span>
          <span v-else>{{ slotProps.data.salaryFrom }} - {{ slotProps.data.salaryTo }}</span>
        </template>
      </app-column>
      <app-column header="Результат">
        <template #body="slotProps">
          <span v-if="!slotProps.data.result">Не заполнено</span>
          <template v-else>
            <app-badge
              :severity="slotProps.data.result === 'Offer' ? 'success' : 'danger'"
              :value="slotProps.data.result === 'Offer' ? 'Offer' : 'Refused'"
            ></app-badge>
          </template>
        </template>
      </app-column>
      <app-column>
        <template #body="slotProps">
          <div class="flex gap-2">
            <router-link :to="`/interview/${slotProps.data.id}`">
              <app-button icon="pi pi-pencil" severity="info"></app-button>
            </router-link>
            <app-button
              icon="pi pi-trash"
              severity="danger"
              @click="confirmRemoveInterview(slotProps.data.id)"
            ></app-button>
          </div>
        </template>
      </app-column>
    </app-data-table>
  </div>
</template>

<style scoped>
.contacts {
  display: flex;
  align-items: center;
  gap: 20px;
}
.contacts__telegram {
  color: #0088cc;
}
.contacts__whatsapp {
  color: #25d366;
}
.contacts__phone {
  color: #371777;
}
.contacts__icon {
  font-size: 20px;
}
.interview-stage {
  padding: 10px;
  margin-bottom: 10px;
}
</style>
