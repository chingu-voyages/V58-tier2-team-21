import type { FilterStateType } from "./ChinguListPage";
import Button from "./Button";

type ChinguFilterProps = {
  handleSubmit: () => void;
  handleClear: () => void;
  handleChange: (
    category: keyof FilterStateType,
    value: string,
    checked: boolean,
  ) => void;
  filter: FilterStateType;
};

const genderOptions = [
  { value: "female", label: "Female" },
  { value: "male", label: "Male" },
  { value: "non-binary", label: "Non-binary" },
];
const roleTypeOptions = [
  { value: "role-python", label: "Python" },
  { value: "role-web", label: "Web" },
];
const voyageRoleOptions = [
  { value: "voyage-role-dev", label: "Developer" },
  { value: "voyage-role-ui", label: "UI/UX Designer" },
  { value: "voyage-role-scrum", label: "Scrum Master" },
  { value: "voyage-role-owner", label: "Product Owner" },
];
const soloProjectTier = [
  { value: "solo-tier-1", label: "Tier 1" },
  { value: "solo-tier-2", label: "Tier 2" },
  { value: "solo-tier-3", label: "Tier 3" },
];
const voyageTier = [
  { value: "voyage-tier-1", label: "Tier 1" },
  { value: "voyage-tier-2", label: "Tier 2" },
  { value: "voyage-tier-3", label: "Tier 3" },
];

