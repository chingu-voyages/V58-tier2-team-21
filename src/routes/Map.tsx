import { useRef, useEffect, useState, useMemo } from 'react'
import mapboxgl from 'mapbox-gl'

import 'mapbox-gl/dist/mapbox-gl.css'

import { type filterHookType } from "../hooks/useChinguFiltering";
import { useOutletContext } from "react-router";

import Marker, { type CountryDataType } from "../components/Marker";

export default function Map() {
	const { filteredList }: filterHookType = useOutletContext();

	const countryData = useMemo(
		() => Object.values(
			filteredList.reduce((acc, item) => {
				const { countryCode, countryName, centroidCoordinates } = item;

				if (!centroidCoordinates?.lat || !centroidCoordinates?.lon) {
					return acc;
				}

				if (!acc[countryCode]) {
					acc[countryCode] = {
						code: countryCode,
						name: countryName,
						coordinates: { ...centroidCoordinates }, // keep the first valid coordinates
						count: 0
					};
				}

				acc[countryCode].count += 1;
				return acc;
			}, {})
		), [filteredList]
	)

	const mapRef = useRef<mapboxgl.Map | null>(null);
	const mapContainerRef = useRef<HTMLDivElement>(null);

	const [mapLoaded, setMapLoaded] = useState(false);

	const [selectedCountry, setSelectedCountry] = useState<CountryDataType | null>(null)

	useEffect(() => {
		// Set your Mapbox access token
		mapboxgl.accessToken = 'pk.eyJ1IjoiYmFzdGllbndpbmFudCIsImEiOiJjbWh4bGpxN2EwMjgzMmxzZmtxend2bDBnIn0.5wNa5GLqPkFiaOfTa-pqfA'

		mapRef.current = new mapboxgl.Map({
			container: mapContainerRef.current!,
			center: [-77.03915, 38.90025], // Washington DC
			zoom: 2,
			config: {
				basemap: { theme: 'faded'}
			}
		});

		mapRef.current.on('load', () => {
			setMapLoaded(true)
		});

		return () => {
			mapRef.current?.remove()
		}
	}, [])

	useEffect(() => {
		if (!selectedCountry ) return

		mapRef.current!.flyTo(
			{center: [selectedCountry.coordinates.lon, selectedCountry.coordinates.lat],
				zoom: 3,
				duration: 1000}
		)

	},[selectedCountry])

	return (
		<section className="h-full">
			<div className="h-full w-full" ref={mapContainerRef} />
			{mapLoaded && countryData.map((country: CountryDataType) => (
				<Marker
					key={country.code}
					country={country}
					map={mapRef.current!}
					setSelectedCountry={setSelectedCountry}
					selectedCountry={selectedCountry}
				/>
			))}
		</section>
	)
}