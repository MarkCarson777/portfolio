import type { Meta, StoryObj } from "@storybook/react-vite";
import { HudStats } from ".";

const meta: Meta<typeof HudStats> = {
  title: "HudStats",
  component: HudStats,
};

export default meta;

type Story = StoryObj<typeof HudStats>;

export const Default: Story = {};
