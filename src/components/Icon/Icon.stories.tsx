import colors from "@/constants/colors";
import * as Icons from ".";
import { Meta, StoryObj } from "@storybook/react/*";

const Icon = Icons.Plus;

const meta: Meta<typeof Icon> = {
  title: "common/Icon",
  component: Icon,
  argTypes: {
    size: {
      control: "text",
      description: "아이콘 크기",
    },
    color: {
      control: "text",
      description: "아이콘 컬러",
    },
  },
};

export default meta;

type Story = StoryObj<typeof Icon>;

export const Usage: Story = {
  args: {
    size: 32,
    color: "pink",
  },
};

export const IconList = () => {
  return (
    <div className="flex flex-wrap gap-8">
      {Object.entries(Icons).map(([name, Icon]) => (
        <div key={name} className="flex flex-col items-center gap-1">
          <p>{name}</p>
          <Icon color={colors["brand700"]} />
        </div>
      ))}
    </div>
  );
};
