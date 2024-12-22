import { ref, onMounted } from 'vue'

export function useDarkMode() {
  const isDark = ref(true)
  const toggleDarkMode = () => {
    isDark.value = !isDark.value
    updateTheme()
  }

  const updateTheme = () => {
    document.documentElement.classList.toggle('dark', isDark.value)
  }

  onMounted(() => {
    updateTheme()
  })

  return {
    isDark,
    toggleDarkMode,
  }
}
