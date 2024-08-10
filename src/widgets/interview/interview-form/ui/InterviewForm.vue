<script setup lang="ts">
const companyValue = defineModel('companyValue')
const vacancyLinkValue = defineModel('vacancyLinkValue')
const hrNameValue = defineModel('hrNameValue')
const contactTelegramValue = defineModel('contactTelegramValue')
const contactWhatsAppValue = defineModel('contactWhatsAppValue')
const contactPhoneValue = defineModel('contactPhoneValue')

// const props = defineProps({
//   companyValue: {
//     type: String,
//     default: '',
//     required: true
//   },
//   vacancyLinkValue: {
//     type: String,
//     default: '',
//     required: true
//   },
//   hrNameValue: {
//     type: String,
//     default: '',
//     required: true
//   },
//   contactTelegramValue: {
//     type: String,
//     default: '',
//     required: true
//   },
//   contactWhatsAppValue: {
//     type: String,
//     default: '',
//     required: true
//   },
//   contactPhoneValue: {
//     type: String,
//     default: '',
//     required: true
//   }
// })
</script>

<template>
  <div class="flex flex-column gap-2">
    <label for="company">Компания</label>
    <app-input-text class="input mb-3" id="company" v-model="companyValue" />
  </div>
  <div class="flex flex-column gap-2">
    <label for="vacancyLink">Описание вакансии (ссылка)</label>
    <app-input-text class="input mb-3" id="vacancyLink" v-model="vacancyLinkValue" />
  </div>
  <div class="flex flex-column gap-2">
    <label for="hrName">Контакт (имя)</label>
    <app-input-text class="input mb-3" id="hrName" v-model="hrNameValue" />
  </div>
  <div class="flex flex-column gap-2">
    <label for="contactTelegram">Telegram username HR</label>
    <app-input-text class="input mb-3" id="contactTelegram" v-model="contactTelegramValue" />
  </div>
  <div class="flex flex-column gap-2">
    <label for="contactWhatsApp">WhatsApp HR</label>
    <app-input-text class="input mb-3" id="contactWhatsApp" v-model="contactWhatsAppValue" />
  </div>
  <div class="flex flex-column gap-2">
    <label for="contactPhone">Телефон HR</label>
    <app-input-text class="input mb-3" id="contactPhone" v-model="contactPhoneValue" />
  </div>
</template>

<style scoped></style>
