import React from "react";
import withPolymorphicIcon from "./withPolymorphicIcon";

const StamperFilled = withPolymorphicIcon(({ size }) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M12.0005 3.00146C11.2048 3.00146 10.4418 3.31754 9.87917 3.88014C9.31656 4.44275 9.00049 5.20582 9.00049 6.00146C9.00049 9.00146 14.0005 13.0015 6.00049 13.0015C5.47006 13.0015 4.96135 13.2122 4.58627 13.5873C4.2112 13.9623 4.00049 14.471 4.00049 15.0015V17.0015H20.0005V15.0015C20.0005 14.471 19.7898 13.9623 19.4147 13.5873C19.0396 13.2122 18.5309 13.0015 18.0005 13.0015C10.0005 13.0015 15.0005 9.00146 15.0005 6.00146C15.0005 4.00146 13.6605 3.00146 12.0005 3.00146ZM6.00049 19.0015V21.0015H18.0005V19.0015H6.00049Z"
        fill="currentColor"
      />
    </svg>
  );
});

export default StamperFilled;
