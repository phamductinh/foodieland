<template>
  <div class="category-container">
    <div class="category">
      <div class="top">
        <h2>Categories</h2>
        <button>View All Categories</button>
      </div>
      <div class="bottom">
        <div
          class="item"
          v-for="(item, index) in listItems"
          :key="index"
          :style="{ background: item.backgroundColor }"
        >
          <h3>{{ item.name }}</h3>
          <img class="img-blur" :src="item.image" alt="" />
          <img :src="item.image" alt="" />
        </div>
      </div>
      <div class="btns">
        <button>View All Categories</button>
      </div>
    </div>
  </div>
</template>
<script lang="ts" setup>
const listItems = [
  {
    name: 'Breakfast',
    image: '/src/components/icons/category/breakfast.png',
    backgroundColor:
      'linear-gradient(180deg, rgba(112, 130, 70, 0.00) 0%, rgba(112, 130, 70, 0.10) 100%)',
  },
  {
    name: 'Vegan',
    image: '/src/components/icons/category/vegan.png',
    backgroundColor:
      'linear-gradient(180deg, rgba(108, 198, 63, 0.00) 0%, rgba(108, 198, 63, 0.10) 100%)',
  },
  {
    name: 'Meat',
    image: '/src/components/icons/category/meat.png',
    backgroundColor:
      'linear-gradient(180deg, rgba(204, 38, 27, 0.00) 0%, rgba(204, 38, 27, 0.10) 100%)',
  },
  {
    name: 'Dessert',
    image: '/src/components/icons/category/dessert.png',
    backgroundColor:
      'linear-gradient(180deg, rgba(240, 158, 0, 0.00) 0%, rgba(240, 158, 0, 0.10) 100%)',
  },
  {
    name: 'Chocolate',
    image: '/src/components/icons/category/chocolate.png',
    backgroundColor: 'linear-gradient(180deg, rgba(0, 0, 0, 0.00) 0%, rgba(0, 0, 0, 0.05) 100%)',
  },
  {
    name: 'Lunch',
    image: '/src/components/icons/category/lunch.png',
    backgroundColor: 'linear-gradient(180deg, rgba(0, 0, 0, 0.00) 0%, rgba(0, 0, 0, 0.05) 100%)',
  },
]
</script>
<style lang="scss">
.category-container {
  height: auto;
  width: 100%;
  padding: 50px 80px;

  @media (max-width: 1023px) {
    padding: 30px;
  }

  .category {
    width: 100%;
    height: auto;

    .top {
      display: flex;
      align-items: center;
      justify-content: space-between;

      h2 {
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

      button {
        width: 200px;
        height: 60px;
        border-radius: 16px;
        background: #e7fafe;
        border: none;
        cursor: pointer;

        @media (max-width: 1023px) {
          display: none;
        }

        &:hover {
          background: #b2e8f3;
        }
      }
    }

    .bottom {
      display: flex;
      justify-content: space-between;
      gap: 40px;
      flex-wrap: wrap;
      margin-top: 100px;

      @media (max-width: 1023px) {
        gap: 50px 20px;
        justify-content: space-evenly;
      }

      .item {
        position: relative;
        display: flex;
        justify-content: center;
        align-items: end;
        border-radius: 30px;
        padding-bottom: 30px;
        width: 180px;
        height: 150px;
        cursor: pointer;

        @media (max-width: 1023px) {
          width: 170px;
        }

        &:hover img {
          transform: translateY(-5px);
        }

        h3 {
          color: #000;
          text-align: center;
          font-family: Inter;
          font-size: 18px;
          font-style: normal;
          font-weight: 600;
          line-height: normal;
          letter-spacing: -0.36px;
        }

        img {
          width: 100px;
          height: 100px;
          position: absolute;
          top: -25%;
          transition: all 0.3s ease;
        }

        .img-blur {
          filter: blur(10px);
          top: -15%;
          margin-left: 20px;
        }
      }
    }

    .btns {
      display: none;
      margin: 40px 0;

      @media (max-width: 1023px) {
        display: flex;
        justify-content: center;
        align-items: center;
      }

      button {
        width: 200px;
        height: 60px;
        border-radius: 16px;
        background: #e7fafe;
        border: none;
        cursor: pointer;

        &:hover {
          background: #b2e8f3;
        }
      }
    }
  }
}
</style>
