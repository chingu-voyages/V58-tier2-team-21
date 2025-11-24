import ChinguFilter from "./ChinguFilter";
import ChinguList from "./ChinguList";
import type { ChinguCardPropsType } from "./ChinguCard";
import ChingueSearch from "./ChinguSearch";
import { useState } from "react";

type ChinguListPageProps = {
  data: ChinguCardPropsType[];
};

export default function ChinguListPage({ data }: ChinguListPageProps) {
  const [searchTerm, setSearchTerm] = useState<string>("");

  const searchableFields: (keyof ChinguCardPropsType)[] = [
    "gender",
    "countryName",
    "countryCode",
    "roleType",
    "voyageRole",
    "soloProjectTier",
    "voyageTier",
    "voyageNum",
    "timestamp",
  ];

  function getFilteredList() {
    return data.filter((chingu) =>
      searchableFields.some((field) =>
        chingu[field].toLowerCase().includes(searchTerm.toLowerCase()),
      ),
    );
  }

  const filteredList = searchTerm === "" ? data : getFilteredList();

  return (
    <div className="flex flex-row gap-4">
      <div className="md:w-1/3 lg:w-1/4 bg-gray-200 border border-gray-400 rounded-lg p-2">
        <ChingueSearch searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
        <ChinguFilter />
      </div>
      <div className="flex-1">
        <ChinguList data={filteredList} />
      </div>
    </div>
  );
}
