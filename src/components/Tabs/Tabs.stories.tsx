import React, { useState } from "react";

import Tabs from ".";
import { Meta, StoryObj } from "@storybook/react/*";
import { action } from "@storybook/addon-actions";

const meta: Meta<typeof Tabs> = {
  title: "common/Tabs",
  component: Tabs,
  argTypes: {
    variant: {
      description: "Tab variant",
      control: "select",
      options: ["depth1", "depth2"],
    },
    items: {
      description: "Tab item",
      control: "object",
    },
    activeTab: {
      description: "활성화 시킬 Tab",
      control: "text",
    },
    fullWidth: {
      description: "`viewport width`에 꽉 채울지 여부",
      control: "boolean",
    },
    onTabClick: {
      description: "Tab 클릭시 호출되는 함수",
    },
  },
  args: {
    variant: "depth1",
    items: [
      { value: "tab1", label: "Tab 1" },
      { value: "tab2", label: "Tab 2" },
      { value: "tab3", label: "Tab 3", count: 12 },
      { value: "tab4", label: "Tab 4" },
      { value: "tab5", label: "Tab 5" },
    ],
  },
  render: (args) => {
    const [activeTab, setActiveTab] = useState("tab1");

    const handleTabClick = (value: string) => {
      setActiveTab(value);
      action(`Active Tabl '${value}'`)();
    };

    return <Tabs {...args} activeTab={activeTab} onTabClick={handleTabClick} />;
  },
};

export default meta;
type Story = StoryObj<typeof Tabs>;

export const Example: Story = {
  args: {},
};
