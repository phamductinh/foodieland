<template>
  <footer>
    <div class="top">
      <div class="infor">
        <div class="logo">Foodieland<span>.</span></div>
        <p>Lorem ipsum dolor sit amet, consectetuipisicing elit</p>
      </div>
      <nav>
        <ul>
          <li v-for="(item, index) in listItemsFooter" :key="index">
            <a :href="item.path">{{ item.name }}</a>
          </li>
        </ul>
      </nav>
    </div>
    <hr />
    <div class="bottom">
      <p>© Pham Duc Tinh</p>
      <SocialIcon />
    </div>
  </footer>
</template>
<script setup lang="ts">
import SocialIcon from '../icons/svgs/SocialIcon.vue'
const listItemsFooter = [
  { name: 'Recipes', path: '/recipes' },
  { name: 'Blog', path: '/blog' },
  { name: 'Contact', path: '/contact' },
  { name: 'About us', path: '/aboutus' },
]
</script>
<style lang="scss" scoped>
footer {
  padding: 50px 80px;

  @media (max-width: 1023px) {
    padding: 50px 30px;
  }

  .top {
    display: flex;
    align-items: center;
    justify-content: space-between;

    @media (max-width: 1023px) {
      justify-content: center;
    }

    .infor {
      .logo {
        color: #000;
        font-family: Lobster;
        font-size: 24px;
        font-style: normal;
        font-weight: 400;
        line-height: normal;

        @media (max-width: 1023px) {
          text-align: center;
        }

        span {
          color: #ff7426;
        }
      }

      p {
        color: rgba(0, 0, 0, 0.6);
        font-family: Inter;
        font-size: 16px;
        font-style: normal;
        font-weight: 400;
        line-height: 28px;
        margin-top: 14px;
        text-align: center;
      }
    }

    nav {
      @media (max-width: 1023px) {
        display: none;
      }

      ul {
        display: flex;
        gap: 20px;
        gap: 60px;

        li {
          list-style: none;

          a {
            color: #000;
            font-family: Inter;
            font-size: 16px;
            font-style: normal;
            font-weight: 400;
            line-height: normal;
            letter-spacing: -0.32px;
            text-decoration: none;

            &:hover {
              color: #01e3b2;
            }
          }
        }
      }
    }
  }

  hr {
    background: rgba(0, 0, 0, 0.1);
    margin: 50px 0;
  }

  .bottom {
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;

    @media (max-width: 1023px) {
      justify-content: space-between;
    }

    p {
      color: rgba(0, 0, 0, 0.6);
      font-family: 'Inter';
      font-size: 18px;
      font-style: normal;
      font-weight: 400;
      line-height: normal;
      letter-spacing: -0.36px;
    }

    svg {
      position: absolute;
      right: 0;

      @media (max-width: 1023px) {
        position: relative;
      }
    }
  }
}
</style>
