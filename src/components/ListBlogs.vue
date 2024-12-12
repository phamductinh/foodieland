<template>
  <div class="blogs-container">
    <div class="items">
      <div
        class="item"
        v-for="(item, index) in listBlogs"
        :key="index"
        @click="viewDetails(item.id)"
      >
        <img class="blog-img" :src="item.image" alt="" />
        <div class="content">
          <h2>{{ item.title }}</h2>
          <p class="short-content">
            {{ item.short_content }}
          </p>
          <div class="infor">
            <div class="left">
              <img :src="item.author_image" alt="" />
              <p>{{ item.author_name }}</p>
            </div>
            <div class="right">
              <p>{{ item.published_date }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="bottom">
      <PaginationComp
        :totalPages="10"
        :currentPage="currentPage"
        @page-selected="handlePageSelected"
      />
    </div>
  </div>
</template>
<script lang="ts" setup>
import { ref } from 'vue'
import PaginationComp from './PaginationComp.vue'
import { useRouter } from 'vue-router'
const currentPage = ref(1)
const router = useRouter()

const handlePageSelected = (page: number) => {
  currentPage.value = page
}

const viewDetails = (id: number) => {
  router.push(`/details-blog/${id}`)
}

const listBlogs = [
  {
    id: 1,
    image: '/src/components/icons/bun.png',
    title: 'Crochet Projects for Noodle Lovers',
    short_content:
      'Lorem ipsum dolor sit amet, consectetuipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqut enim',
    author_image: '/src/components/icons/contact-us.png',
    author_name: 'Wade Warren',
    published_date: '12 November 2021',
  },
  {
    id: 2,
    image: '/src/components/icons/bun.png',
    title: 'Crochet Projects for Noodle Lovers',
    short_content:
      'Lorem ipsum dolor sit amet, consectetuipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqut enim',
    author_image: '/src/components/icons/contact-us.png',
    author_name: 'Wade Warren',
    published_date: '12 November 2021',
  },
  {
    id: 3,
    image: '/src/components/icons/bun.png',
    title: 'Crochet Projects for Noodle Lovers',
    short_content:
      'Lorem ipsum dolor sit amet, consectetuipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqut enim',
    author_image: '/src/components/icons/contact-us.png',
    author_name: 'Wade Warren',
    published_date: '12 November 2021',
  },
  {
    id: 4,
    image: '/src/components/icons/bun.png',
    title: 'Crochet Projects for Noodle Lovers',
    short_content:
      'Lorem ipsum dolor sit amet, consectetuipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqut enim',
    author_image: '/src/components/icons/contact-us.png',
    author_name: 'Wade Warren',
    published_date: '12 November 2021',
  },
  {
    id: 5,
    image: '/src/components/icons/bun.png',
    title: 'Crochet Projects for Noodle Lovers',
    short_content:
      'Lorem ipsum dolor sit amet, consectetuipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqut enim',
    author_image: '/src/components/icons/contact-us.png',
    author_name: 'Wade Warren',
    published_date: '12 November 2021',
  },
  {
    id: 6,
    image: '/src/components/icons/bun.png',
    title: 'Crochet Projects for Noodle Lovers',
    short_content:
      'Lorem ipsum dolor sit amet, consectetuipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqut enim',
    author_image: '/src/components/icons/contact-us.png',
    author_name: 'Wade Warren',
    published_date: '12 November 2021',
  },
  {
    id: 7,
    image: '/src/components/icons/bun.png',
    title: 'Crochet Projects for Noodle Lovers',
    short_content:
      'Lorem ipsum dolor sit amet, consectetuipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqut enim',
    author_image: '/src/components/icons/contact-us.png',
    author_name: 'Wade Warren',
    published_date: '12 November 2021',
  },
  {
    id: 8,
    image: '/src/components/icons/bun.png',
    title: 'Crochet Projects for Noodle Lovers',
    short_content:
      'Lorem ipsum dolor sit amet, consectetuipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqut enim',
    author_image: '/src/components/icons/contact-us.png',
    author_name: 'Wade Warren',
    published_date: '12 November 2021',
  },
]
</script>
<style lang="scss" scoped>
.blogs-container {
  width: 100%;
  height: auto;

  .items {
    display: flex;
    flex-direction: column;
    gap: 25px;

    .item {
      height: 200px;
      width: 100%;
      display: flex;
      align-items: center;
      cursor: pointer;

      @media (max-width: 767px) {
        height: 100%;
        flex-direction: column;
        align-items: start;
        gap: 15px;
      }

      &:hover {
        .blog-img {
          transform: scale(1.01);
        }

        .content h2 {
          color: #13c6f3;
        }
      }

      .blog-img {
        width: 280px;
        height: 100%;
        object-fit: cover;
        border-radius: 20px;
        transition: all 0.3s ease;

        @media (max-width: 550px) {
          width: 100%;
        }
      }

      .content {
        width: calc(100% - 280px);
        height: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        gap: 10px;
        padding-left: 20px;

        @media (max-width: 767px) {
          padding-left: 0;
          width: 100%;
        }

        h2 {
          color: #000;
          font-family: Inter;
          font-size: 24px;
          font-style: normal;
          font-weight: 600;
          line-height: normal;
          letter-spacing: -0.96px;
          display: -webkit-box;
          -webkit-box-orient: vertical;
          -webkit-line-clamp: 1;
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: normal;
          transition: all 0.3s ease;
        }

        .short-content {
          color: rgba(0, 0, 0, 0.6);
          font-family: Inter;
          font-size: 16px;
          font-style: normal;
          font-weight: 400;
          line-height: 28px;
          display: -webkit-box;
          -webkit-box-orient: vertical;
          -webkit-line-clamp: 2;
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: normal;
          max-width: 95%;
        }

        .infor {
          display: flex;
          align-items: center;

          .left {
            display: flex;
            align-items: center;
            gap: 10px;
            padding-right: 20px;
            border-right: 1px solid rgba(0, 0, 0, 0.1);

            img {
              width: 40px;
              height: 40px;
              border-radius: 50%;
              object-fit: cover;
            }

            p {
              color: #000;
              font-family: Inter;
              font-size: 16px;
              font-style: normal;
              font-weight: 700;
              line-height: normal;
              letter-spacing: -0.32px;
            }
          }

          .right {
            padding-left: 20px;

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
  }

  .bottom {
    width: 100%;
    display: flex;
    justify-content: center;
    margin-top: 100px;

    @media (max-width: 767px) {
      margin-top: 50px;
    }
  }
}
</style>
