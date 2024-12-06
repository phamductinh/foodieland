<script setup lang="ts">
import HomeHeader from '../components/HomeHeader.vue'
import HomeBanner from '../components/HomeBanner.vue'
import CompCategory from '../components/CompCategory.vue'
</script>

<template>
  <div class="container">
    <HomeHeader />
    <HomeBanner />
    <CompCategory />
  </div>
</template>

<style scoped>
.container {
  height: 100%;
  width: 100%;
  font-family: Manrope;
  overflow: hidden;
}
</style>
