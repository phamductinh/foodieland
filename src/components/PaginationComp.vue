<template>
  <nav class="pagination-container">
    <ul class="pagination">
      <li
        v-for="page in pages"
        :key="page"
        :class="{ active: page === currentPage }"
        @click="selectPage(page)"
      >
        {{ page }}
      </li>
      <li v-if="totalPages > pages.length">...</li>
      <li @click="nextPage" :class="{ disabled: currentPage >= totalPages }">{{ ')' }}</li>
    </ul>
  </nav>
</template>

<script lang="ts" setup>
import { computed, defineProps, defineEmits } from 'vue'

const props = defineProps<{
  totalPages: number
  currentPage: number
}>()

const emit = defineEmits<{
  (e: 'page-selected', page: number): void
}>()

const pages = computed(() => {
  const result = []
  for (let i = 1; i <= Math.min(props.totalPages, 5); i++) {
    result.push(i)
  }
  return result
})

const selectPage = (page: number) => {
  emit('page-selected', page)
}

const nextPage = () => {
  if (props.currentPage < props.totalPages) {
    emit('page-selected', props.currentPage + 1)
  }
}
</script>

<style scoped>
.pagination-container {
  width: fit-content;

  .pagination {
    display: flex;
    list-style: none;
    padding: 0;
    gap: 10px;

    li {
      width: 64px;
      height: 64px;
      border-radius: 16px;
      display: flex;
      align-items: center;
      justify-content: center;
      cursor: pointer;
      color: #000;
      text-align: center;
      font-family: Inter;
      font-size: 18px;
      font-style: normal;
      font-weight: 700;
      line-height: normal;
      letter-spacing: -0.36px;
      border: 1px solid rgba(0, 0, 0, 0.1);

      @media (max-width: 767px) {
        height: 40px;
        width: 40px;
        font-size: 16px;
      }

      &:hover {
        background-color: #d4d4d4;
      }

      &.active {
        background-color: black;
        color: white;
      }
    }
  }
}
</style>
