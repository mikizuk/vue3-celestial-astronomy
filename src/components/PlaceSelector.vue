<script setup lang="ts">
import { onMounted, ref, watch, useTemplateRef } from 'vue'
import { DefaultPlaces } from '../constants/places'
import { useGeocofingApi } from '../composables/useGeocofingApi'
import type { Place } from '../types/type'

const refPlaceSelector = useTemplateRef<HTMLInputElement>('ref-place-selector')
const queryInput = ref<string>('')
const placeModel = defineModel<Place>({
  default: DefaultPlaces[0],
})
const { places, isLoading } = useGeocofingApi(queryInput)

onMounted(() => {
  refPlaceSelector.value?.focus()
  places.value = DefaultPlaces
})

watch(places, (newPlaces) => {
  if (newPlaces.length) {
    placeModel.value = newPlaces[0]
  }
})
</script>

<template>
  <div class="flex flex-col md:flex-row gap-4">
    <label class="whitespace-nowrap self-center text-color-copy-primary" for="place-selector"
      >Choose place:</label
    >
    <input
      class="max-w-[310px] text-color-copy-primary bg-color-background-secondary border border-color-border rounded-md p-2"
      type="text"
      ref="ref-place-selector"
      v-model="queryInput"
      placeholder="Type min. 3 characters"
    />
    <span v-if="isLoading" type="button" class="w-full text-color-copy-primary p-2">
      Loading...
    </span>
    <select
      v-else
      class="w-full text-color-copy-primary bg-color-background-secondary border border-color-border rounded-md p-2"
      v-model="placeModel"
    >
      <option v-for="place in places" :key="place.id" :value="place">
        {{ place.name }}, {{ place.country }} {{ place?.country_code }} {{ place?.admin1 }}
        {{ place?.admin2 }}
      </option>
    </select>
  </div>
</template>
