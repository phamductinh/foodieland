<template>
  <div class="more-recipes-container">
    <div class="top">
      <h2>Try this delicious recipe to make your day</h2>
      <p>
        Lorem ipsum dolor sit amet, consectetuipisicing elit, sed do eiusmod tempor incididunt ut
        labore et dolore magna aliqut enim ad minim
      </p>
    </div>

    <div class="recipes-grid">
      <RecipeCard
        v-for="(recipe, index) in recipes"
        :key="index"
        :image="recipe.image"
        :title="recipe.title"
        :time="recipe.time"
        :type="recipe.type"
        :description="recipe.description"
      >
      </RecipeCard>
    </div>
  </div>
</template>
<script setup lang="ts">
import RecipeCard from '../RecipeCard.vue'

interface Recipe {
  image: string
  title: string
  time: string
  type: string
  description?: string
}

const recipes: Recipe[] = [
  {
    image: 'src/components/icons/banner.jpeg',
    title: 'Big and Juicy Wagyu Beef Cheeseburger',
    time: '30 minutes',
    type: 'Breakfast',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit, harum! Nobis ut a inventore sequi deserunt nam labore exercitationem quam! Alias culpa sequi earum? Iste quae maxime impedit debitis beatae?',
  },
  {
    image: 'src/components/icons/banner.jpeg',
    title: 'Big and Juicy Wagyu Beef Cheeseburger',
    time: '30 minutes',
    type: 'Breakfast',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit, harum! Nobis ut a inventore sequi deserunt nam labore exercitationem quam! Alias culpa sequi earum? Iste quae maxime impedit debitis beatae?',
  },
  {
    image: 'src/components/icons/banner.jpeg',
    title: 'Big and Juicy Wagyu Beef Cheeseburger',
    time: '30 minutes',
    type: 'Breakfast',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit, harum! Nobis ut a inventore sequi deserunt nam labore exercitationem quam! Alias culpa sequi earum? Iste quae maxime impedit debitis beatae?',
  },
]
</script>
<style lang="scss">
.more-recipes-container {
  padding: 80px;

  .top {
    display: flex;
    align-items: center;

    h2 {
      width: 50%;
      color: #000;
      font-family: Inter;
      font-size: 48px;
      font-style: normal;
      font-weight: 600;
      line-height: normal;
      letter-spacing: -1.92px;
    }

    p {
      width: 50%;
      color: rgba(0, 0, 0, 0.6);
      font-family: Inter;
      font-size: 16px;
      font-style: normal;
      font-weight: 400;
      line-height: 28px;
    }
  }

  .recipes-grid {
    padding: 50px 0;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 1.5rem;

    .card {
      background: #fff;
      padding: 0;

      .card-content {
        padding: 0
      }
    }
  }
}
</style>
