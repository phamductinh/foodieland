<template>
  <header>
    <div class="logo" @click="goBackHome">Foodieland<span>.</span></div>
    <nav :class="isMenuOpen ? 'toggle-nav' : ''">
      <ul>
        <li v-for="(item, index) in listItemsHeader" :key="index">
          <router-link :to="item.path" exact active-class="active">{{ item.name }}</router-link>
        </li>
      </ul>
    </nav>
    <div class="toggle-menu">
      <i v-if="isMenuOpen" @click="toggleMenu" class="fa-solid fa-x"></i>
      <i v-else @click="toggleMenu" class="fa-solid fa-bars"></i>
    </div>
    <div class="social">
      <SocialIcon />
    </div>
  </header>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router'
import SocialIcon from '../icons/svgs/SocialIcon.vue'
import { ref } from 'vue'
const router = useRouter()
const isMenuOpen = ref(false)

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value
}

const goBackHome = () => {
  router.push(`/`)
}

const listItemsHeader = [
  { name: 'Home', path: '/' },
  { name: 'Recipes', path: '/recipes' },
  { name: 'Blog', path: '/blog' },
  { name: 'Contact', path: '/contact' },
  { name: 'About us', path: '/aboutus' },
]
</script>
<style lang="scss" scoped>
header {
  padding: 40px 80px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid #bbbaba;
  @media (max-width: 1023px) {
    padding: 30px;
  }

  .logo {
    color: #000;
    font-family: Lobster;
    font-size: 24px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    cursor: pointer;

    span {
      color: #ff7426;
    }
  }

  .toggle-menu {
    transition:
      transform 0.3s ease,
      opacity 0.3s ease;
    user-select: none;
    -webkit-user-select: none;
    -moz-user-select: none;
    z-index: 11;

    i {
      font-size: 30px;
      cursor: pointer;
      display: none;

      @media (max-width: 1023px) {
        display: block;
        color: #525151;
      }
    }
  }

  .toggle-nav {
    @media (max-width: 1023px) {
      transform: translateX(-100%);
    }
  }

  nav {
    @media (max-width: 1023px) {
      position: fixed;
      top: 0;
      right: -100%;
      width: 100%;
      height: 100vh;
      background-color: rgba(0, 0, 0, 0.9);
      padding: 80px 20px 50px;
      transition: 0.3s ease-out;
      z-index: 11;
    }

    ul {
      display: flex;
      gap: 20px;
      gap: 60px;

      @media (max-width: 1023px) {
        display: flex;
        flex-direction: column;
        gap: 20px;
        padding-top: 50px;
        align-items: center;
      }

      li {
        list-style: none;

        a {
          color: #000;
          font-family: Inter;
          font-size: 16px;
          font-style: normal;
          font-weight: 500;
          line-height: normal;
          letter-spacing: -0.32px;
          text-decoration: none;

          &.active {
            color: #01e3b2;
          }

          @media (max-width: 1023px) {
            color: #fff;
          }

          &:hover {
            color: #01e3b2;
          }
        }
      }
    }
  }

  .social {
    @media (max-width: 1023px) {
      display: none;
    }
  }
}
</style>
