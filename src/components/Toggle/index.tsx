import clsx from "clsx";
import React from "react";

type Props = {
  checked?: boolean;
  disabled?: boolean;
  onToggle?: () => void;
};

const Toggle = ({ checked, disabled, onToggle }: Props) => {
  return (
    <button
      className={clsx(
        "relative w-[110px] h-[60px] rounded-[30px] flex items-center px-1 disabled:cursor-not-allowed",
        checked
          ? disabled
            ? "bg-brand-500"
            : "bg-brand-700"
          : disabled
          ? "bg-neutral-300"
          : "bg-neutral-500"
      )}
      type="button"
      role="switch"
      aria-checked={checked}
      disabled={disabled}
      onClick={onToggle}
    >
      <span
        className={clsx(
          "inline-block size-[52px] bg-white rounded-full transition-all",
          checked ? "translate-x-[50px]" : "translate-x-0"
        )}
      />
    </button>
  );
};

export default Toggle;
