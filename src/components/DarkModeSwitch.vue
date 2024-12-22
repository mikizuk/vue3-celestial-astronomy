<script setup lang="ts">
import { useDarkMode } from '../composables/useDarkMode'
import IconMoon from './icons/IconMoon.vue'
import IconSun from './icons/IconSun.vue'
const { isDark, toggleDarkMode } = useDarkMode()
</script>

<template>
  <button
    type="button"
    class="flex bg-color-active border-none rounded cursor-pointer outline-none transition-colors duration-300 hover:bg-color-cta-active focus:ring-2 focus:ring-color-copy-secondary p-1"
    @click="toggleDarkMode"
  >
    <IconMoon
      v-show="isDark"
      className="w-6 h-6 fill-color-copy-primary stroke-color-copy-primary"
    />
    <IconSun
      v-show="!isDark"
      className="w-6 h-6 fill-color-copy-primary stroke-color-copy-primary"
    />
  </button>
</template>
