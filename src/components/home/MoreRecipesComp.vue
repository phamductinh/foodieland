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
        :id="recipe.id"
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
import { eventBus } from '@/utils/eventBus'
import { ref, watchEffect } from 'vue'

interface Recipe {
  id: number
  image: string
  title: string
  time: string
  type: string
  description?: string
}

watchEffect(() => {
  const formData = eventBus.listen()
  if (formData) {
    const imageUrl: string = formData.image
      ? formData.image instanceof File
        ? URL.createObjectURL(formData.image)
        : formData.image
      : ''

    recipes.value.push({
      id: recipes.value.length + 1,
      image: imageUrl,
      title: formData.title,
      time: formData.time,
      type: formData.type,
      description: formData.description,
    })
  }
})

const recipes = ref<Recipe[]>([
  {
    id: 1,
    image: '/src/components/icons/banner.jpeg',
    title: 'Big and Juicy Wagyu Beef Cheeseburger',
    time: '30 minutes',
    type: 'Breakfast',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit, harum! Nobis ut a inventore sequi deserunt nam labore exercitationem quam! Alias culpa sequi earum? Iste quae maxime impedit debitis beatae?',
  },
  {
    id: 2,
    image: '/src/components/icons/banner.jpeg',
    title: 'Big and Juicy Wagyu Beef Cheeseburger',
    time: '30 minutes',
    type: 'Breakfast',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit, harum! Nobis ut a inventore sequi deserunt nam labore exercitationem quam! Alias culpa sequi earum? Iste quae maxime impedit debitis beatae?',
  },
  {
    id: 3,
    image: '/src/components/icons/banner.jpeg',
    title: 'Big and Juicy Wagyu Beef Cheeseburger',
    time: '30 minutes',
    type: 'Breakfast',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit, harum! Nobis ut a inventore sequi deserunt nam labore exercitationem quam! Alias culpa sequi earum? Iste quae maxime impedit debitis beatae?',
  },
])
</script>
<style lang="scss">
.more-recipes-container {
  padding: 80px;

  @media (max-width: 1023px) {
    padding: 30px;
  }

  .top {
    display: flex;
    align-items: center;

    @media (max-width: 1023px) {
      flex-direction: column;
      align-items: start;
    }

    h2 {
      width: 50%;
      color: #000;
      font-family: Inter;
      font-size: 48px;
      font-style: normal;
      font-weight: 600;
      line-height: normal;
      letter-spacing: -1.92px;

      @media (max-width: 1023px) {
        width: 80%;
        font-size: 40px;
      }
    }

    p {
      width: 50%;
      color: rgba(0, 0, 0, 0.6);
      font-family: Inter;
      font-size: 16px;
      font-style: normal;
      font-weight: 400;
      line-height: 28px;
      padding-left: 10px;

      @media (max-width: 1023px) {
        width: 80%;
        padding-left: 0;
        padding-top: 15px;
      }
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
        padding: 0;
      }
    }
  }
}
</style>
