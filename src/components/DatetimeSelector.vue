<script setup lang="ts">
const timeModel = defineModel()
</script>

<template>
  <div class="flex gap-4">
    <label class="self-center text-color-copy-primary" for="time-selector">Choose time:</label>
    <input
      class="text-color-copy-primary bg-color-background-secondary border border-color-border rounded-md p-2"
      type="datetime-local"
      id="time-selector"
      name="time-selector"
      min="2000-01-01T00:00"
      max="2026-01-01T00:00"
      v-model="timeModel"
      required
    />
    <small class="self-center text-color-copy-secondary">*UTC time only</small>
  </div>
</template>
