import type { Meta, StoryObj } from "@storybook/react/*";
import Checkbox from ".";
import { useEffect, useState } from "react";

const meta: Meta<typeof Checkbox> = {
  title: "common/CheckBox",
  component: Checkbox,
  argTypes: {
    label: {
      control: "text",
      description: "체크박스 라벨",
    },
    checked: {
      control: "boolean",
      description: "체크박스 체크 여부",
    },
    disabled: {
      control: "boolean",
      description: "체크박스 비활성화 여부",
    },
    onChange: { action: "changed", description: "체크 상태 변경 이벤트" },
  },
  args: {
    label: "Label",
    checked: false,
    disabled: false,
  },
  render: (args) => {
    const [checked, setChecked] = useState(false);

    useEffect(() => {
      setChecked(!!args.checked);
    }, [args.checked]);

    return <Checkbox {...args} checked={checked} onChange={() => setChecked(!checked)} />;
  },
};

export default meta;

type Story = StoryObj<typeof meta>;

/** 체크된 상태의 체크박스 */
export const Checked: Story = {
  args: {},
};

/** 비활성화된 상태의 체크박스 */
export const DisabledUnchecked: Story = {
  args: {
    label: "비활성화됨 (체크X)",
    disabled: true,
    checked: false, // 명시적으로 설정
  },
};

/** 비활성화되고 체크된 상태의 체크박스 */
export const DisabledChecked: Story = {
  args: {
    label: "비활성화됨 (체크O)",
    disabled: true,
    checked: true,
  },
};

/** 라벨이 없는 체크박스 */
export const NoLabel: Story = {
  args: {
    label: undefined,
  },
};
