// import clsx from "clsx";
// import React from "react";
// import { twMerge } from "tailwind-merge";

// type Props = {
//   variant?: "fillPrimary" | "fillNeutral" | "outlinePrimary" | "outlineNeutral";
//   size?: "large" | "medium" | "small";
//   leftIcon?: React.ReactNode;
//   rightIcon?: React.ReactNode;
// } & React.ButtonHTMLAttributes<HTMLButtonElement>;

// const Button = ({
//   variant = "fillPrimary",
//   size = "large",
//   children,
//   leftIcon,
//   rightIcon,
//   ...restProps
// }: Props) => {
//   const variantClass = {
//     fillPrimary: "btn-fill-primary",
//     fillNeutral: "btn-fill-neutral",
//     outlinePrimary: "btn-outline-primary",
//     outlineNeutral: "btn-outline-neutral",
//   }[variant];

//   const sizeClass = {
//     large: "btn-large",
//     medium: "btn-medium",
//     small: "btn-small",
//   }[size];

//   const leftIconClass = {
//     large: "pl-3",
//     medium: "pl-3",
//     small: "pl-2",
//   }[size];

//   const rightIconClass = {
//     large: "pr-3",
//     medium: "pr-3",
//     small: "pr-2",
//   }[size];

//   const interactionBase = "absolute top-0 left-0 inline-block w-full h-full bg-black opacity-0";

//   const activeVariantBase = {
//     fillPrimary: "active:opacity-[0.33]",
//     fillNeutral: "active:opacity-[0.33]",
//     outlinePrimary: "active:opacity-10",
//     outlineNeutral: "active:opacity-10",
//   }[variant];

//   return (
//     <button
//       {...restProps}
//       className={twMerge(
//         clsx(
//           "typo-body1-medium",
//           "btn-base",
//           variantClass,
//           sizeClass,
//           !!leftIcon && leftIconClass,
//           !!rightIcon && rightIconClass,
//           restProps.className
//         )
//       )}
//     >
//       <span
//         className={clsx(interactionBase, !restProps.disabled && activeVariantBase)}
//         role="presentation"
//       />
//       {leftIcon}
//       {children}
//       {rightIcon}
//     </button>
//   );
// };

// export default Button;

import React from "react";

const Button = () => {
  return (
    <button className="px-4 py-2 bg-brand-700 text-neutral-600 rounded hover:bg-blue-600">
      My Button
    </button>
  );
};

export default Button;
