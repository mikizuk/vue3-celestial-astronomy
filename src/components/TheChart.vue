<script setup lang="ts">
import { ref, toRefs, watchEffect, reactive } from 'vue'
import { useChartPoints } from '../composables/useChartPoints'
import IconSun from './icons/IconSun.vue'
import IconMoon from './icons/IconMoon.vue'
import UnovisChart from './UnovisChart.vue'
import type { Place, ChartDataPoint, ChartConfig } from '@/types/type'

const props = withDefaults(
  defineProps<{
    datetime: string
    place: Pick<Place, 'name' | 'latitude' | 'longitude'>
  }>(),
  {
    datetime: '',
    place: () => ({
      name: '',
      latitude: 0,
      longitude: 0,
    }),
  },
)

const { datetime, place } = toRefs(props)
const { generatePoints } = useChartPoints()

const localDatetime = ref('')
const chartConfig = reactive<ChartConfig>({
  xAccessor: (d: ChartDataPoint) => d.time,
  sunAccessor: (d: ChartDataPoint) => d.sunAltitude,
  moonAccessor: (d: ChartDataPoint) => d.moonAltitude,
  xTickFormat: (d: Date) =>
    new Date(d).toLocaleString('en-GB', {
      hour: '2-digit',
      minute: '2-digit',
    }),
  lineAltitudes: [],
})

watchEffect(() => {
  if (datetime.value) {
    chartConfig.lineAltitudes = generatePoints(datetime.value, {
      latitude: place.value.latitude,
      longitude: place.value.longitude,
    })

    localDatetime.value = new Date(datetime.value).toLocaleString('en-GB', {
      day: '2-digit',
      month: 'long',
      year: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
    })
  }
})
</script>

<template>
  <div>
    <h2 class="text-lg text-center text-color-copy-primary font-semibold mb-5">
      Moon and Sun altitude at <strong>{{ place.name }}</strong>
    </h2>

    <div class="h-[300px]">
      <UnovisChart :chartConfig="chartConfig" />
    </div>

    <div class="flex justify-center gap-2 mt-2">
      <div class="flex items-center gap-2">
        <span>At</span>
        <strong>{{ localDatetime }}</strong>

        <div class="flex items-center gap-2">
          <IconSun className="w-6 h-6 fill-blue-300 stroke-blue-300" />
          <strong class="text-blue-300">Sun</strong>
          <span class="text-lg text-blue-300 font-bold">
            {{ chartConfig.lineAltitudes[0]?.sunAltitude?.toFixed(1) }}&deg;
          </span>
        </div>

        <div class="flex items-center gap-2">
          <IconMoon className="w-6 h-6 fill-teal-500 stroke-teal-500" />
          <strong class="text-teal-500">Moon</strong>
          <span class="text-lg text-teal-500 font-bold">
            {{ chartConfig.lineAltitudes[0]?.moonAltitude?.toFixed(1) }}&deg;
          </span>
        </div>
      </div>
    </div>
  </div>
</template>
