<template>
  <div class="post-container">
    <div class="header">
      <div class="left">
        <FoodieLandIcon />
        <div class="infor">
          <p>
            Foodieland.
            <CheckIcon />
          </p>
          <span>Tokyo, Japan</span>
        </div>
      </div>
      <div class="right">
        <ThreeDotsIcon />
      </div>
    </div>
    <div class="slide">
      <swiper
        :slides-per-view="1"
        :pagination="{ type: 'fraction' }"
        :modules="modules"
        class="image-swiper mySwiper"
      >
        <swiper-slide v-for="(image, index) in image" :key="index">
          <img :src="image" alt="Post image" class="swiper-image" />
        </swiper-slide>
      </swiper>
    </div>
    <div class="actions">
      <div class="left">
        <HeardIcon />
        <CommentIcon />
        <PostIcon />
      </div>
      <div class="right">
        <BookMarkIcon />
      </div>
    </div>
    <div class="likes"><p>Liked by craig_love and 44,686 others</p></div>
    <div class="post-title">
      <p>
        Foodieland.<span>{{ title }}</span>
      </p>
    </div>
    <div class="post-date">
      <p>September 19</p>
    </div>
  </div>
</template>
<script setup lang="ts">
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Navigation, Pagination } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'
import FoodieLandIcon from './icons/svgs/FoodieLandIcon.vue'
import CheckIcon from './icons/svgs/CheckIcon.vue'
import ThreeDotsIcon from './icons/svgs/ThreeDotsIcon.vue'
import HeardIcon from './icons/svgs/HeardIcon.vue'
import CommentIcon from './icons/svgs/CommentIcon.vue'
import PostIcon from './icons/svgs/PostIcon.vue'
import BookMarkIcon from './icons/svgs/BookMarkIcon.vue'

const modules = [Navigation, Pagination]

defineProps({
  image: {
    type: Array<string>,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
})
</script>
<style lang="scss">
.post-container {
  background: #fff;

  .header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 5px 10px;

    .left {
      display: flex;
      align-items: center;
      gap: 10px;

      svg {
        cursor: pointer;
      }

      .infor {
        p {
          color: #262626;
          font-family: 'SF Pro Text';
          font-size: 10.053px;
          font-style: normal;
          font-weight: 600;
          line-height: 13.92px;
          letter-spacing: -0.077px;
          cursor: pointer;
        }

        span {
          color: #262626;
          font-family: 'SF Pro Text';
          font-size: 8.507px;
          font-style: normal;
          font-weight: 400;
          line-height: normal;
          letter-spacing: 0.054px;
          cursor: pointer;
        }
      }
    }

    .right {
      display: flex;
      align-items: center;

      svg {
        cursor: pointer;
      }
    }
  }

  .slide {
    .image-swiper {
      width: 100%;
      height: auto;
      position: relative;

      img {
        width: 100%;
        height: 300px;
        object-fit: cover;
        cursor: pointer;
      }

      .swiper-pagination-fraction {
        width: fit-content;
        height: fit-content;
        position: absolute;
        top: 10px;
        right: 15px !important;
        left: auto;
        font-size: 10px;
        padding: 4px;
        color: #f9f9f9;
        font-style: normal;
        font-weight: 400;
        line-height: normal;
        letter-spacing: 0;
        border-radius: 10.053px;
        background: rgba(18, 18, 18, 0.7);
      }
    }
  }

  .actions {
    padding: 10px;
    display: flex;
    justify-content: space-between;
    align-items: center;

    svg {
      cursor: pointer;
      transition: all 0.3s ease;

      &:hover {
        scale: 1.1;
      }
    }

    .left {
      display: flex;
      gap: 10px;
      align-items: center;
    }
  }

  .likes {
    padding: 0 10px;

    p {
      color: #262626;
      font-family: 'SF Pro Text';
      font-size: 10.053px;
      font-style: normal;
      font-weight: 400;
      line-height: 13.92px;
      letter-spacing: -0.054px;
    }
  }

  .post-title {
    padding: 10px;

    p {
      color: #262626;
      font-family: 'SF Pro Text';
      font-size: 10.053px;
      font-style: normal;
      font-weight: 600;
      line-height: 13.92px;
      letter-spacing: -0.077px;

      span {
        font-weight: 400;
        padding-left: 2px;
      }
    }
  }

  .post-date {
    padding: 0 10px 10px;

    p {
      color: rgba(0, 0, 0, 0.4);
      font-family: 'SF Pro Text';
      font-size: 8.507px;
      font-style: normal;
      font-weight: 400;
      line-height: normal;
      letter-spacing: 0.039px;
    }
  }
}
</style>
