import ChinguFilter from "./ChinguFilter";
import ChinguList from "./ChinguList";
import type { ChinguCardPropsType } from "./ChinguCard";
import ChingueSearch from "./ChinguSearch";
import { useChinguFiltering } from "../../hooks/useChinguFiltering";
import { useState } from "react";

type ChinguListPageProps = {
  data: ChinguCardPropsType[];
};

export default function ChinguListPage({ data }: ChinguListPageProps) {
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
  } = useChinguFiltering(data);

  const [isFilterOpen, setIsFilterOpen] = useState(false);

  return (
    <>
      <div className="relative">
        <div className="grid grid-cols-1 md:grid-cols-[16rem_1fr] gap-2 items-start w-full overflow-hidden">
          {/* Desktop/tablet */}
          <div className="bg-primaryDark hidden md:block h-screen overflow-y-auto scrollbar scrollbar-track-primaryDark scrollbar-thumb-backgroundLighter rounded-lg ml-2 mt-5 p-2">
            <ChingueSearch
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

          <div className="flex-1 md:py-5">
            <ChinguList data={filteredList} />
          </div>
        </div>

        {/* Mobile sliding panel opener */}
        <div
          className="md:hidden fixed top-1/2 left-0 -translate-y-1/2 bg-backgroundLighter text-white px-1 py-4 rounded-r-md shadow cursor-pointer z-50 flex items-center justify-center transform transition-transform duration-300"
          onClick={() => setIsFilterOpen((prev) => !prev)}
        >
          <span
            className={`text-primaryLight font-bold text-lg transform transition-transform duration 300 ${isFilterOpen ? "rotate-180" : "rotate-0"}`}
          >
            ▶
          </span>
        </div>

        {/* Mobile sliding panel */}
        <div
          className={`fixed top-0 left-0 h-full w-64 bg-primaryDark p-4 overflow-y-auto z-40 transform transition-transform duration-300 md:hidden
        ${isFilterOpen ? "translate-x-0" : "-translate-x-full"}`}
        >
          <ChingueSearch
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
    </>
  );
}
