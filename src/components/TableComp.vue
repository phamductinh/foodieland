<template>
  <div class="board">
    <table>
      <thead>
        <tr>
          <th>
            <input type="checkbox" v-model="selectAll" @change="toggleSelectAll" />
          </th>
          <th v-for="header in headers" :key="header">{{ header }}</th>
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
          <td v-for="key in tableKeys" :key="key">
            <template v-if="isImageKey(key, item[key])">
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
import { defineProps, ref, watch } from 'vue'

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

const emit = defineEmits<{
  (event: 'update:selectedItems', value: string[]): void
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

watch(selectedItems, (newSelected) => {
  if (newSelected.length === props.items.length) {
    selectAll.value = true
  } else {
    selectAll.value = false
  }
})
</script>

<style lang="scss" scoped>
table {
  width: 100%;
  border-collapse: collapse;
  margin: 20px 0;
  font-size: 14px;
  text-align: left;
  font-family: Inter;

  img {
    width: 40px;
    height: 40px;
    object-fit: cover;
    border-radius: 50%;
  }

  .image-cell {
    display: flex;
    align-items: center;
    gap: 15px;

    img {
      width: 40px;
      height: 40px;
      object-fit: cover;
      border-radius: 50%;
    }
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
