import type { Meta, StoryObj } from "@storybook/react/*";

import Badge from ".";

const meta: Meta<typeof Badge> = {
  title: "common/Badge",
  component: Badge,
};

export default meta;

export const Basic: StoryObj<typeof Badge> = {
  args: {},
  render: (args) => {
    return <Badge {...args}>Text</Badge>;
  },
};
