import clsx from "clsx";
import Radio from "../Radio";

type Option = {
  label: string;
  value: string;
  disabled?: boolean;
};

type Props = {
  title?: string;
  name?: string;
  value?: string;
  options: Option[];
  direction?: "vertical" | "horizontal";
  gap?: number;
  onChange?: (value: string) => void;
};

const RadioGroup = ({
  title,
  value,
  options,
  direction = "vertical",
  gap = 8,
  onChange,
}: Props) => {
  return (
    <fieldset>
      {title && <legend className={"typo-body2-medium text-neutral-500 mb-1"}>{title}</legend>}
      <div
        className={clsx("flex", direction === "vertical" && "flex-col")}
        style={{
          gap: `${gap}px`,
        }}
      >
        {options.map((option) => (
          <Radio
            label={option.label}
            value={option.value}
            disabled={option.disabled}
            checked={value === option.value}
            onChange={onChange}
          />
        ))}
      </div>
    </fieldset>
  );
};

export default RadioGroup;
