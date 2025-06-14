import React from "react";
import withPolymorphicIcon from "./withPolymorphicIcon";

const Help = withPolymorphicIcon(({ size }) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clipPath="url(#clip0_1263_6134)">
        <path d="M24 0H0V24H24V0Z" fill="white" fillOpacity="0.01" />
        <path
          d="M12 22C14.7614 22 17.2614 20.8807 19.0711 19.0711C20.8807 17.2614 22 14.7614 22 12C22 9.2386 20.8807 6.7386 19.0711 4.92893C17.2614 3.11929 14.7614 2 12 2C9.2386 2 6.7386 3.11929 4.92893 4.92893C3.11929 6.7386 2 9.2386 2 12C2 14.7614 3.11929 17.2614 4.92893 19.0711C6.7386 20.8807 9.2386 22 12 22Z"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinejoin="round"
        />
        <path
          d="M12 14.3124V12.3124C13.6568 12.3124 15 10.9693 15 9.31244C15 7.65559 13.6568 6.31244 12 6.31244C10.3432 6.31244 9 7.65559 9 9.31244"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M12 18.8124C12.6904 18.8124 13.25 18.2528 13.25 17.5624C13.25 16.8721 12.6904 16.3124 12 16.3124C11.3097 16.3124 10.75 16.8721 10.75 17.5624C10.75 18.2528 11.3097 18.8124 12 18.8124Z"
          fill="currentColor"
        />
      </g>
      <defs>
        <clipPath id="clip0_1263_6134">
          <rect width="24" height="24" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
});

export default Help;
