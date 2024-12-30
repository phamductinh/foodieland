<template>
  <div class="card" @click="viewDetails(id)">
    <div class="card-image">
      <img :src="image" :alt="title" />
      <button class="card-favorite" @click.stop="toggleFavorite">
        <slot name="favorite-icon">
          <UnFavoriteIcon v-if="!isFavorite" />
          <FavoriteIcon v-else />
        </slot>
      </button>
    </div>
    <div class="card-content">
      <h3>{{ title }}</h3>
      <!-- v-show -->
      <p v-if="description" class="card-description">{{ description }}</p>
      <div class="card-info">
        <div class="time">
          <TimeIcon />
          <p>{{ time }}</p>
        </div>
        <div class="time">
          <TypeFoodIcon />
          <p>{{ type }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import TimeIcon from './icons/svgs/TimeIcon.vue'
import TypeFoodIcon from './icons/svgs/TypeFoodIcon.vue'
import FavoriteIcon from './icons/svgs/FavoriteIcon.vue'
import UnFavoriteIcon from './icons/svgs/UnFavoriteIcon.vue'
import { ref } from 'vue'
import { useRouter } from 'vue-router'
const router = useRouter()
defineProps({
  id: {
    type: Number,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  time: {
    type: String,
    required: true,
  },
  type: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: false,
  },
})

const isFavorite = ref(false)

const toggleFavorite = () => {
  isFavorite.value = !isFavorite.value
}

const viewDetails = (id: number) => {
  router.push(`/details-recipe/${id}`)
}
</script>

<style lang="scss" scoped>
.card {
  border-radius: 30px;
  background: linear-gradient(180deg, rgba(231, 249, 253, 0) 0%, #e7f9fd 100%);
  overflow: hidden;
  padding: 16px;
  cursor: pointer;
  font-family: 'Inter';

  &:hover img {
    transform: scale(1.02);
  }

  &:hover .card-content h3 {
    color: #4ad8f8;
  }

  .card-image {
    position: relative;

    img {
      width: 100%;
      height: 250px;
      display: block;
      border-radius: 30px;
      object-fit: cover;
      transition: transform 0.3s ease;

      @media (min-width: 1920px) {
        height: 400px;
      }

      @media (min-width: 1661px) and (max-width: 1919px) {
        height: 350px;
      }

      @media (min-width: 1439px) and (max-width: 1660px) {
        height: 300px;
      }
    }

    .card-favorite {
      position: absolute;
      top: 10px;
      right: 10px;
      border: none;
      cursor: pointer;
      background: transparent;
      border-radius: 50%;
    }
  }

  .card-content {
    padding: 1rem;

    h3 {
      color: #000;
      font-family: Inter;
      font-size: 24px;
      font-style: normal;
      font-weight: 600;
      line-height: 32px;
      letter-spacing: -0.96px;
      margin-top: 15px;
      transition: all 0.3s ease;
    }

    .card-description {
      color: rgba(0, 0, 0, 0.6);
      font-size: 14px;
      font-style: normal;
      font-weight: 400;
      line-height: 13.92px;
      letter-spacing: -0.054px;
      margin-top: 15px;
      display: -webkit-box;
      -webkit-box-orient: vertical;
      -webkit-line-clamp: 2;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: normal;
      cursor: pointer;
    }

    .card-info {
      display: flex;
      gap: 20px;
      margin-top: 20px;

      .time {
        display: flex;
        align-items: center;
        justify-content: center;
        width: auto;
        height: 40px;
        border-radius: 30px;
        gap: 10px;

        p {
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
}
</style>
