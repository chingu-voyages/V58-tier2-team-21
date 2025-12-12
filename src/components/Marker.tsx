import { type ReactNode, useEffect, useRef } from "react";
import { createPortal } from "react-dom";
import mapboxgl from 'mapbox-gl'
import MapPopup from "./MapPopup";

export type CountryDataType = {
  code: string
  name: string
  coordinates: {lat: number, lon: number}
  count: number
}

interface MarkerProps {
  country: CountryDataType
  map: mapboxgl.Map
  selectedCountry: CountryDataType | null
  setSelectedCountry: (country: CountryDataType) => void
}

const Marker = ({ map, country, selectedCountry, setSelectedCountry }: MarkerProps) => {
  const { coordinates } = country

  const contentRef = useRef(document.createElement("div"));
  const markerRef = useRef<mapboxgl.Marker | null>(null)
  const isSelected = country.code === selectedCountry?.code;

  useEffect(() => {

    markerRef.current = new mapboxgl.Marker(contentRef.current)
      .setLngLat([coordinates.lon, coordinates.lat])
      .addTo(map)

    return () => {
      markerRef.current?.remove()
    }
  }, [])

  const element: ReactNode = (
    <article className='relative'>
      <div
        onClick={() => setSelectedCountry(country)}
        className={'bg-contain bg-no-repeat cursor-pointer transition w-[37px] h-10'}
        style={{
          backgroundImage: (
            isSelected
              ? 'url("./sg-marker-selected.svg")'
              : 'url("./sg-marker.svg")'),
        }}>
      </div>
      {isSelected && <MapPopup country={selectedCountry} /> }
    </article>
  )

  return (
    <>
      {createPortal(
        element,
        contentRef.current
      )}
    </>
  )
}

export default Marker