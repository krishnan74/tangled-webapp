import React from "react";

const Loader = () => {
  return (
    <svg
      viewBox="25 25 50 50"
      style={{
        width: "3.25em",
        transformOrigin: "center",
        animation: "rotate4 2s linear infinite",
      }}
    >
      <circle
        r="20"
        cy="50"
        cx="50"
        style={{
          fill: "none",
          stroke: "hsl(214, 97%, 59%)",
          strokeWidth: 2,
          strokeDasharray: "1, 200",
          strokeDashoffset: 0,
          strokeLinecap: "round",
          animation: "dash4 1.5s ease-in-out infinite",
        }}
      ></circle>
    </svg>
  );
};

export default Loader;
