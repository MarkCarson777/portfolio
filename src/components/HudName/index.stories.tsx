import type { Meta, StoryObj } from "@storybook/react-vite";
import { HudName } from ".";

const meta: Meta<typeof HudName> = {
  title: "HudName",
  component: HudName,
};
export default meta;

type Story = StoryObj<typeof HudName>;

export const Default: Story = {};
