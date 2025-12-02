import type { Meta, StoryObj as Story } from "@storybook/react";
import ChinguFilter from "../ChinguFilter";

const meta = {
  title: "Components/ChinguFilter",
  component: ChinguFilter,
  tags: ["autodocs"],
  args: {},
} satisfies Meta<typeof ChinguFilter>;

export const Default: Story = {
  args: {},
};

export const Filled: Story = {
  args: {
    search: "developer",
    joinedYear: 2023,
    gender: ["male", "non-binary"],
    countrySort: "asc",
    roleType: ["Web"],
    voyageRole: ["Developer", "Scrum Master"],
    soloProjectTier: ["Tier 2"],
    voyageTier: ["Tier 1", "Tier 3"],
    voyage: "V58",
  },
};

export default meta;