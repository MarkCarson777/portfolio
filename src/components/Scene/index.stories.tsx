import type { Meta, StoryObj } from "@storybook/react-vite";
import { Scene } from ".";

const meta: Meta<typeof Scene> = {
  title: "Scene",
  component: Scene,
  parameters: {
    layout: "fullscreen",
  },
};

export default meta;

type Story = StoryObj<typeof Scene>;

export const Default: Story = {
  render: () => (
    <div style={{ width: "100%", height: "100vh" }}>
      <Scene />
    </div>
  ),
};
