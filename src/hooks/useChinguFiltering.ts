import {
  useState,
  useCallback,
  useEffect,
  type Dispatch,
  type SetStateAction,
} from "react";
import { useLoaderData } from "react-router";
import type { ChinguCardPropsType } from "../shared/components/ChinguCard.tsx";

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

export type filterHookType = {
  filteredList: ChinguCardPropsType[];
  filter: FilterStateType;
  handleChange: (
    category: ArrayFilterKey,
    value: string,
    checked: boolean,
  ) => void;
  handleNumericChange: (
    category:
      | "yearOfJoiningMin"
      | "yearOfJoiningMax"
      | "voyageNumMin"
      | "voyageNumMax",
    value: string,
  ) => void;
  handleCountryOrderChange: (value: "country-asc" | "country-desc") => void;
  search: () => void;
  clearFilters: () => void;
  searchTerm: string;
  setSearchTerm: Dispatch<SetStateAction<string>>;
};

function applySearchToList(list: ChinguCardPropsType[], searchTerm: string) {
  if (!searchTerm) return list;

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

  return list.filter((chingu) =>
    searchableFields.some((field) =>
      chingu[field].toLowerCase().includes(searchTerm.toLowerCase()),
    ),
  );
}

function applyFiltersToList(
  list: ChinguCardPropsType[],
  filter: FilterStateType,
) {
  const arrayFilterKeys: ArrayFilterKey[] = [
    "gender",
    "roleType",
    "voyageRole",
    "soloProjectTier",
    "voyageTier",
    "countryName",
    "countryCode",
  ];

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
    if (filter.yearOfJoiningMin !== undefined && Number.isFinite(year)) {
      if (year < filter.yearOfJoiningMin) return false;
    }

    if (filter.yearOfJoiningMax !== undefined && Number.isFinite(year)) {
      if (year > filter.yearOfJoiningMax) return false;
    }

    const voyageNumRaw = String(chingu.voyageNum || "");
    const voyage = Number(voyageNumRaw.slice(1));
    if (filter.voyageNumMin !== undefined && Number.isFinite(voyage)) {
      if (voyage < filter.voyageNumMin) return false;
    }
    if (filter.voyageNumMax !== undefined && Number.isFinite(voyage)) {
      if (voyage > filter.voyageNumMax) return false;
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

export function useChinguFiltering() {
  const data = useLoaderData();

  const [searchTerm, setSearchTerm] = useState<string>("");
  const [appliedFilter, setAppliedFilter] = useState<FilterStateType | null>(
    null,
  );
  const [filteredList, setFilteredList] = useState<ChinguCardPropsType[]>(data);
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
    yearOfJoiningMin: undefined,
    yearOfJoiningMax: undefined,
    voyageNumMin: undefined,
    voyageNumMax: undefined,
  });

  useEffect(() => {
    const baseList = appliedFilter
      ? applyFiltersToList(data, appliedFilter)
      : data;
    const result = applySearchToList(baseList, searchTerm);
    setFilteredList(result);
  }, [searchTerm, appliedFilter, data]);

  const applyFilters = useCallback(
    (filter: FilterStateType) => {
      const baseList = applySearchToList(data, searchTerm);
      const result = applyFiltersToList(baseList, filter);
      setFilteredList(result);
      setAppliedFilter(filter);
    },
    [data, searchTerm],
  );

  const handleChange = useCallback(
    (category: ArrayFilterKey, value: string, checked: boolean) => {
      setFilter((prev) => {
        const newArray = checked
          ? [...prev[category], value]
          : prev[category].filter((v) => v !== value);
        return { ...prev, [category]: newArray };
      });
    },
    [],
  );

  const handleNumericChange = useCallback(
    (
      category:
        | "yearOfJoiningMin"
        | "yearOfJoiningMax"
        | "voyageNumMin"
        | "voyageNumMax",
      value: string,
    ) => {
      setFilter((prev) => ({
        ...prev,
        [category]: value ? Number(value) : undefined,
      }));
    },
    [],
  );

  const handleCountryOrderChange = useCallback(
    (value: "country-asc" | "country-desc") => {
      setFilter((prev) => ({ ...prev, countryOrder: value }));
    },
    [],
  );

  const search = useCallback(
    () => applyFilters(filter),
    [applyFilters, filter],
  );

  const clearFilters = useCallback(() => {
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
  }, [data]);

  return {
    filteredList,
    searchTerm,
    setSearchTerm,
    filter,
    handleChange,
    handleNumericChange,
    handleCountryOrderChange,
    search,
    clearFilters,
  };
}
