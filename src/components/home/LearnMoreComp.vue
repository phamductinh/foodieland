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

  @media (max-width: 1023px) {
    padding: 50px 30px;
  }

  @media (max-width: 900px) {
    flex-direction: column;
  }

  .left {
    width: 45%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 20px;

    @media (max-width: 900px) {
      width: 100%;
    }

    h2 {
      color: #000;
      font-family: Inter;
      font-size: 48px;
      font-style: normal;
      font-weight: 600;
      line-height: normal;
      letter-spacing: -1.92px;
      max-width: 95%;

      @media (max-width: 1023px) {
        font-size: 40px;
      }
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

    @media (max-width: 900px) {
      width: 100%;
    }

    .layout {
      position: relative;
      width: 90%;
      height: 500px;
      border-radius: 30px;
      background: linear-gradient(180deg, rgba(231, 249, 253, 0) 0%, #e7f9fd 100%);

      @media (min-width: 1920px) {
        height: 800px;
        margin-top: 150px;
      }

      @media (min-width: 1661px) and (max-width: 1919px) {
        height: 750px;
      }

      @media (min-width: 1440) and (max-width: 1660px) {
        height: 700px;
      }

      @media (max-width: 900px) {
        margin-top: 100px;
      }

      @media (max-width: 650px) {
        height: 450px;
        margin-top: 50px;
      }

      @media (max-width: 500px) {
        height: 400px;
      }

      .chef {
        height: auto;
        width: 140%;
        position: absolute;
        bottom: 0;
        left: -200px;

        @media (min-width: 1920px) {
          width: 130%;
        }

        @media (max-width: 1250px) {
          width: 150%;
        }

        @media (max-width: 900px) {
          width: 130%;
        }

        @media (max-width: 767px) {
          width: 140%;
        }

        @media (max-width: 650px) {
          left: -170px;
        }

        @media (max-width: 600px) {
          left: -160px;
        }

        @media (max-width: 500px) {
          left: -110px;
        }
      }

      .meat {
        position: absolute;
        width: 80px;
        height: 80px;
        top: 0;
        left: 20px;

        @media (min-width: 1920px) {
          width: 120px;
          height: 120px;
        }

        @media (max-width: 1250px) {
          top: 25px;
        }

        @media (max-width: 550px) {
          height: 50px;
          width: 50px;
          top: 50px;
        }
      }

      .onion {
        width: 50px;
        height: 50px;
        transform: rotate(15deg);
        position: absolute;
        top: 0;
        right: 150px;

        @media (min-width: 1920px) {
          width: 100px;
          height: 100px;
        }

        @media (max-width: 1250px) {
          top: 25px;
        }

        @media (max-width: 550px) {
          height: 35px;
          width: 35px;
        }
      }

      .vegan {
        width: 80px;
        height: 80px;
        position: absolute;
        top: 70px;
        right: 30px;

        @media (min-width: 1920px) {
          width: 120px;
          height: 120px;
        }

        @media (max-width: 1250px) {
          top: 100px;
        }

        @media (max-width: 550px) {
          height: 50px;
          width: 50px;
        }
      }

      .tomatoe {
        width: 50px;
        height: 50px;
        position: absolute;
        bottom: 130px;
        left: -20px;

        @media (min-width: 1920px) {
          width: 100px;
          height: 100px;
        }

        @media (max-width: 550px) {
          bottom: 100px;
          height: 35px;
          width: 35px;
        }
      }
    }
  }
}
</style>
