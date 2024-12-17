<template>
  <div class="date-chooser">
    <input
      class="input-text"
      type="text"
      :placeholder="$t('date-format')"
      readonly
      :value="formatDate(date, $t('date-format'))"
      @click="showDatePicker"
    />
    <input
      ref="dateInputRef"
      class="input-date"
      :value="date"
      type="date"
      @input="updateDate($event)"
      id="joiningDate"
    />
    <i class="fa-solid fa-calendar-days" @click="showDatePicker"></i>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import moment from 'moment'

defineProps({
  date: {
    type: String,
    required: true,
  },
})

const emit = defineEmits<{
  (event: 'update:date', value: string): void
}>()

const dateInputRef = ref<HTMLInputElement | null>(null)

const updateDate = (event: Event) => {
  const input = event.target as HTMLInputElement
  emit('update:date', input.value)
}

const showDatePicker = () => {
  if (dateInputRef.value) {
    dateInputRef.value.showPicker()
  }
}

const formatDate = (date: string, format: string): string => {
  if (date && format) {
    return moment(date).format(format)
  } else {
    return ''
  }
}
</script>

<style lang="scss" scoped>
.date-chooser {
  position: relative;
  width: 100%;

  input {
    width: 100%;
  }

  .input-text {
    position: absolute;
    top: 0;
    right: 0;
    padding: 8px;
    border: 1px solid #ddd;
    outline: none;
    border-radius: 4px;
    font-size: 13px;
    font-family: Inter;
    z-index: 2;
    cursor: pointer;
  }

  .input-date {
    opacity: 0;
  }

  .fa-calendar-days {
    position: absolute;
    top: 10px;
    right: 10px;
    z-index: 2;
    font-size: 14px;
    color: #646464;
  }
}
</style>
