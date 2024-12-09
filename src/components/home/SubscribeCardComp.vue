<template>
  <div class="subscribe-card-container">
    <div class="subscribe">
      <h1>Deliciousness to your inbox</h1>
      <p>
        Lorem ipsum dolor sit amet, consectetuipisicing elit, sed do eiusmod tempor incididunt ut
        labore et dolore magna aliqut enim ad minim
      </p>
      <div class="input-box">
        <input type="text" placeholder="Your email address..." />
        <button>Subscribe</button>
      </div>
      <img class="salad" src="../icons/category/salad.png" alt="" />
      <img class="rice" src="../icons/category/rice.png" alt="" />
      <img class="rucola" src="../icons/category/rucola.png" alt="" />
    </div>
  </div>
</template>
<script lang="ts" setup></script>
<style lang="scss">
.subscribe-card-container {
  padding: 50px 80px;

  .subscribe {
    width: 100%;
    height: auto;
    border-radius: 60px;
    background: #e7f9fd;
    padding: 80px 0;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    gap: 20px;
    position: relative;
    overflow: hidden;

    h1 {
      color: #000;
      font-family: Inter;
      font-size: 48px;
      font-style: normal;
      font-weight: 600;
      line-height: normal;
      letter-spacing: -1.92px;
    }

    p {
      color: rgba(0, 0, 0, 0.6);
      text-align: center;
      font-family: Inter;
      font-size: 16px;
      font-style: normal;
      font-weight: 400;
      line-height: 28px;
      max-width: 600px;
    }

    .salad {
      position: absolute;
      width: 400px;
      height: 400px;
      object-fit: cover;
      left: -10%;
      bottom: -20%;
      transform: rotate(30deg);
    }

    .rice {
      width: 350px;
      height: 350px;
      position: absolute;
      bottom: -30%;
      right: -150px;
    }

    .rucola {
      width: 66.849px;
      height: 90.959px;
      transform: rotate(-31.507deg);
      position: absolute;
      bottom: 80px;
      right: 230px;
    }

    .input-box {
      margin-top: 50px;
      width: 50%;
      height: 80px;
      border-radius: 24px;
      background: #fff;
      position: relative;

      input {
        width: 100%;
        height: 100%;
        border-radius: 24px;
        border: none;
        outline: none;
        padding-left: 30px;
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

        &:hover {
          background: #1b1b1b;
        }
      }
    }
  }
}
</style>
