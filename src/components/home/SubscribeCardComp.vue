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

  @media (max-width: 1023px) {
    padding: 30px;
  }

  .subscribe {
    width: 100%;
    height: auto;
    border-radius: 60px;
    background: #e7f9fd;
    padding: 80px 30px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    gap: 20px;
    position: relative;
    overflow: hidden;

    @media (max-width: 1440px) {
      padding-bottom: 200px;
    }

    @media (max-width: 500px) {
      padding: 50px 30px 200px;
    }

    h1 {
      color: #000;
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

      @media (max-width: 767px) {
        width: 300px;
        height: 300px;
        bottom: -15%;
      }

      @media (max-width: 500px) {
        left: -30%;
      }
    }

    .rice {
      width: 350px;
      height: 350px;
      position: absolute;
      bottom: -30%;
      right: -150px;

      @media (max-width: 767px) {
        width: 300px;
        height: 300px;
        right: -130px;
        bottom: -27%;
      }
    }

    .rucola {
      width: 66.849px;
      height: 90.959px;
      transform: rotate(-31.507deg);
      position: absolute;
      bottom: 80px;
      right: 230px;

      @media (max-width: 600px) {
        display: none;
      }
    }

    .input-box {
      margin-top: 50px;
      width: 50%;
      height: 80px;
      border-radius: 24px;
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
}
</style>
