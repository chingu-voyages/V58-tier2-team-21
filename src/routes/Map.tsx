import ChinguFilter from "../shared/components/ChinguFilter";
import ChinguSearch from "../shared/components/ChinguSearch.tsx";
import { useState, useRef, useEffect } from "react";
import { type filterHookType } from "../hooks/useChinguFiltering";
import { useOutletContext } from "react-router";
import mapboxgl from 'mapbox-gl'
import 'mapbox-gl/dist/mapbox-gl.css'
import Marker, { type CountryDataType } from "../components/Marker.tsx"
import { useMemo } from "react";
import useIsMobile from "../hooks/useIsMobile.ts";

type AggregatedChinguData = {
  [key: string]: CountryDataType;
};

export default function ChinguMapPage() {
  const {
    filteredList,
    searchTerm,
    setSearchTerm,
    filter,
    handleChange,
    handleNumericChange,
    handleCountryOrderChange,
    handleSubmit,
    handleClear,
  }: filterHookType = useOutletContext();

  const [isFilterOpen, setIsFilterOpen] = useState(false);


  const countryData: CountryDataType[] = useMemo(
    () =>
      Object.values(
        filteredList.reduce<AggregatedChinguData>((acc, item) => {
          const { countryCode, countryName, centroidCoordinates } = item;

          if (!centroidCoordinates?.lat || !centroidCoordinates?.lon) {
            return acc;
          }

          if (!acc[countryCode]) {
            acc[countryCode] = {
              code: countryCode,
              name: countryName,
              coordinates: { ...centroidCoordinates }, // keep the first valid coordinates
              count: 0,
            };
          }

          acc[countryCode].count += 1;
          return acc;
        }, {}),
      ),
    [filteredList],
  );

  const mapRef = useRef<mapboxgl.Map | null>(null);
  const mapContainerRef = useRef<HTMLDivElement>(null);

  const isMobile = useIsMobile();

  const [mapLoaded, setMapLoaded] = useState(false);

  const [selectedCountry, setSelectedCountry] = useState<CountryDataType | null>(null)

  useEffect(() => {
    // Set your Mapbox access token
    mapboxgl.accessToken = 'ENTER API KEY HERE'

    mapRef.current = new mapboxgl.Map({
      container: mapContainerRef.current!,
      center: [-77.03915, 38.90025], // Washington DC
      zoom: 2,
      config: {
        basemap: { theme: 'faded'}
      }
    })

    mapRef.current.on('load', () => {
      setMapLoaded(true)
    })

    return () => {
      mapRef.current?.remove()
    }
  }, [])

  useEffect(() => {
    if (!selectedCountry ) return

    mapRef.current!.flyTo(
      {center: [selectedCountry.coordinates.lon, selectedCountry.coordinates.lat],
        zoom: 4,
        duration: 1000}
    )

  },[selectedCountry])

    function handleFilterSubmit() {
    handleSubmit();

    if (isMobile) {
      setIsFilterOpen(false);
    }
  }

  return (
    <div className="flex w-full">
      <div className="grid grid-cols-1 md:grid-cols-[16rem_1fr] gap-2 items-start w-full overflow-hidden">
        {/* Desktop/tablet */}
        <div className="bg-secondary hidden md:block h-screen overflow-y-auto scrollbar scrollbar-track-secondary scrollbar-thumb-black-100 rounded-lg ml-2 mt-5 p-2">
          <ChinguSearch
            searchTerm={searchTerm}
            setSearchTerm={setSearchTerm}
          />
          <ChinguFilter
            handleSubmit={handleSubmit}
            handleClear={handleClear}
            handleChange={handleChange}
            handleNumericChange={handleNumericChange}
            handleCountryOrderChange={handleCountryOrderChange}
            filter={filter}
          />
        </div>

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
      </div>

      {/* Mobile sliding panel opener */}
              <div
                className="md:hidden fixed top-1/2 left-0 -translate-y-1/2 bg-secondary-light text-white px-1 py-4 rounded-r-md shadow cursor-pointer z-50 flex items-center justify-center transform transition-transform duration-300"
                onClick={() => setIsFilterOpen((prev) => !prev)}
              >
                <span
                  className={`text-primary-light font-bold text-2xl transform transition-transform duration 300 ${isFilterOpen ? "rotate-180" : "rotate-0"}`}
                >
                  ▶
                </span>
              </div>
      
              {/* Mobile sliding panel */}
              <div
                className={`fixed top-0 left-0 h-full w-64 bg-primary-light border rounded-lg p-4 overflow-y-auto z-40 transform transition-transform duration-300 md:hidden
              ${isFilterOpen ? "translate-x-0" : "-translate-x-full"}`}
              >
                <ChinguSearch searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
                <ChinguFilter
                  handleSubmit={handleFilterSubmit}
                  handleClear={handleClear}
                  handleChange={handleChange}
                  handleNumericChange={handleNumericChange}
                  handleCountryOrderChange={handleCountryOrderChange}
                  filter={filter}
                />
              </div>
      
              {/* Mobile overlay */}
              {isFilterOpen && (
                <div
                  className="mobile-overlay"
                  onClick={() => setIsFilterOpen(false)}
                />
              )}
            </div>
  );
}
