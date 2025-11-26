import ChinguFilter from "./ChinguFilter";
import ChinguList from "./ChinguList";
import type { ChinguCardPropsType } from "./ChinguCard";
import ChingueSearch from "./ChinguSearch";
import { useState } from "react";

type ChinguListPageProps = {
  data: ChinguCardPropsType[];
};

export type FilterStateType = {
  gender: string[];
  countryName: string[],
  countryCode: string[],
  roleType: string[],
  voyageRole: string[],
  soloProjectTier: string[],
  voyageTier: string[],
  voyageNum: string[],
  timestamp: string[],
}

export default function ChinguListPage({ data }: ChinguListPageProps) {
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [filter, setFilter] = useState<FilterStateType>({
    gender: [],
    countryName: [],
    countryCode: [],
    roleType: [],
    voyageRole: [],
    soloProjectTier: [],
    voyageTier: [],
    voyageNum: [],
    timestamp: [],
  });

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

  function handleSubmit() {
    alert("Clicked!");
  }

  function handleClear() {
    alert("Cleared!");
  }

  function handleChange(
    category: keyof FilterStateType,
    value: string,
    checked: boolean,
  ) {
    setFilter((prev) => {
      const newArray = checked
        ? [...prev[category], value]
        : prev[category].filter((v) => v !== value);

      return { ...prev, [category]: newArray };
    });
  }

  const filteredList = searchTerm === "" ? data : getFilteredList();

  return (
    <div className="grid grid-cols-[15rem_1fr] gap-4 items-start w-full overflow-hidden">
      <div className="h-screen overflow-y-auto pr-1 bg-gray-200 border border-gray-400 rounded-lg p-2">
        <ChingueSearch searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
        <ChinguFilter
          handleSubmit={handleSubmit}
          handleClear={handleClear}
          handleChange={handleChange}
          filter={filter}
        />
      </div>
      <div className="flex-1">
        <ChinguList data={filteredList} />
      </div>
    </div>
  );
}
