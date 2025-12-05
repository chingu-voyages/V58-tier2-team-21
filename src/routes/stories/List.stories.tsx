import type { Meta, StoryObj as Story } from "@storybook/react";
import List from "../List.tsx";
import { mockData } from "../../shared/components/mockData.ts";

const meta = {
  title: "Routes/List",
  component: List,
  tags: ["autodocs"],
  args: {},
} satisfies Meta<typeof List>;

export default meta;

export const Default: Story = {
  args: {
    data: mockData,
  },
};