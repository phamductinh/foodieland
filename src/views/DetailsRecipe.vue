<template>
  <div class="details-recipe-container">
    <HomeHeader />
    <div class="content">
      <div class="top">
        <div class="top-left">
          <h1>Health Japanese Fried Rice</h1>
          <div class="top-left-content">
            <div class="item">
              <img src="../components/icons/contact-us.png" alt="" />
              <div class="item-content">
                <p class="user-name">John Smith</p>
                <span>15 March 2022</span>
              </div>
            </div>
            <div class="item">
              <TimeIcon />
              <div class="item-content">
                <p class="name">Prep time</p>
                <span>15 Minutes</span>
              </div>
            </div>
            <div class="item">
              <TimeIcon />
              <div class="item-content">
                <p class="name">Cook time</p>
                <span>15 Minutes</span>
              </div>
            </div>
            <div class="item">
              <TypeFoodIcon />
              <div class="item-content">
                <span>Chicken</span>
              </div>
            </div>
          </div>
        </div>
        <div class="top-right">
          <div class="item">
            <button>
              <PrinterIcon />
            </button>
            <p>Print</p>
          </div>
          <div class="item">
            <button>
              <ShareIcon />
            </button>
            <p>Share</p>
          </div>
        </div>
      </div>
      <div class="nutrition-infor">
        <div class="left">
          <iframe src="https://www.youtube.com/embed/yb89hksK0Ds" frameborder="0"></iframe>
          <button>
            <PlayVideoIcon />
          </button>
        </div>
        <div class="right">
          <div class="title">Nutrition Information</div>
          <div class="item">
            <p>Calories</p>
            <span>219.9 kcal</span>
          </div>
          <div class="item">
            <p>Calories</p>
            <span>219.9 kcal</span>
          </div>
          <div class="item">
            <p>Calories</p>
            <span>219.9 kcal</span>
          </div>
          <div class="item">
            <p>Calories</p>
            <span>219.9 kcal</span>
          </div>
          <div class="item">
            <p>Calories</p>
            <span>219.9 kcal</span>
          </div>

          <div class="note">
            Adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </div>
        </div>
      </div>

      <div class="description">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
        labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
        laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
        voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
        cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
      </div>

      <div class="bottom">
        <div class="ingredients">
          <h2>Ingredients</h2>
          <div class="main-dish">
            <p class="title">For main dish</p>
            <div v-for="(item, index) in dishItems" :key="index" class="item">
              <CheckCircleIcon @click="toggleCheck(index)" v-if="item.isChecked" />
              <UnCheckCircle @click="toggleCheck(index)" v-else />
              <p :class="item.isChecked ? 'check' : 'uncheck'">{{ item.content }}</p>
            </div>
          </div>
          <div class="sauce">
            <p class="title">For the sauce</p>
            <div v-for="(item, index) in sauceItems" :key="index" class="item">
              <CheckCircleIcon @click="toggleSauceCheck(index)" v-if="item.isChecked" />
              <UnCheckCircle @click="toggleSauceCheck(index)" v-else />
              <p :class="item.isChecked ? 'check' : 'uncheck'">{{ item.content }}</p>
            </div>
          </div>
          <div class="directions">
            <h2>Directions</h2>
            <div class="direction-content">-- HTML content --</div>
          </div>
        </div>
        <div class="right">
          <OtherRecipe />
          <div class="ads">
            <AdsComp />
          </div>
        </div>
      </div>
    </div>
    <SubscribeCardComp />
    <MoreRecipesComp />
    <FooterComp />
  </div>
</template>
<script setup lang="ts">
import HomeHeader from '@/components/home/HomeHeader.vue'
import TimeIcon from '@/components/icons/svgs/TimeIcon.vue'
import TypeFoodIcon from '@/components/icons/svgs/TypeFoodIcon.vue'
import PrinterIcon from '@/components/icons/svgs/PrinterIcon.vue'
import ShareIcon from '@/components/icons/svgs/ShareIcon.vue'
import PlayVideoIcon from '@/components/icons/svgs/PlayVideoIcon.vue'
import CheckCircleIcon from '@/components/icons/svgs/CheckCircleIcon.vue'
import UnCheckCircle from '@/components/icons/svgs/UnCheckCircle.vue'
import OtherRecipe from '@/components/OtherRecipe.vue'
import AdsComp from '@/components/AdsComp.vue'
import SubscribeCardComp from '@/components/home/SubscribeCardComp.vue'
import MoreRecipesComp from '@/components/home/MoreRecipesComp.vue'
import FooterComp from '@/components/home/FooterComp.vue'

