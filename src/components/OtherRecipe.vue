<template>
  <h2>Other Recipe</h2>
  <div class="other-recipe">
    <div class="item" v-for="(recipe, index) in recipes" :key="index">
      <img :src="recipe.image" alt="" />
      <div class="infor">
        <div class="title">{{ recipe.title }}</div>
        <span class="author">By {{ recipe.author }}</span>
      </div>
    </div>
  </div>
</template>
<script lang="ts" setup>
interface Recipe {
  image: string
  title: string
  author: string
}

const recipes: Recipe[] = [
  {
    image: '/src/components/icons/banner/icon1.png',
    title: 'Chicken Meatballs with Cream Cheese',
    author: 'Andreas Paula',
  },
  {
    image: '/src/components/icons/banner/icon1.png',
    title: 'Vegetarian Pizza with Extra Cheese',
    author: 'Emma Watson',
  },
  {
    image: '/src/components/icons/banner/icon1.png',
    title: 'Beef Steak with Garlic Butter',
    author: 'James Oliver',
  },
]
</script>
<style lang="scss" scoped>
h2 {
  color: #000;
  font-family: Inter;
  font-size: 32px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  letter-spacing: -1.28px;
  padding-bottom: 10px;
}

.other-recipe {
  width: 100%;

  .item {
    display: flex;
    align-items: center;
    margin: 20px 0;
    cursor: pointer;

    &:hover {
      img {
        transform: scale(1.02);
      }

      .infor .title {
        color: rgb(48, 184, 172);
      }
    }

    img {
      width: 50%;
      height: 100px;
      border-radius: 20px;
      transition: all 0.3s ease;
    }

    .infor {
      width: 50%;
      display: flex;
      flex-direction: column;
      gap: 15px;
      justify-content: center;
      padding-left: 10px;

      .title {
        color: #000;
        font-family: Inter;
        font-size: 20px;
        font-style: normal;
        font-weight: 600;
        line-height: 28px;
        letter-spacing: -0.8px;
        display: -webkit-box;
        -webkit-box-orient: vertical;
        -webkit-line-clamp: 2;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: normal;
      }

      .author {
        color: rgba(0, 0, 0, 0.6);
        font-family: Inter;
        font-size: 14px;
        font-style: normal;
        font-weight: 500;
        line-height: normal;
        letter-spacing: -0.28px;
      }
    }
  }
}
</style>
