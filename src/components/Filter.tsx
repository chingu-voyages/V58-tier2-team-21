import Form from "../shared/components/Form";
import FieldSet from "../shared/components/FieldSet";
import Input from "../shared/components/Input";
import Choices from "../shared/components/multipleChoice/Choices";
import Choice from "../shared/components/multipleChoice/Choice";
import { type filterHookType } from "../hooks/useChinguFiltering";

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

export default function Filter({filterHook}: {filterHook: filterHookType}) {
	const {
		search,
		handleChange,
		handleNumericChange,
		handleCountryOrderChange,
		filter,
		clearFilters,
		searchTerm,
		setSearchTerm
	} = filterHook;

	return (
		<Form onSubmit={search}>
			<div className="flex-1 flex flex-col gap-4">
				<FieldSet legend="Keyword search">
					<Input
						type="text"
						name="searchTerm"
						placeholder="Type keyword here"
						value={searchTerm}
						onChange={(e) => setSearchTerm(e.target.value)}
					/>
				</FieldSet>

				<hr />

				<FieldSet legend="Year joined">
					<Input
						type="number"
						name="minYear"
						placeholder="From"
						value={filter.yearOfJoiningMin ?? ""}
						onChange={(e) =>
							handleNumericChange("yearOfJoiningMin", e.target.value)
						}
					/>
					<Input
						type="number"
						name="maxYear"
						placeholder="To"
						value={filter.yearOfJoiningMax ?? ""}
						onChange={(e) =>
							handleNumericChange("yearOfJoiningMax", e.target.value)
						}
					/>
				</FieldSet>

				<FieldSet legend="Gender">
					<Choices name="gender" type="checkbox">
						{genderOptions.map(option => (
							<Choice
								key={option.value}
								label={option.label}
								value={option.value}
								checked={filter.gender.includes(option.value)}
								onChange={(e) =>
									handleChange("gender", e.target.value, e.target.checked)
								}
							/>
						))}
					</Choices>
				</FieldSet>

				<FieldSet legend="Role type">
					<Choices name="roleType" type="checkbox">
						{roleTypeOptions.map(option => (
							<Choice
								key={option.value}
								label={option.label}
								value={option.value}
								checked={filter.roleType.includes(option.value)}
								onChange={(e) =>
									handleChange("roleType", e.target.value, e.target.checked)
								}
							/>
						))}
					</Choices>
				</FieldSet>

				<FieldSet legend="Voyage role">
					<Choices name="voyageRole" type="checkbox">
						{voyageRoleOptions.map(option => (
							<Choice
								key={option.value}
								label={option.label}
								value={option.value}
								checked={filter.voyageRole.includes(option.value)}
								onChange={(e) =>
									handleChange("voyageRole", e.target.value, e.target.checked)
								}
							/>
						))}
					</Choices>
				</FieldSet>

				<FieldSet legend="Project tier">
					<Choices name="soloProjectTier" type="checkbox">
						{soloProjectTierOptions.map(option => (
							<Choice
								key={option.value}
								label={option.label}
								value={option.value}
								checked={filter.soloProjectTier.includes(option.value)}
								onChange={(e) =>
									handleChange("soloProjectTier", e.target.value, e.target.checked)
								}
							/>
						))}
					</Choices>
				</FieldSet>

				<FieldSet legend="Voyage tier">
					<Choices name="voyageTier" type="checkbox">
						{voyageTierOptions.map(option => (
							<Choice
								key={option.value}
								label={option.label}
								value={option.value}
								checked={filter.voyageTier.includes(option.value)}
								onChange={(e) =>
									handleChange("voyageTier", e.target.value, e.target.checked)
								}
							/>
						))}
					</Choices>
				</FieldSet>

				<FieldSet legend="Voyage">
					<Input
						type="number"
						name="minVoyage"
						placeholder="From Voyage:"
						value={filter.voyageNumMin ?? ""}
						onChange={(e) =>
							handleNumericChange("voyageNumMin", e.target.value)
						}
					/>
					<Input
						type="number"
						name="maxVoyage"
						placeholder="To Voyage:"
						value={filter.voyageNumMax ?? ""}
						onChange={(e) =>
							handleNumericChange("voyageNumMax", e.target.value)
						}
					/>
				</FieldSet>

				{/*<FieldSet legend="Country">*/}
				{/*	<Choices name="countryOrder" type="radio">*/}
				{/*		<Choice*/}
				{/*			label="Descending"*/}
				{/*			value="country-desc"*/}
				{/*			onChange={() => handleCountryOrderChange("country-desc")}*/}
				{/*		/>*/}
				{/*		<Choice*/}
				{/*			label="Ascending"*/}
				{/*			value="country-asc"*/}
				{/*			onChange={() => handleCountryOrderChange("country-asc")}*/}
				{/*		/>*/}
				{/*	</Choices>*/}
				{/*</FieldSet>*/}

				<FieldSet>
					<button
						type="submit"
						className="flex-1 min-w-0 h-10 px-2 rounded-sm bg-primary hover:bg-primary-light text-white-100 cursor-pointer"
					>Submit</button>
					<button
						type="button"
						className="flex-1 min-w-0 h-10 px-2 rounded-sm bg-secondary hover:bg-secondary-light text-white-100 cursor-pointer"
						onClick={clearFilters}
					>Clear</button>
				</FieldSet>
			</div>
		</Form>
	)
}