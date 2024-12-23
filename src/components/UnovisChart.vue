<script setup lang="ts">
import { VisXYContainer, VisLine, VisAxis } from '@unovis/vue'
import type { ChartConfig } from '@/types/type'

defineProps<{ chartConfig: ChartConfig }>()
</script>

<template>
  <VisXYContainer :data="chartConfig.lineAltitudes" :height="300">
    <VisAxis type="x" :tickFormat="chartConfig.xTickFormat" label="Time (UTC)" />
    <VisAxis type="y" label="Altitude (degrees)" :domain="[-90, 90]" />
    <VisLine :x="chartConfig.xAccessor" :y="chartConfig.sunAccessor" color="#93C5FD" name="Sun" />
    <VisLine :x="chartConfig.xAccessor" :y="chartConfig.moonAccessor" color="#14B8A6" name="Moon" />
  </VisXYContainer>
</template>
