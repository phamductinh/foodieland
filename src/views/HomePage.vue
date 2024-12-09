<script setup lang="ts">
import HomeHeader from '../components/home/HomeHeader.vue'
import HomeBanner from '../components/home/HomeBanner.vue'
import CompCategory from '../components/home/CompCategory.vue'
import ListRecipes from '../components/home/ListRecipes.vue'
import LearnMoreComp from '@/components/home/LearnMoreComp.vue'
import CheckOutComp from '@/components/home/CheckOutComp.vue'
import MoreRecipesComp from '@/components/home/MoreRecipesComp.vue'
import SubscribeCardComp from '@/components/home/SubscribeCardComp.vue'
import FooterComp from '@/components/home/FooterComp.vue'
</script>

<template>
  <div class="container">
    <HomeHeader />
    <HomeBanner />
    <CompCategory />
    <ListRecipes />
    <LearnMoreComp />
    <CheckOutComp />
    <MoreRecipesComp />
    <SubscribeCardComp />
    <FooterComp />
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
