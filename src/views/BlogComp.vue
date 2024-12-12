<template>
  <div class="blogs-container" ref="blog_container">
    <HomeHeader />
    <div class="blog">
      <h1>Blog & Article</h1>
      <p class="main-title">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
        labore et dolore
      </p>
      <div class="search-input">
        <div class="input-box">
          <input type="text" placeholder="Search article, news or recipe..." />
          <button>Search</button>
        </div>
      </div>

      <div class="content">
        <div class="left">
          <ListBlogs />
          <div ref="bottom"></div>
        </div>
        <div class="right" ref="sticky">
          <OtherRecipe />
          <div class="ads">
            <AdsComp />
          </div>
        </div>
      </div>
    </div>
    <SubscribeCardComp />
    <FooterComp />
  </div>
</template>
<script lang="ts" setup>
import HomeHeader from '@/components/home/HomeHeader.vue'
import OtherRecipe from '@/components/OtherRecipe.vue'
import AdsComp from '@/components/AdsComp.vue'
import SubscribeCardComp from '@/components/home/SubscribeCardComp.vue'
import FooterComp from '@/components/home/FooterComp.vue'
import ListBlogs from '@/components/ListBlogs.vue'
</script>
<style lang="scss" scoped>
.blogs-container {
  .blog {
    padding: 50px 80px;

    @media (max-width: 1023px) {
      padding: 30px;
    }

    h1 {
      color: #000;
      text-align: center;
      font-family: Inter;
      font-size: 64px;
      font-style: normal;
      font-weight: 600;
      line-height: normal;
      letter-spacing: -2.56px;
    }

    .main-title {
      color: rgba(0, 0, 0, 0.6);
      text-align: center;
      font-family: Inter;
      font-size: 16px;
      font-style: normal;
      font-weight: 400;
      line-height: 28px;
      padding: 0 80px;
      margin: 30px 0;

      @media (max-width: 767px) {
        padding: 0;
      }
    }

    .search-input {
      display: flex;
      justify-content: center;
      .input-box {
        margin-top: 50px;
        width: 50%;
        height: 80px;
        border-radius: 24px;
        border: 1px solid rgba(0, 0, 0, 0.1);
        background: #fff;
        position: relative;

        @media (max-width: 1400px) {
          width: 70%;
        }

        @media (max-width: 1023px) {
          width: 70%;
        }

        @media (max-width: 767px) {
          width: 90%;
          height: 60px;
        }

        @media (max-width: 600px) {
          width: 100%;
        }

        input {
          width: 100%;
          height: 100%;
          border-radius: 24px;
          border: none;
          outline: none;
          padding-left: 30px;

          @media (max-width: 767px) {
            padding-left: 20px;
          }
        }

        button {
          position: absolute;
          right: 10px;
          top: 10px;
          bottom: 10px;
          height: 60px;
          width: 160px;
          border-radius: 16px;
          background: #000;
          border: none;
          color: #e7f9fd;
          cursor: pointer;

          @media (max-width: 767px) {
            height: 40px;
            width: 120px;
          }

          @media (max-width: 500px) {
            height: 40px;
            width: 100px;
          }

          &:hover {
            background: #1b1b1b;
          }
        }
      }
    }

    .content {
      display: flex;
      justify-content: space-between;
      padding: 80px 0;

      @media (max-width: 767px) {
        padding: 50px 0;
      }

      .left {
        width: 65%;

        @media (max-width: 1023px) {
          width: 100%;
        }

        .items {
          display: flex;
          flex-direction: column;
          gap: 30px;
        }
      }

      .right {
        width: 32%;
        height: fit-content;
        position: sticky;
        top: 30px;

        @media (max-width: 1023px) {
          display: none;
        }

        .ads {
          margin-top: 50px;
          width: 100%;
          height: 450px;
        }
      }
    }
  }
}
</style>
