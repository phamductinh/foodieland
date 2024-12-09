<template>
  <div class="banner-container">
    <div class="banner">
      <div class="left">
        <div class="hot-recipes">
          <img src="../icons/banner/icon1.png" alt="" />
          <p>Hot Recipes</p>
        </div>
        <h1>
          Spicy delicious <br />
          chicken wings
        </h1>
        <p class="desc">
          Lorem ipsum dolor sit amet, consectetuipisicing elit, sed do eiusmod tempor incididunt ut
          labore et dolore magna aliqut enim ad minim
        </p>
        <div class="btns">
          <div class="time">
            <TimeIcon />
            <p>30 Minutes</p>
          </div>
          <div class="time">
            <TypeFoodIcon />
            <p>Chicken</p>
          </div>
        </div>
        <div class="bottom-content">
          <div class="infor">
            <img src="../icons/category/breakfast.png" alt="" />
            <div class="detail">
              <div class="name">John Smith</div>
              <div class="date">15 March 2022</div>
            </div>
          </div>
          <button>
            <p>View Recipes</p>
            <PlayIcon />
          </button>
        </div>
      </div>
      <div class="right">
        <img src="../icons/banner.jpeg" alt="" />
      </div>
      <img class="icon-banner" src="../icons/banner/iconbanner.png" alt="" />
    </div>
  </div>
</template>
<script setup lang="ts">
import TimeIcon from '../icons/svgs/TimeIcon.vue'
import TypeFoodIcon from '../icons/svgs/TypeFoodIcon.vue'
import PlayIcon from '../icons/svgs/PlayIcon.vue'
</script>
<style lang="scss" scoped>
.banner-container {
  height: auto;
  width: 100%;
  padding: 50px 80px;
  overflow: hidden;
  position: relative;

  @media (max-width: 1023px) {
    padding: 30px;
  }

  .banner {
    display: flex;
    height: 650px;
    position: relative;

    @media (max-width: 1023px) {
      flex-direction: column;
      height: auto;
    }

    .icon-banner {
      position: absolute;
      top: 20%;
      left: 50%;
      transform: translate(-50%, -50%);
      height: 150px;
      width: auto;

      @media (max-width: 1023px) {
        display: none;
      }
    }

    .left {
      width: 50%;
      background-color: #e7fafe;
      border-top-left-radius: 40px;
      border-bottom-left-radius: 40px;
      padding: 70px;

      @media (max-width: 1023px) {
        width: 100%;
        border-bottom-left-radius: 0;
        border-top-right-radius: 40px;
        padding: 30px;
      }

      .hot-recipes {
        height: 45px;
        width: 156px;
        border-radius: 30px;
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 13px;
        background: #fff;

        img {
          width: 24px;
          height: 24px;
        }

        p {
          color: #000;
          font-family: Inter;
          font-size: 14px;
          font-style: normal;
          font-weight: 600;
          line-height: normal;
          letter-spacing: -0.28px;
        }
      }

      h1 {
        color: #000;
        font-family: Inter;
        font-size: 64px;
        font-style: normal;
        font-weight: 600;
        line-height: normal;
        letter-spacing: -2.56px;
        margin-top: 32px;
        display: -webkit-box;
        -webkit-box-orient: vertical;
        -webkit-line-clamp: 2;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: normal;
        cursor: pointer;
        position: relative;
      }

      .desc {
        color: rgba(0, 0, 0, 0.6);
        font-family: Inter;
        font-size: 16px;
        font-style: normal;
        font-weight: 400;
        line-height: 28px;
        margin-top: 28px;
        display: -webkit-box;
        -webkit-box-orient: vertical;
        -webkit-line-clamp: 2;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: normal;
        cursor: pointer;
        position: relative;
      }

      .btns {
        margin-top: 30px;
        display: flex;
        gap: 16px;
        justify-content: flex-start;

        .time {
          display: flex;
          align-items: center;
          justify-content: center;
          width: auto;
          height: 40px;
          padding: 0 15px;
          border-radius: 30px;
          background: rgba(0, 0, 0, 0.05);
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

      .bottom-content {
        display: flex;
        justify-content: space-between;
        margin-top: 70px;

        @media (max-width: 767px) {
          flex-direction: column;
          gap: 30px;
        }

        .infor {
          display: flex;
          align-items: center;
          gap: 15px;

          img {
            width: 50px;
            height: 50px;
            border-radius: 50%;
            object-fit: cover;
          }

          .detail {
            .name {
              color: #000;
              font-family: Inter;
              font-size: 16px;
              font-style: normal;
              font-weight: 700;
              line-height: normal;
              letter-spacing: -0.32px;
              margin-bottom: 6px;
            }

            .date {
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

        button {
          width: 200px;
          height: 60px;
          border-radius: 16px;
          border: none;
          background: #000;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 15px;
          cursor: pointer;

          &:hover {
            background: #1b1b1b;
          }

          p {
            color: #fff;
            font-family: Inter;
            font-size: 14px;
            font-style: normal;
            font-weight: 600;
            line-height: normal;
            letter-spacing: -0.28px;
          }
        }
      }
    }

    .right {
      width: 50%;
      height: 100%;
      border-top-right-radius: 40px;
      border-bottom-right-radius: 40px;

      @media (max-width: 1023px) {
        width: 100%;
      }

      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        object-position: right;
        border-top-right-radius: 40px;
        border-bottom-right-radius: 40px;

        @media (max-width: 1023px) {
          object-position: center;
          height: 500px;
          border-top-right-radius: 0;
          border-bottom-left-radius: 40px;
        }

        @media (max-width: 700px) {
          height: 350px;
        }
      }
    }
  }
}
</style>