export default function ChinguFilter({
  handleSubmit,
  handleClear,
  handleChange,
  filter,
}: ChinguFilterProps) {
  return (
    <>
      <form action="">
        <div>
          <fieldset className="my-4 p-2">
            <legend className="text-lg">Year of joining</legend>
            <input
              type="number"
              name="min-joined"
              id="min-joined"
              placeholder="From year:"
              className="border border-gray-400 p-1 rounded-lg mb-2 mr-2 focus:outline-none focus:ring-2 focus:ring-gray-600"
            />
            <input
              type="number"
              name="max-joined"
              id="max-joined"
              placeholder="To year:"
              className="border border-gray-400 p-1 rounded-lg mb-2 mr-2  focus:outline-none focus:ring-2 focus:ring-gray-600"
            />
          </fieldset>
        </div>

        <div className="flex flex-col">
          <fieldset className="mb-4 p-2">
            <legend className="text-lg">Gender</legend>
            {genderOptions.map((option) => (
              <div key={option.value}>
                <label
                  htmlFor={`gender-${option.value}`}
                  className="flex items-center gap-2 mb-1 px-2 py-1 hover:bg-gray-300 hover:rounded-lg hover:cursor-pointer"
                >
                  <input
                    type="checkbox"
                    id={`gender-${option.value}`}
                    value={option.value}
                    checked={filter.gender.includes(option.value)}
                    onChange={(e) =>
                      handleChange("gender", e.target.value, e.target.checked)
                    }
                    className="hover:cursor-pointer"
                  />
                  {option.label}
                </label>
              </div>
            ))}
          </fieldset>
        </div>

        <div className="flex flex-col">
          <fieldset className="mb-4 p-2">
            <legend className="text-lg">Country</legend>
            <div>
              <label
                htmlFor="country-desc"
                className="flex items-center gap-2 mb-1 px-2 py-1 hover:bg-gray-300 hover:rounded-lg hover:cursor-pointer"
              >
                <input
                  type="radio"
                  id="country-desc"
                  name="countryOrder"
                  value="country-desc"
                  className="hover:cursor-pointer"
                />
                Descending order
              </label>
            </div>
            <div>
              <label
                htmlFor="country-asc"
                className="flex items-center gap-2 mb-1 px-2 py-1 hover:bg-gray-300 hover:rounded-lg hover:cursor-pointer"
              >
                <input
                  type="radio"
                  id="country-asc"
                  name="countryOrder"
                  value="country-asc"
                  className="hover:cursor-pointer"
                />
                Ascending order
              </label>
            </div>
          </fieldset>
        </div>

        <div className="flex flex-col">
          <fieldset className="mb-4 p-2">
            <legend className="text-lg">Role Type</legend>
            {roleTypeOptions.map((option) => (
              <div key={option.value}>
                <label
                  htmlFor={`roleType-${option.value}`}
                  className="flex items-center gap-2 mb-1 px-2 py-1 hover:bg-gray-300 hover:rounded-lg hover:cursor-pointer"
                >
                  <input
                    type="checkbox"
                    id={`roleType-${option.value}`}
                    value={option.value}
                    checked={filter.roleType.includes(option.value)}
                    onChange={(e) =>
                      handleChange("roleType", e.target.value, e.target.checked)
                    }
                    className="hover:cursor-pointer"
                  />
                  {option.label}
                </label>
              </div>
            ))}
          </fieldset>
        </div>

        <div className="flex flex-col">
          <fieldset className="mb-4 p-2">
            <legend className="text-lg">Voyage Role</legend>
            {voyageRoleOptions.map((option) => (
              <div key={option.value}>
                <label
                  htmlFor={`voyageRole-${option.value}`}
                  className="flex items-center gap-2 mb-1 px-2 py-1 hover:bg-gray-300 hover:rounded-lg hover:cursor-pointer"
                >
                  <input
                    type="checkbox"
                    id={`voyageRole-${option.value}`}
                    value={option.value}
                    checked={filter.voyageRole.includes(option.value)}
                    onChange={(e) =>
                      handleChange(
                        "voyageRole",
                        e.target.value,
                        e.target.checked,
                      )
                    }
                    className="hover:cursor-pointer"
                  />

                  {option.label}
                </label>
              </div>
            ))}
          </fieldset>
        </div>

        <div className="flex flex-col">
          <fieldset className="mb-4 p-2">
            <legend className="text-lg">Solo Project Tier</legend>
            {soloProjectTier.map((option) => (
              <div key={option.value}>
                <label
                  htmlFor={`soloTier-${option.value}`}
                  className="flex items-center gap-2 mb-1 px-2 py-1 hover:bg-gray-300 hover:rounded-lg hover:cursor-pointer"
                >
                  <input
                    type="checkbox"
                    id={`soloTier-${option.value}`}
                    value={option.value}
                    checked={filter.soloProjectTier.includes(option.value)}
                    onChange={(e) =>
                      handleChange(
                        "soloProjectTier",
                        e.target.value,
                        e.target.checked,
                      )
                    }
                    className="hover:cursor-pointer"
                  />
                  {option.label}
                </label>
              </div>
            ))}
          </fieldset>
        </div>

        <div className="flex flex-col">
          <fieldset className="mb-4 p-2">
            <legend className="text-lg">Voyage Tier</legend>
            {voyageTier.map((option) => (
              <div key={option.value}>
                <label
                  htmlFor={`voyageTier-${option.value}`}
                  className="flex items-center gap-2 mb-1 px-2 py-1 hover:bg-gray-300 hover:rounded-lg hover:cursor-pointer"
                >
                  <input
                    type="checkbox"
                    id={`voyageTier-${option.value}`}
                    value={option.value}
                    checked={filter.voyageTier.includes(option.value)}
                    onChange={(e) =>
                      handleChange(
                        "voyageTier",
                        e.target.value,
                        e.target.checked,
                      )
                    }
                    className="hover:cursor-pointer"
                  />
                  {option.label}
                </label>
              </div>
            ))}
          </fieldset>
        </div>

        <div>
          <fieldset className="mb-4 p-2">
            <legend className="text-lg">Voyage</legend>
            <input
              type="number"
              name="min-voyage"
              id="min-voyage"
              placeholder="From Voyage:"
              className="border border-gray-400 p-1 rounded-lg mb-2 mr-2  focus:outline-none focus:ring-2 focus:ring-gray-600"
            />
            <input
              type="number"
              name="max-voyage"
              id="max-voyage"
              placeholder="To Voyage:"
              className="border border-gray-400 p-1 rounded-lg mb-2 mr-2  focus:outline-none focus:ring-2 focus:ring-gray-600"
            />
          </fieldset>
        </div>
      </form>

      <div className="buttons mt-4 flex justify-around gap-4">
        <Button variant="primary" type="submit" onClick={handleSubmit}>
          Submit
        </Button>
        <Button variant="secondary" onClick={handleClear}>
          Clear
        </Button>
      </div>
    </>
  );
}
