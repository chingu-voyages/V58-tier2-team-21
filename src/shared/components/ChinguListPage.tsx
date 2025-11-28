import ChinguFilter from "./ChinguFilter";
import ChinguList from "./ChinguList";
import type { ChinguCardPropsType } from "./ChinguCard";
import ChingueSearch from "./ChinguSearch";
import { useEffect, useState } from "react";

type ChinguListPageProps = {
  data: ChinguCardPropsType[];
};

export type ArrayFilterKey =
  | "gender"
  | "roleType"
  | "voyageRole"
  | "soloProjectTier"
  | "voyageTier"
  | "countryName"
  | "countryCode";

export type FilterStateType = {
  yearOfJoiningMin?: number;
  yearOfJoiningMax?: number;
  voyageNumMin?: number;
  voyageNumMax?: number;
  gender: string[];
  countryName: string[];
  countryCode: string[];
  countryOrder?: "country-asc" | "country-desc" | "";
  roleType: string[];
  voyageRole: string[];
  soloProjectTier: string[];
  voyageTier: string[];
  voyageNum: string[];
  timestamp: string[];
};

export default function ChinguListPage({ data }: ChinguListPageProps) {
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [filter, setFilter] = useState<FilterStateType>({
    gender: [],
    countryName: [],
    countryCode: [],
    countryOrder: "",
    roleType: [],
    voyageRole: [],
    soloProjectTier: [],
    voyageTier: [],
    voyageNum: [],
    timestamp: [],
  });
  const [appliedFilter, setAppliedFilter] = useState<FilterStateType | null>(
    null,
  );
  const [filteredList, setFilteredList] = useState<ChinguCardPropsType[]>(data);

  const arrayFilterKeys: ArrayFilterKey[] = [
    "gender",
    "roleType",
    "voyageRole",
    "soloProjectTier",
    "voyageTier",
    "countryName",
    "countryCode",
  ];

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

  // helper function for keyword search
  function applySearchToList(
    list: ChinguCardPropsType[],
    term: string,
  ): ChinguCardPropsType[] {
    if (!term || term.trim() === "") return list;
    const lower = term.toLowerCase();
    return list.filter((chingu) =>
      searchableFields.some((field) =>
        String(chingu[field]).toLowerCase().includes(lower),
      ),
    );
  }

  //helper function to apply filters
  function applyFiltersToList(
    list: ChinguCardPropsType[],
    filter: FilterStateType
  ): ChinguCardPropsType[] {
    let result = list.filter((chingu) => {
      for (const key of arrayFilterKeys) {
        const selectedValues = filter[key];
        if (selectedValues && selectedValues.length > 0) {
          if (!selectedValues.includes(chingu[key])) return false;
        }
      }

    // Numbers
      const yearStr = String(chingu.timestamp || "").slice(0, 4);
      const year = Number(yearStr);
      if (
        filter.yearOfJoiningMin !== undefined &&
        Number.isFinite(year)
      ) {
        if (year < filter.yearOfJoiningMin) return false;
      }
        
      if (
        filter.yearOfJoiningMax !== undefined &&
        Number.isFinite(year)
      ) {
        if (year < filter.yearOfJoiningMax) return false;
      }

      const voyageNumRaw = String(chingu.voyageNum || "");
      const voyage = Number(voyageNumRaw.slice(1));
      if (filter.voyageNumMin !== undefined && Number.isFinite(voyage)) {
        if (voyage < filter.voyageNumMin) return false;
      }
      if (filter.voyageNumMax !== undefined && Number.isFinite(voyage)) {
        if (voyage < filter.voyageNumMax) return false;
      }  

      return true;
    });

    const sortOption = filter.countryOrder;

    if (sortOption === "country-asc") {
      result = [...result].sort((a, b) =>
        a.countryName.localeCompare(b.countryName),
      );
    }

    if (sortOption === "country-desc") {
      result = [...result]
        .sort((a, b) => a.countryName.localeCompare(b.countryName))
        .reverse();
    }

    return result;
  }

  useEffect(() => {
    const base = appliedFilter ? applyFiltersToList(data, appliedFilter) : data;
    const result = applySearchToList(base, searchTerm);
    setFilteredList(result);
  }, [searchTerm, appliedFilter, data]);


  function handleSubmit() {
    const snapshot = { ...filter };
    setAppliedFilter(snapshot);

    const searchBase = applySearchToList(data, searchTerm);
    const newList = applyFiltersToList(searchBase, snapshot);
    setFilteredList(newList);
  }

  function handleClear() {
    setFilter({
      gender: [],
      countryName: [],
      countryCode: [],
      countryOrder: "",
      roleType: [],
      voyageRole: [],
      soloProjectTier: [],
      voyageTier: [],
      voyageNum: [],
      timestamp: [],
    });

    setAppliedFilter(null);
    setSearchTerm("");
    setFilteredList(data);
  }

  function handleChange(
    category: ArrayFilterKey,
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

  function handleNumericChange(
    category:
      | "yearOfJoiningMin"
      | "yearOfJoiningMax"
      | "voyageNumMin"
      | "voyageNumMax",
    value: string,
  ) {
    setFilter((prev) => ({
      ...prev,
      [category]: value ? Number(value) : undefined,
    }));
  }

  function handleCountryOrderChange(value: "country-asc" | "country-desc") {
    setFilter((prev) => ({
      ...prev,
      countryOrder: value,
    }));
  }

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
