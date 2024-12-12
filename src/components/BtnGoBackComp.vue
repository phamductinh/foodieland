<template><i @click="goBack" class="fa-solid fa-arrow-left"></i></template>
<script lang="ts" setup>
import { useRouter } from 'vue-router'
const router = useRouter()
const goBack = () => {
  if (window.history.length > 1) {
    router.back()
  } else {
    router.push('/')
  }
}
</script>
<style lang="scss" scoped>
i {
  font-size: 24px;
  color: #3d3d3d;
  transition: all 0.3s ease;
  cursor: pointer;

  &:hover {
    color: #16c3f8;
    transform: scale(1.01);
  }
}
</style>
