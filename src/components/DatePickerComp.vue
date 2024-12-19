<template>
  <div class="date-picker-container">
    <p class="input-label"><span>Required</span>{{ top_label }}</p>
    <div class="picker-box">
      <div class="item">
        <SingleSelectComp v-model="selectedDay" :options="days" placeholder="DD" :error="error" />
        <p>Day</p>
      </div>
      <div class="item">
        <SingleSelectComp
          :options="months"
          v-model="selectedMonth"
          placeholder="MM"
          :error="error"
        />
        <p>Month</p>
      </div>
      <div class="item">
        <SingleSelectComp
          :options="years"
          v-model="selectedYear"
          placeholder="YYYY"
          :error="error"
        />
        <p>Year</p>
      </div>
      <div class="item" v-if="isShowTime">
        <SingleSelectComp :options="hours" v-model="selectedHour" placeholder="HH" :error="error" />
        <p>h.</p>
      </div>
      <div class="item" v-if="isShowTime">
        <SingleSelectComp
          :options="minutes"
          v-model="selectedMinute"
          placeholder="mm"
          :error="error"
        />
        <p>min.</p>
      </div>
    </div>
    <p v-if="error" class="error-message">{{ error }}</p>
  </div>
</template>
<script lang="ts" setup>
import { computed, nextTick, ref, watch } from 'vue'
import SingleSelectComp from './SingleSelectComp.vue'

const props = defineProps<{
  top_label?: string
  label?: string
  isShowTime?: boolean
  error?: string
  resetTrigger?: boolean
}>()

const isShowTime = props.isShowTime ?? false

const emit = defineEmits<{
  (e: 'update:datetime', value: string): void
}>()

const months = Array.from({ length: 12 }, (_, i) => (i + 1).toString())
const currentYear = new Date().getFullYear()
const years = Array.from({ length: 200 }, (_, i) => (currentYear - 100 + i).toString())
const hours = Array.from({ length: 24 }, (_, i) => i.toString().padStart(2, '0'))
const minutes = Array.from({ length: 60 }, (_, i) => i.toString().padStart(2, '0'))

const selectedDay = ref('')
const selectedMonth = ref('')
const selectedYear = ref('')
const selectedHour = ref('')
const selectedMinute = ref('')
const currentDate = new Date()

nextTick(() => {
  selectedDay.value = currentDate.getDate().toString()
  selectedMonth.value = (currentDate.getMonth() + 1).toString()
  selectedYear.value = currentDate.getFullYear().toString()
  selectedHour.value = currentDate.getHours().toString().padStart(2, '0')
  selectedMinute.value = currentDate.getMinutes().toString().padStart(2, '0')
})

const getDaysInMonth = (year: number, month: number): string[] => {
  const date = new Date(year, month, 0)
  const days = date.getDate()
  return Array.from({ length: days }, (_, i) => (i + 1).toString())
}

const days = computed(() => {
  if (selectedYear.value && selectedMonth.value) {
    return getDaysInMonth(Number(selectedYear.value), Number(selectedMonth.value))
  }
  return Array.from({ length: 31 }, (_, i) => (i + 1).toString())
})

watch([selectedDay, selectedMonth, selectedYear, selectedHour, selectedMinute], () => {
  if (
    selectedDay.value &&
    selectedMonth.value &&
    selectedYear.value &&
    (isShowTime ? selectedHour.value && selectedMinute.value : true)
  ) {
    const datetime = isShowTime
      ? `${selectedYear.value}-${selectedMonth.value.padStart(2, '0')}-${selectedDay.value.padStart(2, '0')} ${selectedHour.value}:${selectedMinute.value}`
      : `${selectedYear.value}-${selectedMonth.value.padStart(2, '0')}-${selectedDay.value.padStart(2, '0')}`

    emit('update:datetime', datetime)
  }
})

watch([selectedMonth, selectedYear], () => {
  if (selectedMonth.value && selectedYear.value) {
    const daysInMonth = getDaysInMonth(Number(selectedYear.value), Number(selectedMonth.value))
    if (!daysInMonth.includes(selectedDay.value)) {
      selectedDay.value = daysInMonth[daysInMonth.length - 1]
    }
  }
})

watch(
  () => props.resetTrigger,
  (newValue) => {
    if (newValue) {
      selectedDay.value = ''
      selectedMonth.value = ''
      selectedYear.value = ''
      selectedHour.value = ''
      selectedMinute.value = ''
      emit('update:datetime', '')
    }
  },
)
</script>
<style lang="scss" scoped>
.date-picker-container {
  position: relative;
  width: 100%;
  font-family: Inter;

  .input-label {
    font-family: Inter;
    padding-bottom: 5px;
    font-size: 14px;
    color: #333;
    cursor: default;

    span {
      display: inline-block;
      font-size: 12px;
      line-height: 20px;
      font-weight: 600;
      text-align: center;
      padding: 0 5px;
      color: #fff;
      background: #627d98;
      border-radius: 4px;
      margin-right: 8px;
    }
  }

  .error-message {
    font-size: 13px;
    color: red;
    opacity: 0.8;
    font-style: italic;
    padding-top: 5px;
  }

  .picker-box {
    display: flex;
    gap: 20px;

    .item {
      display: flex;
      align-items: center;
      gap: 10px;

      p {
        font-size: 14px;
        color: #666;
      }
    }
  }
}
</style>
