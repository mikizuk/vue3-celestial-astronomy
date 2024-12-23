import { ref } from 'vue'

export function useFormattedDate() {
  const getFormattedDate = () => {
    return new Date().toISOString().slice(0, 16).toString()
  }

  const currentFormattedDate = ref(getFormattedDate())

  return {
    currentFormattedDate,
    getFormattedDate,
  }
}
