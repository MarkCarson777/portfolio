import type { Meta, StoryObj } from "@storybook/react-vite";
import { ExperienceBar } from ".";

const meta: Meta<typeof ExperienceBar> = {
  title: "ExperienceBar",
  component: ExperienceBar,
};
export default meta;

type Story = StoryObj<typeof ExperienceBar>;

export const Default: Story = {};
