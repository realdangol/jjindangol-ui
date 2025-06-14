import React from "react";
import withPolymorphicIcon from "./withPolymorphicIcon";

const SendFilled = withPolymorphicIcon(({ size }) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M17.955 9.8834L6.563 4.1434C6.26535 3.96928 5.90109 3.95274 5.58888 4.09916C5.27667 4.24558 5.05647 4.53621 5 4.8764C5.0039 4.98942 5.03114 5.10041 5.08 5.2024L7.249 10.4424C7.35786 10.7903 7.41711 11.1519 7.425 11.5164C7.41714 11.8809 7.35789 12.2425 7.249 12.5904L5.08 17.8304C5.03114 17.9324 5.0039 18.0434 5 18.1564C5.05687 18.4961 5.27703 18.7862 5.5889 18.9323C5.90078 19.0785 6.26456 19.062 6.562 18.8884L17.955 13.1484C18.5903 12.8533 18.9967 12.2164 18.9967 11.5159C18.9967 10.8154 18.5903 10.1785 17.955 9.8834Z"
        fill="currentColor"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
});

export default SendFilled;
