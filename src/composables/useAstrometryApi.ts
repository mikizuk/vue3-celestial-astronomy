import type { Location, AltitudeData } from '@/types/type'
import {
  convertEquatorialToHorizontal,
  getSolarEquatorialCoordinate,
  getLunarEquatorialCoordinate,
} from '@observerly/astrometry'

export function useAstrometryApi() {
  const calculateAltitudes = (currentTime: Date, location: Location): AltitudeData => {
    return {
      sun: convertEquatorialToHorizontal(
        currentTime,
        location,
        getSolarEquatorialCoordinate(currentTime),
      ),
      moon: convertEquatorialToHorizontal(
        currentTime,
        location,
        getLunarEquatorialCoordinate(currentTime),
      ),
    }
  }

  return { calculateAltitudes }
}
