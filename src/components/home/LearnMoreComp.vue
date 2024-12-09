<template>
  <div class="learn-more-container">
    <div class="left">
      <h2>Everyone can be a chef in their own kitchen</h2>
      <p>
        Lorem ipsum dolor sit amet, consectetuipisicing elit, sed do eiusmod tempor incididunt ut
        labore et dolore magna aliqut enim ad minim
      </p>
      <button>Learn More</button>
    </div>
    <div class="right">
      <div class="layout">
        <img class="chef" src="../icons/learnmore.png" alt="" />
        <img class="meat" src="../icons/category/meat.png" alt="" />
        <img class="onion" src="../icons/category/onion.png" alt="" />
        <img class="vegan" src="../icons/category/vegan.png" alt="" />
        <img class="tomatoe" src="../icons/category/tomatoe.png" alt="" />
      </div>
    </div>
  </div>
</template>
<script lang="ts" setup></script>
<style lang="scss">
.learn-more-container {
  padding: 150px 80px;
  display: flex;

  .left {
    width: 45%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 20px;

    h2 {
      color: #000;
      font-family: Inter;
      font-size: 48px;
      font-style: normal;
      font-weight: 600;
      line-height: normal;
      letter-spacing: -1.92px;
      max-width: 95%;
    }

    p {
      color: rgba(0, 0, 0, 0.6);
      font-family: Inter;
      font-size: 16px;
      font-style: normal;
      font-weight: 400;
      line-height: 28px;
      max-width: 95%;
    }

    button {
      width: 180px;
      height: 60px;
      border-radius: 16px;
      background: #000;
      color: #fff;
      border: none;
      margin-top: 20px;
      cursor: pointer;

      &:hover {
        background: #1b1b1b;
      }
    }
  }

  .right {
    width: 55%;
    height: auto;
    display: flex;
    justify-content: flex-end;

    .layout {
      position: relative;
      width: 90%;
      height: 500px;
      border-radius: 30px;
      background: linear-gradient(180deg, rgba(231, 249, 253, 0) 0%, #e7f9fd 100%);

      .chef {
        height: 600px;
        width: auto;
        position: absolute;
        bottom: 0;
        left: -200px;
      }

      .meat {
        position: absolute;
        width: 80px;
        height: 80px;
        top: 0;
        left: 20px;
      }

      .onion {
        width: 50px;
        height: 50px;
        transform: rotate(15deg);
        position: absolute;
        top: 0;
        right: 150px;
      }

      .vegan {
        width: 80px;
        height: 80px;
        position: absolute;
        top: 70px;
        right: 30px;
      }

      .tomatoe {
        width: 50px;
        height: 50px;
        position: absolute;
        bottom: 130px;
        left: -20px;
      }
    }
  }
}
</style>
