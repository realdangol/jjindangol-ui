import { action } from "@storybook/addon-actions";
import { Meta, StoryObj } from "@storybook/react/*";
import { useState } from "react";
import RadioGroup from ".";

const meta: Meta<typeof RadioGroup> = {
  title: "common/RadioGroup",
  component: RadioGroup,
  argTypes: {
    title: {
      control: "text",
      description: "Radio Group title",
    },
  },
  args: {
    title: "Title",
    options: [
      {
        label: "Label 1",
        value: "Value 1",
      },
      {
        label: "Label 2",
        value: "Value 2",
      },
      {
        label: "Disabled Label",
        value: "Disabled Value",
        disabled: true,
      },
    ],
  },
  render: (args) => {
    const [selected, setSelected] = useState("Disabled Value");

    return (
      <RadioGroup
        {...args}
        value={selected}
        onChange={(value) => {
          setSelected(value);
          action(`Select ${value}`)();
        }}
      />
    );
  },
};

export default meta;

type Story = StoryObj<typeof RadioGroup>;

export const Usage: Story = {
  args: {},
};
