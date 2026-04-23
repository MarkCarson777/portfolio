import type { Meta, StoryObj } from "@storybook/react-vite";
import { BasicCube, CubeWithEdges, RoundedCubeWithLighting } from ".";

const meta: Meta<typeof BasicCube> = {
  title: "Scene",
  component: BasicCube,
  tags: ["autodocs"],
  parameters: {
    layout: "fullscreen",
    docs: {
      description: {
        component:
          "Three.js scene examples that render a rotating cube in three variants: basic, edged, and rounded with lighting.",
      },
    },
  },
};

export default meta;

type Story = StoryObj<typeof BasicCube>;

export const Basic: Story = {
  parameters: {
    docs: {
      description: {
        story: "A basic rotating cube rendered with BoxGeometry and a flat material.",
      },
    },
  },
  render: () => (
    <div style={{ width: "100%", height: "100vh" }}>
      <BasicCube />
    </div>
  ),
};

export const WithEdges: Story = {
  parameters: {
    docs: {
      description: {
        story: "A basic cube with edge lines to highlight its silhouette.",
      },
    },
  },
  render: () => (
    <div style={{ width: "100%", height: "100vh" }}>
      <CubeWithEdges />
    </div>
  ),
};

export const RoundedWithLighting: Story = {
  parameters: {
    docs: {
      description: {
        story:
          "A rounded cube rendered with standard material and directional lighting for visible shading.",
      },
    },
  },
  render: () => (
    <div style={{ width: "100%", height: "100vh" }}>
      <RoundedCubeWithLighting />
    </div>
  ),
};
