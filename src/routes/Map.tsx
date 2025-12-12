import ChinguFilter from "../shared/components/ChinguFilter";
import ChinguList from "../shared/components/ChinguList";
import ChinguSearch from "../shared/components/ChinguSearch.tsx";
import { useState } from "react";
import { type filterHookType } from "../hooks/useChinguFiltering";
import { useOutletContext } from "react-router";

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

        <div className="w-full h-full bg-red-400">
          this is a test
        </div>
      </div>

      {/* Mobile sliding panel opener */}
      <div
        className="md:hidden fixed top-1/2 left-0 -translate-y-1/2 bg-black-100 text-white px-1 py-4 rounded-r-md shadow cursor-pointer z-50 flex items-center justify-center transform transition-transform duration-300"
        onClick={() => setIsFilterOpen((prev) => !prev)}
      >
        <span
          className={`text-secondary-light font-bold text-lg transform transition-transform duration 300 ${isFilterOpen ? "rotate-180" : "rotate-0"}`}
        >
          ▶
        </span>
      </div>

      {/* Mobile sliding panel */}
      <div
        className={`fixed top-0 left-0 h-full w-64 bg-secondary border rounded-lg p-4 overflow-y-auto z-40 transform transition-transform duration-300 md:hidden
      ${isFilterOpen ? "translate-x-0" : "-translate-x-full"}`}
      >
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
