<template>
  <div class="blog-container">
    <HomeHeader />
    <div class="content">
      <div class="go-back">
        <BtnGoBackComp />
      </div>
      <h1>Full Guide to Becoming a Professional Chef</h1>
      <div class="author-infor">
        <div class="left">
          <img src="/src/components/icons/contact-us.png" alt="" />
          <p>John Smith</p>
        </div>
        <div class="right">
          <p>15 March 2022</p>
        </div>
      </div>
      <div class="short-content">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur ac ultrices odio. Nulla
        at congue diam, at dignissim turpis. Ut vehicula sed velit a faucibus. In feugiat vestibulum
        velit vel pulvinar.
      </div>
      <img src="/src/components/icons/blog-banner.png" alt="" class="blog-img" />
      <div class="blog-content">
        <div class="left">
          <h3>How did you start out in the food industry?</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur ac ultrices odio.
            Nulla at congue diam, at dignissim turpis. Ut vehicula sed velit a faucibus. In feugiat
            vestibulum velit vel pulvinar. Fusce id mollis ex. Praesent feugiat elementum ex ut
            suscipit.
          </p>
        </div>
        <div class="right">
          <p>Share this on:</p>
          <div class="btns-list">
            <FacebookIcon />
            <TwitterIcon />
            <IgIcon />
          </div>
        </div>
      </div>
    </div>
    <SubscribeCardComp />
    <MoreRecipesComp />
    <FooterComp />
  </div>
</template>
<script lang="ts" setup>
import HomeHeader from '@/components/home/HomeHeader.vue'
import FacebookIcon from '@/components/icons/svgs/FacebookIcon.vue'
import TwitterIcon from '@/components/icons/svgs/TwitterIcon.vue'
import IgIcon from '@/components/icons/svgs/IgIcon.vue'
import SubscribeCardComp from '@/components/home/SubscribeCardComp.vue'
import MoreRecipesComp from '@/components/home/MoreRecipesComp.vue'
import FooterComp from '@/components/home/FooterComp.vue'
import BtnGoBackComp from '@/components/BtnGoBackComp.vue'
</script>
<style lang="scss" scoped>
.blog-container {
  .content {
    padding: 50px 80px;
    display: flex;
    flex-direction: column;
    align-items: center;

    @media (max-width: 1023px) {
      padding: 30px;
    }

    .go-back {
      margin-right: auto;
      padding-bottom: 20px;
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

      @media (max-width: 1023px) {
        font-size: 50px;
      }
    }

    .author-infor {
      display: flex;
      align-items: center;
      margin: 30px 0;

      .left {
        display: flex;
        align-items: center;
        gap: 10px;
        padding-right: 30px;
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
        padding-left: 30px;

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

    .short-content {
      color: rgba(0, 0, 0, 0.6);
      text-align: center;
      font-family: Inter;
      font-size: 16px;
      font-style: normal;
      font-weight: 400;
      line-height: 28px;
      max-width: 80%;
      padding: 50px 0;

      @media (max-width: 1023px) {
        padding: 30px 0;
      }

      @media (max-width: 550px) {
        max-width: 100%;
      }
    }

    .blog-img {
      width: 100%;
      height: 600px;
      border-radius: 30px;
      object-fit: cover;

      @media (max-width: 1023px) {
        height: 500px;
      }

      @media (max-width: 767px) {
        height: 400px;
      }

      @media (max-width: 550px) {
        height: 300px;
      }
    }

    .blog-content {
      width: calc(100% - 200px);
      display: flex;
      justify-content: space-between;
      padding: 50px 0;

      @media (max-width: 1023px) {
        width: calc(100% - 60px);
      }

      @media (max-width: 767px) {
        flex-direction: column-reverse;
      }

      @media (max-width: 550px) {
        width: 100%;
      }

      .left {
        width: calc(100% - 200px);

        @media (max-width: 767px) {
          width: 100%;
        }

        h3,
        h4 {
          color: #000;
          font-family: Inter;
          font-size: 24px;
          font-style: normal;
          font-weight: 600;
          line-height: normal;
          letter-spacing: -0.96px;
          margin-bottom: 20px;
        }

        p {
          color: rgba(0, 0, 0, 0.6);
          font-family: Inter;
          font-size: 16px;
          font-style: normal;
          font-weight: 400;
          line-height: 28px;
        }
      }

      .right {
        width: 150px;
        display: flex;
        flex-direction: column;
        align-items: center;

        @media (max-width: 767px) {
          flex-direction: row;
          width: auto;
          gap: 20px;
          padding: 30px 0;
        }

        p {
          color: #000;
          font-family: Inter;
          font-size: 14px;
          font-style: normal;
          font-weight: 600;
          line-height: normal;
          letter-spacing: 1.4px;
          text-transform: uppercase;
        }

        .btns-list {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 40px;
          margin-top: 20px;

          @media (max-width: 767px) {
            flex-direction: row;
            width: auto;
            margin-top: 0;
          }

          svg {
            width: 20px;
            height: 20px;
            cursor: pointer;
            transition: all 0.3 ease;

            &:hover {
              transform: scale(1.07);
            }
          }
        }
      }
    }
  }
}
</style>
