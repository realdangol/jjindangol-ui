import { Meta, StoryObj } from "@storybook/react/*";
import Radio from ".";
import { useState } from "react";

const meta: Meta<typeof Radio> = {
  title: "common/Radio",
  component: Radio,
  argTypes: {},
  render: () => {
    const [selected, setSelected] = useState("c");

    return (
      <Radio
        title="성별"
        options={[
          {
            label: "a",
            value: "a",
          },
          {
            label: "b",
            value: "b",
          },
          {
            label: "c",
            value: "c",
            disabled: true,
          },
        ]}
        value={selected}
        direction="horizontal"
        onChange={(value) => setSelected(value)}
      />
    );
  },
};

export default meta;

type Story = StoryObj<typeof Radio>;

export const Usage: Story = {
  args: {},
};
