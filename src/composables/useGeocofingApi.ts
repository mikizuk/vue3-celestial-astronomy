import { ref, type Ref } from 'vue'
import { watchDebounced } from '@vueuse/core'

import type { Place } from '../types/type'

const API_URL = 'https://geocoding-api.open-meteo.com'

export function useGeocofingApi(queryInput: Ref<string>): {
  places: Ref<Place[]>
  isLoading: Ref<boolean>
} {
  const places = ref<Place[]>([])
  const isLoading = ref<boolean>(false)

  const fetchPlaces = async (): Promise<void> => {
    if (queryInput.value.trim().length < 3) {
      places.value = []
      return
    }

    try {
      isLoading.value = true
      const response = await fetch(`${API_URL}/v1/search?name=${queryInput.value}`)
      const data = await response.json()

      places.value = data.results || []
    } catch (error) {
      console.error('Error fetching cities:', error)
    } finally {
      isLoading.value = false
    }
  }

  watchDebounced(queryInput, fetchPlaces, { debounce: 500 })

  return { places, isLoading }
}
