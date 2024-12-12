<template>
  <div class="recipes-container">
    <div class="title">
      <h2>Simple and tasty recipes</h2>
      <p>
        Lorem ipsum dolor sit amet, consectetuipisicing elit, sed do eiusmod tempor incididunt ut
        labore et dolore magna aliqut enim ad minim
      </p>
    </div>
    <div class="recipes-grid">
      <RecipeCard
        v-for="(recipe, index) in recipes"
        :key="index"
        :id="recipe.id"
        :image="recipe.image"
        :title="recipe.title"
        :time="recipe.time"
        :type="recipe.type"
      >
      </RecipeCard>
      <AdsComp />
    </div>
  </div>
</template>
<script lang="ts" setup>
import RecipeCard from '../RecipeCard.vue'
import AdsComp from '../AdsComp.vue'

interface Recipe {
  id: number
  image: string
  title: string
  time: string
  type: string
}

const recipes: Recipe[] = [
  {
    id: 1,
    image: '/src/components/icons/banner.jpeg',
    title: 'Big and Juicy Wagyu Beef Cheeseburger',
    time: '30 minutes',
    type: 'Breakfast',
  },
  {
    id: 2,
    image: '/src/components/icons/banner.jpeg',
    title: 'Big and Juicy Wagyu Beef Cheeseburger',
    time: '30 minutes',
    type: 'Breakfast',
  },
]
</script>
<style lang="scss">
.recipes-container {
  width: 100%;
  height: auto;
  padding: 50px 80px;

  @media (max-width: 1023px) {
    padding: 30px;
  }

  .title {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 90px;

    @media (max-width: 1023px) {
      margin-bottom: 50px;
    }

    @media (max-width: 600px) {
      margin-bottom: 30px;
    }

    h2 {
      color: #000;
      font-family: Inter;
      font-size: 48px;
      font-style: normal;
      font-weight: 600;
      line-height: normal;
      letter-spacing: -1.92px;

      @media (max-width: 1023px) {
        font-size: 40px;
      }
    }

    p {
      color: rgba(0, 0, 0, 0.6);
      text-align: center;
      font-family: Inter;
      font-size: 16px;
      font-style: normal;
      font-weight: 400;
      line-height: 28px;
      max-width: 700px;
      margin-top: 24px;
    }
  }

  .recipes-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 1.5rem;
  }
}
</style>
