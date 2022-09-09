import React from "react";

const Compator = ({ children }) => {
  return (
   
      <span
        className={`${
          children === "hermosillo"
            ? "bg-orange-500 rounded-sm px-1"
            : children === "loscabos"
            ? "bg-blue-500 rounded-sm px-1"
            :children === 'nogales'
            ? "bg-purple-500 rounded-sm px-1"
            : children === 'tijuana'
            ? "bg-pink-500 rounded-sm px-1"
            : children === 'mexicali'
            ? "bg-green-500 rounded-sm px-1"
            : null
        } text-black font-semibold`}
      >
        {children}
      </span>
   
  );
};

export default Compator;
