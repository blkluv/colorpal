import React from "react";

export default function DashboardBit({ color, label, children }) {
  return (
    <div
      className={`group p-10 w-11/12 sm:w-72 text-2xl text-center font-semibold text-black rounded-lg flex flex-col justify-center items-center gap-6 cursor-pointer hover:ring-4 ring-offWhite/40 ${color} `}
    >
      {children}{label}
    </div>
  );
}