import {
  convertEquatorialToHorizontal,
  getSolarEquatorialCoordinate,
  getLunarEquatorialCoordinate,
} from '@observerly/astrometry'

interface Location {
  latitude: number
  longitude: number
}

interface AltitudeData {
  sun: { alt: number }
  moon: { alt: number }
}

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
