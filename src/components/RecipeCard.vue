<template>
  <div class="card">
    <div class="card-image">
      <img :src="image" :alt="title" />
      <button class="card-favorite">
        <slot name="favorite-icon">
          <FavoriteIcon />
        </slot>
      </button>
    </div>
    <div class="card-content">
      <h3>{{ title }}</h3>
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
defineProps({
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
</script>

<style lang="scss" scoped>
.card {
  border-radius: 30px;
  background: linear-gradient(180deg, rgba(231, 249, 253, 0) 0%, #e7f9fd 100%);
  overflow: hidden;
  transition: transform 0.3s;
  padding: 16px;
  cursor: pointer;
  font-family: 'Inter';

  &:hover {
    transform: scale(1.02);
  }

  .card-image {
    position: relative;

    img {
      width: 100%;
      height: auto;
      display: block;
      border-radius: 30px;
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
