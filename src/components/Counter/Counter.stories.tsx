import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import type { Meta, StoryObj } from "@storybook/react";
import Counter from "./Counter";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta = {
  title: "DComponents/Counter",
  component: Counter,
  tags: ["autodocs"],
} satisfies Meta<typeof Counter>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Counter> = (args) => (
  <Counter {...args} />
);

export const Default: Story = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Default.args = { initialCount: 5 };
