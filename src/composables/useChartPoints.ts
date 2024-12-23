// composables/useChartPoints.ts
import { useAstrometryApi } from './useAstrometryApi'
import type { ChartDataPoint, Place } from '@/types/type'

export function useChartPoints() {
  const { calculateAltitudes } = useAstrometryApi()

  const generatePoints = (
    baseDate: string,
    location: Pick<Place, 'latitude' | 'longitude'>,
    hoursCount: number = 24,
  ): ChartDataPoint[] => {
    return Array.from({ length: hoursCount }, (_, hour) => {
      const currentTime = new Date(baseDate)
      currentTime.setHours(currentTime.getHours() + hour)

      const { sun, moon } = calculateAltitudes(currentTime, {
        latitude: location.latitude,
        longitude: location.longitude,
      })

      return {
        time: currentTime,
        sunAltitude: sun.alt,
        moonAltitude: moon.alt,
      }
    })
  }

  return { generatePoints }
}
