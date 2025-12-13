import type {
  ArrayFilterKey,
  FilterStateType,
} from "../../hooks/useChinguFiltering";
import Button from "./Button";

type ChinguFilterProps = {
  handleSubmit: () => void;
  handleClear: () => void;
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
  filter: FilterStateType;
};

const genderOptions = [
  { value: "female", label: "Female" },
  { value: "male", label: "Male" },
  { value: "non-binary", label: "Non-binary" },
  { value: "prefer not to say", label: "Prefer not to say" },
];
const roleTypeOptions = [
  { value: "Python", label: "Python" },
  { value: "Web", label: "Web" },
];
const voyageRoleOptions = [
  { value: "Developer", label: "Developer" },
  { value: "UI/UX Designer", label: "UI/UX Designer" },
  { value: "Scrum Master", label: "Scrum Master" },
  { value: "Product Owner", label: "Product Owner" },
];
const soloProjectTierOptions = [
  { value: "Tier 1", label: "Tier 1" },
  { value: "Tier 2", label: "Tier 2" },
  { value: "Tier 3", label: "Tier 3" },
];
const voyageTierOptions = [
  { value: "Tier 1", label: "Tier 1" },
  { value: "Tier 2", label: "Tier 2" },
  { value: "Tier 3", label: "Tier 3" },
];

export default function ChinguFilter({
  handleSubmit,
  handleClear,
  handleChange,
  handleNumericChange,
  handleCountryOrderChange,
  filter,
}: ChinguFilterProps) {
  const multiFilters: {
    name: ArrayFilterKey;
    label: string;
    options: { value: string; label: string }[];
  }[] = [
    { name: "gender", label: "Gender", options: genderOptions },
    { name: "roleType", label: "Role Type", options: roleTypeOptions },
    { name: "voyageRole", label: "Voyage Role", options: voyageRoleOptions },
    {
      name: "soloProjectTier",
      label: "Solo Project Tier",
      options: soloProjectTierOptions,
    },
    { name: "voyageTier", label: "Voyage Tier", options: voyageTierOptions },
  ];

  const radioFilters: {
    name: "countryOrder";
    label: string;
    options: { value: "country-asc" | "country-desc"; label: string }[];
  }[] = [
    {
      name: "countryOrder",
      label: "Country",
      options: [
        { value: "country-desc", label: "Descending" },
        { value: "country-asc", label: "Ascending" },
      ],
    },
  ];

  const rangeFilters: {
    name: {
      min: "yearOfJoiningMin" | "voyageNumMin";
      max: "yearOfJoiningMax" | "voyageNumMax";
    };
    label: string;
    min: number;
    max: number;
  }[] = [
    {
      name: { min: "yearOfJoiningMin", max: "yearOfJoiningMax" },
      label: "Year of Joining",
      min: 2019,
      max: 2025,
    },
    {
      name: { min: "voyageNumMin", max: "voyageNumMax" },
      label: "Voyage",
      min: 32,
      max: 59,
    },
  ];

  return (
    <>
      <form className="md:bg-secondary bg-primary-light py-2" action="">
        {/* Range filters */}
        {rangeFilters.map((f) => (
          <fieldset key={f.label} className="my-4 p-2">
            <legend className="text-lg mb-2">{f.label}</legend>
            <div className="flex flex-col gap-2">
              <div className="flex items-center gap-2">
                <input
                  type="range"
                  min={f.min}
                  max={f.max}
                  value={filter[f.name.min] ?? f.min}
                  onChange={(e) =>
                    handleNumericChange(f.name.min, e.target.value)
                  }
                  className="flex-1 w-full h-2 mb-2 md:bg-primary-light bg-secondary rounded-lg appearance-none accent-gray-500"
                />
                <span>{filter[f.name.min]}</span>
              </div>
              <div className="flex items-center gap-2">
                <input
                  type="range"
                  min={f.min}
                  max={f.max}
                  value={filter[f.name.max] ?? f.min}
                  onChange={(e) =>
                    handleNumericChange(f.name.max, e.target.value)
                  }
                  className="flex-1 w-full h-2 md:bg-primary-light bg-secondary rounded-lg appearance-none accent-gray-500"
                />
                <span>{filter[f.name.max]}</span>
              </div>
            </div>
          </fieldset>
        ))}

        {/* Multi-choice filters */}
        {multiFilters.map((f) => (
          <fieldset key={f.name} className="mb-4 p-2">
            <legend className="text-lg mb-2">{f.label}</legend>
            <div className="flex flex-wrap gap-2">
              {f.options.map((option) => {
                const isSelected = filter[f.name].includes(option.value);
                return (
                  <button
                    key={option.value}
                    type="button"
                    onClick={() =>
                      handleChange(
                        f.name as ArrayFilterKey,
                        option.value,
                        !isSelected,
                      )
                    }
                    className={`px-4 py-1 rounded-full text-sm font-medium m-1 transition-colors
                  ${isSelected ? "bg-primary" : "bg-secondary-light hover:bg-primary"}
                    hover:cursor-pointer
                `}
                  >
                    {option.label}
                  </button>
                );
              })}
            </div>
          </fieldset>
        ))}

        {/* Radio filter */}
        {radioFilters.map((f) => (
          <fieldset key={f.name} className="mb-4 p-2">
            <legend className="text-lg mb-2">{f.label}</legend>
            <div className="flex flex-wrap gap-2">
              {f.options.map((option) => {
                const isSelected = filter[f.name] === option.value;
                return (
                  <button
                    key={option.value}
                    type="button"
                    onClick={() =>
                      handleCountryOrderChange(
                        option.value as "country-asc" | "country-desc",
                      )
                    }
                    className={`px-4 py-1 rounded-full text-sm font-medium transition-colors 
                      ${isSelected ? "bg-primary" : "bg-secondary-light hover:bg-primary"}
                    hover:cursor-pointer
                    }`}
                  >
                    {option.label}
                  </button>
                );
              })}
            </div>
          </fieldset>
        ))}
      </form>

      <div className="md:bg-secondary bg-primary-light mt-4 flex justify-around gap-4">
        {/* Desktop submit */}
        <Button
          variant="primary"
          type="submit"
          className="hidden md:inline-flex"
          onClick={handleSubmit}
        >
          Submit
        </Button>
        {/* Mobile submit */}
        <Button
          variant="filter"
          type="submit"
          className="md:hidden"
          onClick={handleSubmit}
        >
          Submit
        </Button>
        <Button variant="secondary" onClick={handleClear}>
          Clear
        </Button>
      </div>
    </>
  );
}
