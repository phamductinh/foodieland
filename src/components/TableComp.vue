<template>
  <div class="board">
    <table>
      <thead>
        <tr>
          <th>
            <input type="checkbox" v-model="selectAll" @change="toggleSelectAll" />
          </th>
          <th v-for="header in headers" :key="header" :class="{ 'image-col': header === 'image' }">
            {{ $t('admin.' + header) }}
            <button
              v-if="header !== 'image' && header !== 'information'"
              class="sort-btn"
              @click="sortData(convertHeaderToKey(header))"
            >
              ⇅
            </button>
          </th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="item in items" :key="item.code">
          <td>
            <input
              type="checkbox"
              :value="item.code"
              v-model="selectedItems"
              @change="updateSelectedItems"
            />
          </td>
          <td
            v-for="key in tableKeys"
            :key="key"
            :class="{ 'image-cell': isImageKey(key, item[key]) }"
          >
            <template v-if="isDateKey(key, item[key])">
              {{ typeof item[key] === 'string' ? formatDate(item[key], $t('date-format')) : '' }}
            </template>
            <template v-else-if="isImageKey(key, item[key])">
              <img :src="item[key] as string" alt="Image" class="table-image" />
            </template>
            <template v-else>
              {{ item[key] }}
            </template>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script lang="ts" setup>
import moment from 'moment'
import { ref, watch } from 'vue'

interface Item {
  code: string
  [key: string]: string | number | boolean | undefined
}

const props = defineProps<{
  headers: string[]
  items: Item[]
  tableKeys: string[]
}>()

const isImageKey = (key: string, value: string | number | boolean | undefined): boolean => {
  if (key === 'image' && typeof value === 'string') {
    return (
      value.startsWith('blob:http') ||
      value.endsWith('.jpg') ||
      value.endsWith('.png') ||
      value.endsWith('.jpeg')
    )
  }
  return false
}

const isDateKey = (key: string, value: string | number | boolean | undefined): boolean => {
  if (typeof value === 'string' && !isNaN(Date.parse(value))) {
    return true
  }
  return false
}

const formatDate = (date: string, format: string): string => {
  return moment(date).format(format)
}

const emit = defineEmits<{
  (event: 'update:selectedItems', value: string[]): void
  (event: 'sort', key: string, order: string): void
}>()

const selectedItems = ref<string[]>([])

const selectAll = ref(false)

const toggleSelectAll = () => {
  if (selectAll.value) {
    selectedItems.value = props.items.map((item) => item.code)
  } else {
    selectedItems.value = []
  }
  emit('update:selectedItems', selectedItems.value)
}

const updateSelectedItems = () => {
  emit('update:selectedItems', selectedItems.value)
}

const convertHeaderToKey = (header: string): string => {
  return header
    .split('-')
    .map((word, index) => {
      return index === 0 ? word : word.charAt(0).toUpperCase() + word.slice(1)
    })
    .join('')
}

const sortState = ref<Record<string, 'asc' | 'desc' | null>>(
  props.tableKeys.reduce(
    (acc, header) => {
      acc[header] = null
      return acc
    },
    {} as Record<string, 'asc' | 'desc' | null>,
  ),
)

const sortData = (key: string) => {
  const currentOrder = sortState.value[key]
  const newOrder = currentOrder === 'asc' ? 'desc' : 'asc'

  sortState.value = Object.keys(sortState.value).reduce(
    (acc, header) => {
      acc[header] = header === key ? newOrder : null
      return acc
    },
    {} as Record<string, 'asc' | 'desc' | null>,
  )

  emit('sort', key, newOrder)
}

watch(selectedItems, (newSelected) => {
  if (newSelected.length === props.items.length && newSelected.length > 0) {
    selectAll.value = true
  } else {
    selectAll.value = false
  }
})

watch(
  () => props.items,
  () => {
    selectedItems.value = []
    emit('update:selectedItems', selectedItems.value)
  },
)
</script>

<style lang="scss" scoped>
table {
  width: 100%;
  border-collapse: collapse;
  margin: 20px 0;
  font-size: 14px;
  text-align: left;
  font-family: Inter;

  input[type='checkbox'] {
    cursor: pointer;
  }

  img {
    width: 40px;
    height: 40px;
    object-fit: cover;
    border-radius: 50%;
  }

  .image-col {
    width: 100px;

    img {
      width: 50px;
      height: 50px;
      object-fit: cover;
      border-radius: 50%;
    }
  }

  .sort-btn {
    padding: 0;
    margin-left: 5px;
    cursor: pointer;
    opacity: 0.5;
    background: transparent;

    &:hover {
      opacity: 1;
    }
  }

  .image-cell {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .text-center {
    text-align: center;
  }

  th,
  td {
    border: 1px solid #ddd;
    padding: 8px;
  }
  th {
    background-color: #f4f4f4;
    font-weight: bold;
  }
  tr:hover {
    background-color: #f1f1f1;
  }
}
</style>
