import type { Meta, StoryObj as Story } from "@storybook/react";
import ChinguListPage from "../ChinguListPage";
import { mockData } from "../mockData";

const meta = {
  title: "Components/ChinguListPage",
  component: ChinguListPage,
  tags: ["autodocs"],
  args: {},
} satisfies Meta<typeof ChinguListPage>;

export default meta;

export const Default: Story = {
  args: {
    data: mockData,
  },
};