import { ref } from 'vue'

const dishItems = ref([
  { id: 1, isChecked: false, content: 'Lorem ipsum dolor sit amet' },
  { id: 2, isChecked: true, content: 'Lorem ipsum' },
])

const sauceItems = ref([
  { id: 1, isChecked: false, content: 'Sause is a beautiful day' },
  { id: 2, isChecked: false, content: 'Lorem ipsum' },
])

const toggleCheck = (index: number) => {
  dishItems.value[index].isChecked = !dishItems.value[index].isChecked
}

const toggleSauceCheck = (index: number) => {
  sauceItems.value[index].isChecked = !sauceItems.value[index].isChecked
}
</script>
<style lang="scss">
.details-recipe-container {
  .content {
    padding: 50px 80px;

    @media (max-width: 1023px) {
      padding: 30px;
    }

    .top {
      display: flex;
      align-items: center;
      justify-content: space-between;

      @media (max-width: 1023px) {
        flex-direction: column;
        align-items: start;
        gap: 30px;
      }

      .top-left {
        h1 {
          color: #000;
          font-family: Inter;
          font-size: 64px;
          font-style: normal;
          font-weight: 600;
          line-height: normal;
          letter-spacing: -2.56px;
          margin-bottom: 50px;

          @media (max-width: 1023px) {
            font-size: 50px;
          }
        }

        .top-left-content {
          display: flex;

          @media (max-width: 1023px) {
            flex-wrap: wrap;
            justify-content: center;
          }

          .item {
            display: flex;
            align-items: center;
            justify-content: center;
            gap: 15px;
            padding: 0 30px;
            border-right: 1px solid rgba(0, 0, 0, 0.1);

            @media (max-width: 1023px) {
              padding: 0 15px;
              flex: 1 1 calc(50% - 16px);
              box-sizing: border-box;
              justify-content: start;

              &:nth-child(2) {
                border: none;
              }

              &:nth-child(3),
              &:nth-child(4) {
                margin-top: 20px;
              }
            }

            &:nth-child(1) {
              padding-left: 0;
            }

            &:last-child {
              border: none;
            }

            img {
              width: 50px;
              height: 50px;
              border-radius: 50px;
              object-fit: cover;
            }

            .item-content {
              display: flex;
              flex-direction: column;
              gap: 7px;

              .user-name {
                color: #000;
                font-family: Inter;
                font-size: 16px;
                font-style: normal;
                font-weight: 700;
                line-height: normal;
                letter-spacing: -0.32px;
              }

              .name {
                color: #000;
                font-family: Inter;
                font-size: 12px;
                text-transform: uppercase;
                font-style: normal;
                font-weight: 500;
                line-height: normal;
                letter-spacing: 1.2px;
              }

              span {
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

      .top-right {
        display: flex;
        gap: 30px;

        @media (max-width: 1023px) {
          width: 100%;
          justify-content: center;
        }

        .item {
          button {
            width: 80px;
            height: 80px;
            border-radius: 50%;
            background: #e7fafe;
            border: none;
            outline: none;
            margin-bottom: 15px;
            cursor: pointer;

            &:hover {
              border: 1px solid #a5eaf8;
            }
          }

          p {
            color: #000;
            text-align: center;
            font-family: Inter;
            font-size: 12px;
            font-style: normal;
            font-weight: 500;
            line-height: normal;
            letter-spacing: 1.2px;
            text-transform: uppercase;
          }
        }
      }
    }

    .nutrition-infor {
      width: 100%;
      height: auto;
      padding: 50px 0;
      display: flex;
      justify-content: space-between;

      @media (max-width: 1023px) {
        flex-direction: column;
        align-items: start;
        gap: 30px;
      }

      .left {
        width: 65%;
        height: 500px;
        position: relative;

        @media (max-width: 1023px) {
          width: 100%;
        }

        @media (max-width: 767px) {
          height: 400px;
        }

        @media (max-width: 500px) {
          height: 350px;
        }

        iframe {
          width: 100%;
          height: 100%;
          border-radius: 20px;
        }

        button {
          border-radius: 50%;
          border: none;
          outline: none;
          background: transparent;
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);

          svg {
            cursor: pointer;

            @media (max-width: 1023px) {
              width: 85px;
              height: 85px;
            }

            @media (max-width: 767px) {
              height: 400px;
            }
          }
        }
      }

      .right {
        width: 32%;
        height: 500px;
        border-radius: 30px;
        background: #e7fafe;
        padding: 32px;
        display: flex;
        flex-direction: column;

        @media (max-width: 1023px) {
          width: 100%;
        }

        .title {
          color: #000;
          font-family: Inter;
          font-size: 24px;
          font-style: normal;
          font-weight: 600;
          line-height: normal;
          letter-spacing: -0.96px;
          margin-bottom: 15px;
        }

        .item {
          width: 100%;
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 15px 0;
          border-bottom: 1px solid rgba(0, 0, 0, 0.1);

          p {
            color: rgba(0, 0, 0, 0.6);
            font-family: Inter;
            font-size: 18px;
            font-style: normal;
            font-weight: 500;
            line-height: normal;
            letter-spacing: -0.72px;
          }

          span {
            color: #000;
            text-align: right;
            font-family: Inter;
            font-size: 18px;
            font-style: normal;
            font-weight: 500;
            line-height: normal;
            letter-spacing: -0.72px;
          }
        }

        .note {
          color: rgba(0, 0, 0, 0.6);
          text-align: center;
          font-family: Inter;
          font-size: 16px;
          font-style: normal;
          font-weight: 400;
          line-height: 28px;
          margin-top: auto;
        }
      }
    }

    .description {
      color: rgba(0, 0, 0, 0.6);
      font-family: Inter;
      font-size: 16px;
      font-style: normal;
      font-weight: 400;
      line-height: 28px;
      padding: 30px 0;
    }

    .bottom {
      display: flex;
      justify-content: space-between;
      padding: 20px 0;

      @media (max-width: 1023px) {
        width: 100%;
      }

      .ingredients {
        width: 65%;

        @media (max-width: 1023px) {
          width: 100%;
        }

        h2 {
          color: #000;
          font-family: Inter;
          font-size: 36px;
          font-style: normal;
          font-weight: 600;
          line-height: normal;
          letter-spacing: -1.44px;
        }

        .main-dish,
        .sauce {
          padding: 20px 0;
          .title {
            color: #000;
            font-family: Inter;
            font-size: 24px;
            font-style: normal;
            font-weight: 600;
            line-height: normal;
            letter-spacing: -0.96px;
            padding: 30px 0;
          }

          svg {
            cursor: pointer;
          }

          .item {
            display: flex;
            align-items: center;
            padding: 20px 0;
            gap: 20px;
            border-bottom: 1px solid rgba(0, 0, 0, 0.1);

            .check {
              color: rgba(0, 0, 0, 0.6);
              font-family: Inter;
              font-size: 18px;
              font-style: normal;
              font-weight: 400;
              line-height: 28px;
              text-decoration: line-through;
            }

            .uncheck {
              color: #000;
              font-family: Inter;
              font-size: 18px;
              font-style: normal;
              font-weight: 400;
              line-height: normal;
              letter-spacing: -0.36px;
            }
          }
        }

        .directions {
          padding-top: 50px;

          h2 {
            color: #000;
            font-family: Inter;
            font-size: 36px;
            font-style: normal;
            font-weight: 600;
            line-height: normal;
            letter-spacing: -1.44px;
          }

          .direction-content {
            padding: 30px 0;
          }
        }
      }

      .right {
        width: 32%;

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
