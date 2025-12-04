import type { Meta, StoryObj as Story } from "@storybook/react";
import ChinguCard from "../ChinguCard";

const meta = {
  title: "Components/ChinguCard",
  component: ChinguCard,
  tags: ["autodocs"],
  args: {
    gender: "MALE",
    countryName: "New Zealand",
    countryCode: "NZ",
    roleType: "Web",
    voyageRole: "Developer",
    soloProjectTier: "Tier 2",
    voyageTier: "Tier 2",
    voyageNum: "V58",
    timestamp: "2025-10-18 08:56",
  },
} satisfies Meta<typeof ChinguCard>;

export const Default: Story = {
  args: {},
};

export const EmptyTiers: Story = {
  args: {
    soloProjectTier: "",
    voyageTier: "",
    voyageNum: "",
  },
};

export const DifferentRole: Story = {
  args: {
    roleType: "Python",
    voyageRole: "Product Owner",
    gender: "prefer not to say",
    soloProjectTier: "Tier 2, Tier 3",
  },
};

export const DifferentCountry: Story = {
  args: {
    countryName: "Canada",
    countryCode: "CA",
  },
};

export default meta;
