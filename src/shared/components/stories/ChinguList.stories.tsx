import type { Meta, StoryObj as Story } from "@storybook/react";
import ChinguList from "../ChinguList";

const meta = {
  title: "Components/ChinguList",
  component: ChinguList,
  tags: ["autodocs"],
  args: {
    data: [
      {
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
      {
        gender: "FEMALE",
        countryName: "Canada",
        countryCode: "ca",
        roleType: "Python",
        voyageRole: "Product Owner",
        soloProjectTier: "Tier 1",
        voyageTier: "Tier 1",
        voyageNum: "V59",
        timestamp: "2025-09-18 11:30",
      },
      {
        gender: "MALE",
        countryName: "Germany",
        countryCode: "de",
        roleType: "Web",
        voyageRole: "Developer",
        soloProjectTier: "Tier 3",
        voyageTier: "Tier 3",
        voyageNum: "V60",
        timestamp: "2025-08-10 14:45",
      },
    ],
  },
} satisfies Meta<typeof ChinguList>;

export const Default: Story = {
  args: {},
};

export const EmptyList: Story = {
  args: { data: [] },
};

export const MissingTiers: Story = {
  args: {
    data: [
      {
        gender: "MALE",
        countryName: "New Zealand",
        countryCode: "nz",
        roleType: "Web",
        voyageRole: "Developer",
        soloProjectTier: "",
        voyageTier: "",
        voyageNum: "",
        timestamp: "2025-10-24 18:06",
      },
      {
        gender: "FEMALE",
        countryName: "Canada",
        countryCode: "ca",
        roleType: "Python",
        voyageRole: "Product Owner",
        soloProjectTier: "",
        voyageTier: "",
        voyageNum: "",
        timestamp: "2025-09-18 11:30",
      },
    ],
  },
};

export default meta;
