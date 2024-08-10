<script setup lang="ts">
const interview = defineModel<any>('interview')

const emits = defineEmits(['removeStage'])

emits('removeStage')
</script>

<template>
  <template v-if="interview.stages">
    <div v-for="(stage, index) in interview.stages" :key="index" class="interview-stage">
      <div class="flex flex-column gap-2">
        <label :for="`stage-name-${index}`">Название этапа</label>
        <app-input-text class="input mb-3" :id="`stage-name-${index}`" v-model="stage.name" />
      </div>
      <div class="flex flex-column gap-2">
        <label :for="`stage-date-${index}`">Дата прохождения этапа</label>
        <app-calendar
          class="input mb-3"
          :id="`stage-date-${index}`"
          dateFormat="dd.mm.yy"
          v-model="stage.date"
        />
      </div>
      <div class="flex flex-column gap-2">
        <label :for="`stage-description-${index}`">Комментарий</label>
        <app-textarea
          :id="`stage-description-${index}`"
          class="input mb-3"
          rows="5"
          v-model="stage.description"
        />
      </div>
      <app-button severity="danger" label="Удалить этап" @click="$emit('removeStage')" />
    </div>
  </template>
</template>

<style scoped></style>
