import clsx from "clsx";
import React from "react";

type Props = {
  size?: "medium" | "small";
  color?: "green" | "neutral" | "red" | "brand";
  children?: React.ReactNode;
};

const Badge = ({ size = "medium", color = "green", children }: Props) => {
  const colorClass = (() => {
    switch (color) {
      case "green":
        return "bg-success-100 text-success-600";
      case "neutral":
        return "bg-neutral-200 text-neutral-400";
      case "red":
        return "bg-error-100 text-error-600";
      case "brand":
        return "bg-brand-100 text-brand-700";
    }
  })();

  return (
    <div
      className={clsx(
        "rounded-xs font-medium inline-flex items-center justify-center",
        size === "medium"
          ? "h-[24px] px-xs text-[13px] leading-[18px] tracking-[-0.1px]"
          : "h-[20px] px-xxs text-[12px] leading-[15px]",
        colorClass
      )}
    >
      {children}
    </div>
  );
};

export default Badge;
