<template>
  <div class="lang-btns">
    <button @click="changeLanguage('en')"><EnglishFlag /></button>
    <button @click="changeLanguage('vi')"><VietNamFlag /></button>
    <button @click="changeLanguage('ja')"><JapanFlag /></button>
  </div>
</template>

<script lang="ts" setup>
import { useI18n } from 'vue-i18n'
import VietNamFlag from './icons/svgs/VietNamFlag.vue'
import EnglishFlag from './icons/svgs/EnglishFlag.vue'
import JapanFlag from './icons/svgs/JapanFlag.vue'

const { locale } = useI18n()

const changeLanguage = (lang: string) => {
  locale.value = lang
  localStorage.setItem('language', lang)
}
</script>

<style lang="scss" scoped>
.lang-btns {
  width: fit-content;
  display: flex;
  align-items: center;
  gap: 5px;

  button {
    cursor: pointer;
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background: transparent;
    border: none;
    transition: all 0.3s ease;

    &:hover {
      transform: scale(1.05);
    }

    svg {
      width: 20px;
      height: 20px;
    }
  }
}
</style>
