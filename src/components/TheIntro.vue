<script setup lang="ts">
defineProps<{ showIntro: boolean }>()
defineEmits(['hideIntro'])
</script>

<template>
  <h1 v-if="showIntro" class="my-2 py-2 text-2xl text-color-copy-primary">
    This a visualization of the altitude of the Moon and the Sun graphically based on the entered
    time and place on Earth.
  </h1>
  <button
    v-if="showIntro"
    class="text-color-copy-secondary hover:bg-color-cta-active transition-colors duration-300 rounded-lg m-1 p-3 px-8"
    @click="$emit('hideIntro')"
  >
    Hide this description
  </button>
</template>
