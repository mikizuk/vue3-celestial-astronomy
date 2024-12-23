import { describe, it, expect, vi } from 'vitest'
import type { Mock } from 'vitest'
import {
  convertEquatorialToHorizontal,
  getSolarEquatorialCoordinate,
  getLunarEquatorialCoordinate,
} from '@observerly/astrometry'
import { useAstrometryApi } from './useAstrometryApi'

vi.mock('@observerly/astrometry', () => ({
  convertEquatorialToHorizontal: vi.fn(),
  getSolarEquatorialCoordinate: vi.fn(),
  getLunarEquatorialCoordinate: vi.fn(),
}))

describe('useAstrometryApi', () => {
  const { calculateAltitudes } = useAstrometryApi()

  it('should calculate altitudes for the sun and moon correctly', () => {
    const currentTime = new Date('2024-01-01T12:00:00Z')
    const location = { latitude: 40.7128, longitude: -74.006 } // Example: New York City

    const mockSolarCoordinates = { ra: 10, dec: 20 }
    const mockLunarCoordinates = { ra: 30, dec: 40 }

    const mockSolarAltitude = { alt: 45 }
    const mockLunarAltitude = { alt: 15 }

    const mockedGetSolarEquatorialCoordinate = getSolarEquatorialCoordinate as Mock
    const mockedGetLunarEquatorialCoordinate = getLunarEquatorialCoordinate as Mock
    const mockedConvertEquatorialToHorizontal = convertEquatorialToHorizontal as Mock

    mockedGetSolarEquatorialCoordinate.mockReturnValue(mockSolarCoordinates)
    mockedGetLunarEquatorialCoordinate.mockReturnValue(mockLunarCoordinates)
    mockedConvertEquatorialToHorizontal
      .mockImplementationOnce(() => mockSolarAltitude)
      .mockImplementationOnce(() => mockLunarAltitude)

    const result = calculateAltitudes(currentTime, location)

    expect(result).toEqual({
      sun: mockSolarAltitude,
      moon: mockLunarAltitude,
    })

    expect(mockedGetSolarEquatorialCoordinate).toHaveBeenCalledWith(currentTime)
    expect(mockedGetLunarEquatorialCoordinate).toHaveBeenCalledWith(currentTime)
    expect(mockedConvertEquatorialToHorizontal).toHaveBeenCalledWith(
      currentTime,
      location,
      mockSolarCoordinates,
    )
    expect(mockedConvertEquatorialToHorizontal).toHaveBeenCalledWith(
      currentTime,
      location,
      mockLunarCoordinates,
    )
  })
})
