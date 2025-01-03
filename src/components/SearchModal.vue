<template>
  <div class="modal" v-if="isVisible">
    <h2 class="modal-title">{{ $t('admin.' + title) }}</h2>
    <div class="modal-content">
      <template v-if="type === 'text'">
        <input v-model="textValue" type="text" class="input-text" :placeholder="$t('admin.name')" />
      </template>
      <template v-else-if="type === 'code'">
        <input v-model="codeValue" type="text" class="input-text" :placeholder="$t('admin.code')" />
      </template>
      <template v-else-if="type === 'range'">
        <div class="input-range">
          <DateChooser
            :date="rangeValue.start"
            :placeholder="$t('date-format')"
            @update:date="rangeValue.start = $event"
          />
          <span>{{ $t('admin.to') }}</span>
          <DateChooser
            :date="rangeValue.end"
            :placeholder="$t('date-format')"
            @update:date="rangeValue.end = $event"
          />
        </div>
      </template>
    </div>
    <div class="modal-actions">
      <button @click="closeModal" class="btn btn-cancel">{{ $t('admin.cancel') }}</button>
      <button @click="handleSubmit" class="btn btn-submit">{{ $t('admin.search') }}</button>
    </div>
    <i class="fa-solid fa-xmark" @click="closeModal"></i>
  </div>
</template>

<script lang="ts" setup>
import { ref, watch } from 'vue'
import DateChooser from './DateChooser.vue'

interface RangeValue {
  start: string
  end: string
}

const props = defineProps<{
  isVisible: boolean
  title: string
  type: 'text' | 'range' | 'code'
  searchTermText: string
  searchTermCode: string
  searchTermStartDate: string
  searchTermEndDate: string
}>()

const emit = defineEmits<{
  (e: 'submit', payload: SearchPayload): void
  (e: 'cancel'): void
}>()

const textValue = ref<string>('')
const codeValue = ref<string>('')
const rangeValue = ref<RangeValue>({ start: '', end: '' })
type SearchPayload = { searchText: string } | { searchCode: string } | { searchRange: RangeValue }

watch(
  () => props.searchTermText,
  (newVal) => {
    if (props.type === 'text') textValue.value = newVal
  },
)

watch(
  () => props.searchTermCode,
  (newVal) => {
    if (props.type === 'code') codeValue.value = newVal
  },
)

watch(
  () => props.searchTermStartDate,
  (newVal) => {
    if (props.type === 'range') rangeValue.value.start = newVal
  },
)

watch(
  () => props.searchTermEndDate,
  (newVal) => {
    if (props.type === 'range') rangeValue.value.end = newVal
  },
)

const handleSubmit = () => {
  let payload: SearchPayload = { searchText: '' }
  if (props.type === 'text') {
    if (!textValue.value.trim()) {
      return
    }
    payload = { searchText: textValue.value }
  }
  if (props.type === 'code') {
    if (!codeValue.value.trim()) {
      return
    }
    payload = { searchCode: codeValue.value }
  }
  if (props.type === 'range') {
    if (!rangeValue.value.start || !rangeValue.value.end) {
      return
    }
    payload = { searchRange: rangeValue.value }
  }
  emit('submit', payload)
}

const closeModal = () => {
  emit('cancel')
}
</script>

<style lang="scss" scoped>
.modal {
  background: white;
  padding: 1.5rem;
  border-radius: 8px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  width: 400px;
  font-family: Inter;
  position: relative;

  .modal-title {
    font-size: 20px;
    margin-bottom: 2rem;
    font-weight: 300;
  }

  .fa-xmark {
    position: absolute;
    top: 20px;
    right: 20px;
    font-size: 20px;
    cursor: pointer;
    transition: all 0.3s ease;

    &:hover {
      transform: scale(1.02);
    }
  }

  .modal-content {
    margin-bottom: 2rem;

    .input-text {
      width: 100%;
      padding: 0.7rem;
      font-size: 1rem;
      border: 1px solid #ccc;
      outline: none;
      border-radius: 4px;
      color: #333;
    }

    .input-range {
      display: flex;
      align-items: center;
      justify-content: space-between;

      input {
        width: 43%;
        padding: 0.5rem;
        font-size: 14px;
        border: 1px solid #ccc;
        border-radius: 4px;
        color: #333;
        font-family: Inter;
        outline: none;
      }

      span {
        margin: 0 0.5rem;
        font-size: 1rem;
      }
    }
  }

  .modal-actions {
    display: flex;
    justify-content: flex-end;
    gap: 10px;

    .btn {
      padding: 0.5rem 1rem;
      border: none;
      border-radius: 4px;
      font-size: 1rem;
      cursor: pointer;
      box-sizing: border-box;

      &.btn-submit {
        background-color: #dae2ec;
        font-weight: 600;
        color: #617d98;

        &:hover {
          outline: 1px solid #727272;
        }
      }

      &.btn-cancel {
        background: transparent;
        color: #727272;

        &:hover {
          outline: 1px solid #727272;
        }
      }
    }
  }
}
</style>
