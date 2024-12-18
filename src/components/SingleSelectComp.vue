<template>
  <div>
    <div class="custom-select">
      <div class="input-box">
        <input
          type="text"
          v-model="inputValue"
          :placeholder="placeholder"
          readonly
          @focus="isOpen = true"
          @blur="closeDropdown"
        />
        <i class="fa-solid fa-chevron-up" v-if="isOpen"></i>
        <i class="fa-solid fa-chevron-down" v-else></i>
      </div>
      <div v-if="isOpen" class="dropdown-list">
        <div
          class="dropdown-item"
          v-for="(item, index) in options"
          :key="index"
          @click="selectItem(item)"
          :ref="item === inputValue ? 'selectedItem' : ''"
        >
          {{ item }}
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { defineProps, defineEmits, ref, watch, type PropType } from 'vue'

const props = defineProps({
  options: {
    type: Array as PropType<number[] | string[]>,
    required: true,
  },
  modelValue: {
    type: [Number, String] as PropType<number | string>,
    required: true,
  },
  placeholder: {
    type: String,
    required: true,
  },
})

const emit = defineEmits<{
  (e: 'update:modelValue', value: string | number): void
}>()

const selectedValue = ref(props.modelValue)
const inputValue = ref(props.modelValue.toString())
const isOpen = ref(false)
const selectedItemRef = ref<HTMLElement | null>(null)

const selectItem = (item: number | string) => {
  selectedValue.value = item
  inputValue.value = item.toString()
  emit('update:modelValue', item)
  isOpen.value = false
}

watch(
  () => props.modelValue,
  (newVal) => {
    inputValue.value = newVal.toString()
  },
)

const closeDropdown = () => {
  setTimeout(() => {
    isOpen.value = false
  }, 100)
}

watch(isOpen, (newVal) => {
  if (newVal && selectedItemRef.value) {
    selectedItemRef.value.scrollIntoView({
      behavior: 'smooth',
      block: 'center',
    })
  }
})
</script>

<style scoped>
.custom-select {
  position: relative;
  width: auto;

  .input-box {
    position: relative;

    input {
      width: 80px;
      padding: 12px;
      outline: none;
      border: 1px solid #dcdcdc;
      border-radius: 4px;
      font-size: 13px;
      font-family: Inter;
      font-weight: 400;
      cursor: pointer;
    }

    i {
      position: absolute;
      top: 15px;
      right: 8px;
      font-size: 10px;
      opacity: 0.8;
    }
  }
}

.dropdown-list {
  position: absolute;
  width: 100%;
  max-height: 200px;
  overflow-y: auto;
  background: #fff;
  border: 1px solid #ccc;
  margin-top: 5px;
  list-style: none;
  padding: 0;
  box-sizing: border-box;
  z-index: 2;

  &::-webkit-scrollbar {
    width: 5px;
  }

  &::-webkit-scrollbar-thumb {
    background-color: rgb(201, 201, 201);
    border-radius: 10px;
  }

  &::-webkit-scrollbar-track {
    background-color: #f1f1f1;
  }

  .dropdown-item {
    padding: 5px 8px;
    cursor: pointer;
    font-size: 14px;
    font-family: Inter;
    color: #333;

    &:hover {
      background-color: #f0f0f0;
    }
  }
}
</style>
