import type { Meta, StoryObj } from "@storybook/react/*";
import Toggle from ".";
import { useEffect, useState } from "react";
import { action } from "@storybook/addon-actions";

const meta: Meta<typeof Toggle> = {
  title: "common/Toggle",
  component: Toggle,
};

export default meta;

export const Basic: StoryObj<typeof Toggle> = {
  argTypes: {
    checked: {
      description: "체크 여부",
    },
    disabled: {
      description: "활성화 여부",
    },
    onToggle: {
      description: "Toggle 클릭시 호출되는 함수",
    },
  },
  args: {
    checked: false,
    disabled: false,
  },
  render: (args) => {
    const [checked, setChecked] = useState(args.checked);

    useEffect(() => {
      setChecked(args.checked);
    }, [args.checked]);

    return (
      <Toggle
        {...args}
        checked={checked}
        onToggle={() => {
          setChecked(!checked);
          action(`checked: ${!checked}`)();
        }}
      />
    );
  },
};
