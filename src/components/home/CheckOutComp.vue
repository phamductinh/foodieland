<template>
  <div class="check-out-container">
    <div class="content">
      <div class="top">
        <h2>Check out @foodieland on Instagram</h2>
        <p class="desc">
          Lorem ipsum dolor sit amet, consectetuipisicing elit, sed do eiusmod tempor incididunt ut
          labore et dolore magna aliqut enim ad minim
        </p>
      </div>
      <div class="posts-slide">
        <PostIgComp
          v-for="(item, index) in posts"
          :key="index"
          :image="item.image"
          :title="item.title"
        />
      </div>
      <div class="btn">
        <button class="btn-check-out">
          Visit Our Instagram
          <InstagramIcon />
        </button>
      </div>
    </div>
  </div>
</template>
<script lang="ts" setup>
import PostIgComp from '../PostIgComp.vue'
import InstagramIcon from '../icons/svgs/InstagramIcon.vue'
interface Post {
  image: Array<string>
  title: string
}

const posts: Post[] = [
  {
    image: [
      'src/components/icons/banner.jpeg',
      'src/components/icons/banner.jpeg',
      'src/components/icons/banner.jpeg',
    ],
    title: 'The vegetables dishes need to have certain vitamin for those people',
  },
  {
    image: [
      'src/components/icons/banner.jpeg',
      'src/components/icons/banner.jpeg',
      'src/components/icons/banner.jpeg',
    ],
    title: 'The vegetables dishes need to have certain vitamin for those people',
  },
  {
    image: [
      'src/components/icons/banner.jpeg',
      'src/components/icons/banner.jpeg',
      'src/components/icons/banner.jpeg',
    ],
    title: 'The vegetables dishes need to have certain vitamin for those people',
  },
  {
    image: [
      'src/components/icons/banner.jpeg',
      'src/components/icons/banner.jpeg',
      'src/components/icons/banner.jpeg',
    ],
    title: 'The vegetables dishes need to have certain vitamin for those people',
  },
]
</script>
<style lang="scss">
.check-out-container {
  background: linear-gradient(180deg, rgba(231, 249, 253, 0) 0%, #e7f9fd 100%);
  width: 100%;
  height: auto;

  .content {
    padding: 80px;

    @media (max-width: 1023px) {
      padding: 50px 30px;
    }

    .top {
      display: flex;
      flex-direction: column;
      align-items: center;

      h2 {
        color: #000;
        text-align: center;
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
        max-width: 800px;
        margin: 24px 0;
      }
    }

    .posts-slide {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
      gap: 1.5rem;
    }

    .btn {
      display: flex;
      justify-content: center;
      margin-top: 80px;

      @media (max-width: 1023px) {
        margin-top: 50px;
      }

      .btn-check-out {
        width: 229px;
        height: 60px;
        border-radius: 16px;
        background: #000;
        color: #e7f9fd;
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 15px;
        border: none;
        cursor: pointer;

        &:hover {
          background: #1b1b1b;
        }
      }
    }
  }
}
</style>
