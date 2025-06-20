import clsx from "clsx";
import React, { useRef } from "react";

type TabItem = {
  value: string;
  label: string;
  count?: number;
};

type Props = {
  items: TabItem[];
  variant?: "depth1" | "depth2";
  activeTab?: string;
  fullWidth?: boolean;
  onTabClick?: (value: string) => void;
};

const Tabs = ({ variant = "depth1", items, activeTab, fullWidth = false, onTabClick }: Props) => {
  const containerRef = useRef<HTMLDivElement>(null);

  const depth1TabsClass = `${
    fullWidth ? "w-full" : "w-fit"
  } typo-body1-medium gap-3 border-b border-neutral-300`;
  const depth2TabsClass = "typo-body2-medium gap-2";
  const depth1TabClass = "h-[56px]";
  const depth2TabClass = "h-[42px] border border-neutral-300 rounded-[20px] bg-white";
  const activeTabClass =
    variant === "depth1"
      ? "border-b-2 border-b-brand-700 text-brand-700"
      : "border-none !bg-brand-700 text-white";

  const scrollTabIntoCenter = (index: number) => {
    if (containerRef.current) {
      const tab = containerRef.current.children[index] as HTMLElement;
      const tabRect = tab.getBoundingClientRect();
      const padding = index > 0 ? 8 : 24;
      const offset =
        tab.offsetLeft - padding - containerRef.current.clientWidth / 2 + tabRect.width / 2;

      containerRef.current.scrollTo({
        left: offset,
        behavior: "smooth",
      });
    }
  };

  const handleTabClick = (value: string, index: number) => () => {
    onTabClick?.(value);
    scrollTabIntoCenter(index);
  };

  return (
    <div
      ref={containerRef}
      className={clsx(
        "inline-flex w-full scroll-p-0 flex-nowrap overflow-auto px-4 text-neutral-800 [&::-webkit-scrollbar]:hidden",
        variant === "depth1" ? depth1TabsClass : depth2TabsClass
      )}
    >
      {items.map((item, index) => (
        <button
          type="button"
          key={item.value}
          className={clsx(
            "inline-flex shrink-0 items-center justify-center gap-2 px-4",
            variant === "depth1" ? depth1TabClass : depth2TabClass,
            activeTab === item.value && activeTabClass,
            fullWidth && "flex-1"
          )}
          onClick={handleTabClick(item.value, index)}
        >
          {item.label}
          {item.count && <span className="typo-body3-regular text-neutral-300">{item.count}</span>}
        </button>
      ))}
    </div>
  );
};

export default Tabs;
