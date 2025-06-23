import { Meta } from "@storybook/react/*";

const meta: Meta = {
  title: "common/Typography",
};

export default meta;

export const List = () => {
  return (
    <div className="flex flex-col gap-4 text-neutral-800">
      <span className="typo-h">H</span>
      <span className="typo-h1">H1</span>
      <span className="typo-h2">H2</span>
      <span className="typo-h2-medium">H2 Medium</span>
      <span className="typo-body1-bold">Body 1 Bold</span>
      <span className="typo-body1-medium">Body 1 Medium</span>
      <span className="typo-body1-regular">Body 1 Regular</span>
      <span className="typo-body2-bold">Body 2 Bold</span>
      <span className="typo-body2-medium">Body 2 Medium</span>
      <span className="typo-body2-regular">Body 2 Regular</span>
      <span className="typo-body3-medium">Body 3 Medium</span>
      <span className="typo-body3-regular">Body 3 Regular</span>
      <span className="typo-label">Label</span>
      <span className="typo-element1">Element 1</span>
      <span className="typo-element2">Element 2</span>
      <span className="typo-element3">Element 3</span>
      <span className="typo-element4">Element 4</span>
      <span className="typo-element5">Element 5</span>
      <span className="typo-element5-bold">Element 5 Bold</span>
      <span className="typo-element6">Element 6</span>
    </div>
  );
};
