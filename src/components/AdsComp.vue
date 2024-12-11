<template>
  <div class="ads-container">
    <div class="star">
      <StarIcon />
    </div>
    <div class="ads-title">Don’t forget to eat healthy food</div>
    <div class="infor">www.foodieland.com</div>
    <img class="ads-img" src="./icons/ads.png" alt="" />
  </div>
</template>
<script lang="ts" setup>
import StarIcon from './icons/svgs/StarIcon.vue'
</script>
<style lang="scss">
.ads-container {
  width: 100%;
  height: 100%;
  background: linear-gradient(180deg, #357355 0%, #1d483b 100%);
  position: relative;
  text-align: center;
  overflow: hidden;

  .star {
    svg {
      width: 100%;
      height: 100%;
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
    }
  }

  .ads-title {
    position: absolute;
    top: 40px;
    left: 50%;
    transform: translate(-50%);
    max-width: 50%;
    color: #fff;
    text-align: center;
    font-family: Lobster;
    font-size: 24px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
  }

  .infor {
    position: absolute;
    bottom: 30px;
    left: 50%;
    transform: translate(-50%);
    max-width: 50%;
    color: rgba(255, 255, 255, 0.6);
    font-family: Inter;
    font-size: 14px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    letter-spacing: -0.28px;
  }

  .ads-img {
    position: absolute;
    height: 85%;
    width: auto;
    bottom: -20px;
    left: 50%;
    transform: translate(-50%);
  }
}
</style>
