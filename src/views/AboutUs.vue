<template>
  <HomeHeader />
  <div class="about-us-container">
    <h1>About Us</h1>
    <div class="content" v-if="aboutUsData">
      <div class="strengths">
        <p>Strengths:</p>
        <div class="item" v-for="(item, index) in aboutUsData.strengths" :key="index">
          <i class="fa-solid fa-star"></i>{{ item.label }}
        </div>
      </div>
      <div class="work">
        <p>
          Joining Date: <span>{{ formatDate(aboutUsData.joiningDate, 'MM/DD/YYYY HH:mm') }}</span>
        </p>
      </div>
      <div class="work">
        <p>
          Work: <span>{{ aboutUsData.isWorkType === true ? 'Online' : 'Offline' }}</span>
        </p>
      </div>
      <div class="work">
        <p>
          Social URL: <span>{{ aboutUsData.socialURL }}</span>
        </p>
      </div>
    </div>
  </div>
  <FooterComp />
</template>
<script setup lang="ts">
import HomeHeader from '@/components/home/HomeHeader.vue'
import { computed } from 'vue'
import { useStore } from 'vuex'
import FooterComp from '@/components/home/FooterComp.vue'
import moment from 'moment'

const store = useStore()

const aboutUsData = computed(() => {
  const data = store.getters.getAboutUsData
  return data ? JSON.parse(data) : null
})

const formatDate = (date: string, format: string = 'MM/DD/YYYY'): string => {
  if (date && format) {
    return moment(date).format(format)
  } else {
    return ''
  }
}
</script>
<style lang="scss">
.about-us-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 50px 80px;

  h1 {
    color: #000;
    font-family: Inter;
    font-size: 64px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
    letter-spacing: -2.56px;
    text-align: center;
    padding-bottom: 50px;
  }

  .content {
    width: 80%;
    height: auto;
    font-family: Inter;
    display: flex;
    flex-direction: column;
    gap: 50px;

    .strengths {
      display: flex;
      flex-direction: column;
      gap: 20px;

      p {
        font-size: 28px;
        font-weight: 600;
      }

      .item {
        display: flex;
        align-items: center;
        gap: 10px;

        font-size: 20px;
        font-style: normal;
        font-weight: 400;
        line-height: normal;
        letter-spacing: -0.96px;
        color: #000;

        i {
          font-size: 17px;
          color: green;
        }
      }
    }

    .work {
      display: flex;
      flex-direction: column;
      gap: 20px;

      p {
        font-size: 28px;
        font-weight: 600;
      }

      span {
        font-size: 20px;
        font-style: normal;
        font-weight: 400;
        line-height: normal;
        color: #000;
      }
    }
  }
}
</style>
