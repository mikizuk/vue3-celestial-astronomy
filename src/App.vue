<script setup lang="ts">
import { reactive } from 'vue'
import type { State } from './types/type'
import { DefaultPlaces } from './constants/places'

import TheCart from './components/TheCart.vue'
import TheHeader from './components/TheHeader.vue'
import TheIntro from './components/TheIntro.vue'
import TheChart from './components/TheChart.vue'
import TheFooter from './components/TheFooter.vue'
import DatetimeSelector from './components/DatetimeSelector.vue'
import PlaceSelector from './components/PlaceSelector.vue'

import { useFormattedDate } from './composables/useFormattedDate'

const { currentFormattedDate } = useFormattedDate()

const hideIntro = () => (state.showIntro = false)

const state = reactive<State>({
  showIntro: true,
  timeSelected: currentFormattedDate,
  placeSelected: DefaultPlaces[0],
})
</script>

<template>
  <div class="h-full w-full w-[100vw] md:max-w-7xl m-auto grid grid-rows-wrapper-layout">
    <TheHeader />
    <main class="w-full max-w-[100vw] p-2">
      <TheIntro :showIntro="state.showIntro" @hideIntro="hideIntro" />
      <TheCart>
        <DatetimeSelector v-model="state.timeSelected" />
      </TheCart>
      <TheCart>
        <PlaceSelector v-model="state.placeSelected" />
      </TheCart>
      <TheCart>
        <TheChart :datetime="state.timeSelected" :place="state.placeSelected" />
      </TheCart>
    </main>
    <TheFooter />
  </div>
</template>
