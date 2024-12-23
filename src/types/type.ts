import { type Ref } from 'vue'

export interface State {
  showIntro: boolean
  timeSelected: Ref<string>
  placeSelected: Place | Ref<Place>
}

export interface Place {
  id: number
  name: string
  latitude: number
  longitude: number
  country?: string
  admin1?: string
  admin2?: string
  country_code?: string
  timezone?: string
}

export interface ChartDataPoint {
  time: Date
  sunAltitude: number
  moonAltitude: number
}

export interface ChartConfig {
  xAccessor: (d: ChartDataPoint) => Date
  sunAccessor: (d: ChartDataPoint) => number
  moonAccessor: (d: ChartDataPoint) => number
  xTickFormat: (d: Date) => string
  lineAltitudes: ChartDataPoint[]
}
