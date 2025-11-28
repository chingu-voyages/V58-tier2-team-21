import ChinguFilter from "./ChinguFilter";
import ChinguList from "./ChinguList";
import type { ChinguCardPropsType } from "./ChinguCard";
import ChingueSearch from "./ChinguSearch";
import { useChinguFiltering } from "../../hooks/useChinguFiltering";

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
  

  return (
    <div className="grid grid-cols-[15rem_1fr] gap-4 items-start w-full overflow-hidden">
      <div className="h-screen overflow-y-auto pr-1 bg-gray-200 border border-gray-400 rounded-lg p-2">
        <ChingueSearch searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
        <ChinguFilter
          handleSubmit={handleSubmit}
          handleClear={handleClear}
          handleChange={handleChange}
          handleNumericChange={handleNumericChange}
          handleCountryOrderChange={handleCountryOrderChange}
          filter={filter}
        />
      </div>
      <div className="flex-1">
        <ChinguList data={filteredList} />
      </div>
    </div>
  );
}
