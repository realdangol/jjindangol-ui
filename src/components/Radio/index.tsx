import React from "react";
import clsx from "clsx";
import { v6 as uuidv6 } from "uuid";

type Props = {
  label?: string;
  value: string;
  disabled?: boolean;
  checked?: boolean;
  onChange?: (value: string) => void;
};

const Radio = ({ label, value, disabled, checked = false, onChange }: Props) => {
  const uuid = uuidv6();
  const id = `${uuid}-${label}`;

  return (
    <label
      htmlFor={id}
      className={clsx(
        "inline-flex items-center gap-xs",
        disabled ? "cursor-not-allowed" : "cursor-pointer"
      )}
    >
      <input
        type="radio"
        id={id}
        name={label}
        value={value}
        checked={checked}
        onChange={() => {
          if (!disabled) {
            onChange?.(value);
          }
        }}
        className="sr-only"
      />
      <span
        className={clsx(
          "w-[18px] h-[18px] inline-flex items-center justify-center rounded-full border-[1.5px] bg-white",
          checked ? "border-brand-700" : "border-neutral-300",
          disabled && "border-neutral-400"
        )}
      >
        <span
          className={clsx(
            "w-3 h-3 inline-block rounded-full bg-brand-700",
            checked ? "opacity-100" : "opacity-0",
            disabled && "bg-neutral-400"
          )}
        />
      </span>
      <span
        className={clsx("typo-body2-regular", disabled ? "text-neutral-600" : "text-neutral-800")}
      >
        {label}
      </span>
    </label>
  );
};

export default Radio;
