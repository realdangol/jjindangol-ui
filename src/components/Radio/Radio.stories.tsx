import { Meta, StoryObj } from "@storybook/react/*";
import Radio from ".";
import { useState } from "react";
import { action } from "@storybook/addon-actions";

const meta: Meta<typeof Radio> = {
  title: "common/Radio",
  component: Radio,
  render: (args) => {
    const [value, setValue] = useState("Value 1");

    const handleChange = (value: string) => {
      setValue(value);
      action(`Select: ${value}`)();
    };

    return (
      <div className="flex flex-col gap-2">
        <Radio
          {...args}
          label="Label 1"
          value="Value 1"
          checked={value === "Value 1"}
          onChange={handleChange}
        />
        <Radio
          {...args}
          label="Label 2"
          value="Value 2"
          checked={value === "Value 2"}
          onChange={handleChange}
        />
        <Radio
          {...args}
          label="Label 3"
          value="Value 3"
          checked={value === "Value 3"}
          onChange={handleChange}
        />
        <Radio
          {...args}
          label="Label 4"
          value="Value 4"
          checked={value === "Value 4"}
          disabled
          onChange={handleChange}
        />
      </div>
    );
  },
};

export default meta;

type Story = StoryObj<typeof Radio>;

export const Usage: Story = {
  args: {},
};
