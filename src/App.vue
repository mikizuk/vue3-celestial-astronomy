<script setup lang="ts">
import { reactive } from 'vue'
import type { State } from './types/type'

import TheCart from './components/TheCart.vue'
import TheHeader from './components/TheHeader.vue'
import TheIntro from './components/TheIntro.vue'
import DatetimeSelector from './components/DatetimeSelector.vue'

import { useFormattedDate } from './composables/useFormattedDate'

const { currentFormattedDate } = useFormattedDate()

const hideIntro = () => (state.showIntro = false)

const state = reactive<State>({
  showIntro: true,
  timeSelected: currentFormattedDate,
})
</script>

<template>
  <div class="h-full w-full max-w-7xl m-auto grid grid-rows-wrapper-layout gap-4 p-4">
    <TheHeader />
    <main>
      <TheIntro :showIntro="state.showIntro" @hideIntro="hideIntro" />
      <TheCart>
        <DatetimeSelector v-model="state.timeSelected" />
      </TheCart>
    </main>
  </div>
</template>
