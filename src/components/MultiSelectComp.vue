<template>
  <div class="multi-select">
    <p class="input-label">
      <span v-show="!isChooseUser">{{ $t('admin.required') }}</span
      >{{ top_label }}
    </p>
    <div class="input-container" :class="{ 'input-error': error }">
      <div class="selected-list" @click="toggleDropdown">
        <div
          v-show="!isChooseUser"
          v-for="item in selectedValues"
          :key="item.id"
          class="multi-selected-item"
        >
          {{ item.label || item.name }}
          <button @click="removeOption(item)"><i class="fa-solid fa-xmark"></i></button>
        </div>
        <input
          type="text"
          class="input-text"
          v-model="filter"
          :placeholder="placeholder"
          :style="{ width: `${remainingWidth > 100 ? remainingWidth : 100}px` }"
          @input="onFilterChange"
        />
      </div>
      <button class="up-down" @click="toggleDropdown" type="button">
        <i class="fa-solid fa-chevron-up" v-if="isDropdownOpen"></i>
        <i class="fa-solid fa-chevron-down" v-else></i>
      </button>
    </div>
    <p v-if="error" class="error-message">{{ error }}</p>

    <div v-if="isDropdownOpen" class="dropdown">
      <ul>
        <li v-for="option in filteredOptions" :key="option.id">
          <label>
            <input
              type="checkbox"
              :value="option"
              v-model="selectedValues"
              @change="updateSelectedOptions"
            />
            {{ option.label || option.name }}
          </label>
        </li>
      </ul>
    </div>
  </div>
  <div class="selected-users-box">
    <div
      v-show="isChooseUser"
      v-for="item in selectedValues"
      :key="item.code"
      class="multi-selected-item"
    >
      {{ item.label || item.name }}
      <button @click="removeOption(item)"><i class="fa-solid fa-xmark"></i></button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, watch, onMounted, onBeforeUnmount, nextTick } from 'vue'

interface Option {
  id?: number | string
  label?: string
  code?: string
  name?: string
  image?: string
  joiningDate?: string
  information?: string
}

const props = defineProps<{
  options: Option[]
  modelValue: Option[]
  placeholder?: string
  top_label?: string
  isChooseUser?: boolean
  error?: string
}>()

const isChooseUser = computed(() => props.isChooseUser ?? false)

const emit = defineEmits(['update:modelValue'])

const filter = ref('')
const isDropdownOpen = ref(false)
const selectedValues = ref<Option[]>([...props.modelValue])
const remainingWidth = ref(0)

const calculateRemainingWidth = () => {
  const container = document.querySelector('.selected-list') as HTMLElement
  const items = container?.querySelectorAll<HTMLElement>('.multi-selected-item')

  if (container && items) {
    let lastRowTop: number | null = null
    let lastRowWidth = 0

    items.forEach((item) => {
      const { top, width } = item.getBoundingClientRect()

      if (lastRowTop === null || top > lastRowTop) {
        lastRowTop = top
        lastRowWidth = width
      } else {
        lastRowWidth += width
      }
    })

    remainingWidth.value = container.offsetWidth - lastRowWidth - 50

    if (remainingWidth.value < 100) {
      remainingWidth.value = container.offsetWidth
    }
  }
}

watch(selectedValues, () => {
  nextTick(calculateRemainingWidth)
})

onMounted(() => {
  calculateRemainingWidth()
  window.addEventListener('resize', calculateRemainingWidth)
})

onBeforeUnmount(() => {
  window.removeEventListener('resize', calculateRemainingWidth)
})

const filteredOptions = computed(() =>
  props.options.filter(
    (option) =>
      (option.label && option.label.toLowerCase().includes(filter.value.toLowerCase())) ||
      (option.name && option.name.toLowerCase().includes(filter.value.toLowerCase())),
  ),
)

const onFilterChange = () => {
  if (!isDropdownOpen.value) isDropdownOpen.value = true
}

const toggleDropdown = () => {
  isDropdownOpen.value = !isDropdownOpen.value
}

const updateSelectedOptions = () => {
  emit('update:modelValue', selectedValues.value)
}

const removeOption = (item: Option) => {
  if (isChooseUser.value) {
    selectedValues.value = selectedValues.value.filter((selected) => selected.code !== item.code)
  } else {
    selectedValues.value = selectedValues.value.filter((selected) => selected.id !== item.id)
  }
  updateSelectedOptions()
}

watch(
  () => props.modelValue,
  (newValue) => {
    selectedValues.value = [...newValue]
  },
)

const closeDropdown = (event: MouseEvent) => {
  const inputElement = document.querySelector('.multi-select .input-container')
  const dropdownElement = document.querySelector('.multi-select .dropdown')

  if (
    inputElement &&
    !inputElement.contains(event.target as Node) &&
    dropdownElement &&
    !dropdownElement.contains(event.target as Node)
  ) {
    isDropdownOpen.value = false
  }
}

onMounted(() => {
  document.addEventListener('click', closeDropdown)
})

onBeforeUnmount(() => {
  document.removeEventListener('click', closeDropdown)
})
</script>

<style lang="scss" scoped>
.multi-select {
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

  .input-container {
    border: 1px solid #dcdcdc;
    border-radius: 4px;
    position: relative;
    padding: 5px;
    padding-right: 25px;
    display: flex;
    align-items: center;
    flex-wrap: wrap;

    &.input-error {
      border: 1px solid rgb(250, 105, 105);
    }

    .input-text {
      padding: 8px 12px;
      // min-width: 200px;
      border: none;
      outline: none;
      border-radius: 4px;
      font-size: 13px;
      font-family: Inter;
      font-weight: 400;
    }

    .up-down {
      background: none;
      border: none;
      cursor: pointer;
      display: flex;
      align-items: center;
      justify-content: center;
      position: absolute;
      right: 10px;
      top: 15px;

      i {
        font-size: 10px;
        opacity: 0.8;
      }
    }

    .selected-list {
      width: 100%;
      display: flex;
      align-items: center;
      flex-wrap: wrap;
      gap: 0.5rem;

      .multi-selected-item {
        background-color: #eeeeee;
        min-height: 25px;
        padding: 0.25rem 0.5rem;
        border-radius: 12px;
        display: flex;
        align-items: center;
        font-size: 14px;
        flex-shrink: 0;

        button {
          margin-left: 0.5rem;
          background: none;
          border: none;
          cursor: pointer;
        }
      }
    }
  }

  .dropdown {
    position: absolute;
    top: 110%;
    left: 0;
    right: 0;
    border: 1px solid #ccc;
    border-radius: 4px;
    background: white;
    max-height: 200px;
    overflow-y: auto;
    z-index: 10;

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

    ul {
      list-style: none;
      padding: 0;
      margin: 0;

      li {
        &:hover {
          background-color: #f5f5f5;
        }

        label {
          display: flex;
          align-items: center;
          cursor: pointer;
          font-size: 14px;
          font-weight: 300;
          padding: 0.5rem;

          input {
            margin-right: 0.5rem;
          }
        }
      }
    }
  }
}
.selected-users-box {
  width: 100%;
  padding: 10px;
  border: 1px solid #dcdcdc;
  margin-top: 20px;
  border-radius: 3px;
  max-height: 200px;
  min-height: 100px;
  overflow-y: auto;

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
}
</style>
