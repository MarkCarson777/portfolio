import type { Meta, StoryObj } from "@storybook/react-vite";
import { Button } from ".";

const meta: Meta<typeof Button> = {
  title: "Button",
  component: Button,
  args: {
    children: "Click Me",
  },
  argTypes: {
    onClick: { action: "onClick" },
  },
};
export default meta;

type Story = StoryObj<typeof Button>;

export const Default: Story = {};
