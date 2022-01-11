import React from "react";

export default function NavBar({ title, active }) {
  return (
    <>
      {active ? (
        <div className="underline font-medium cursor-pointer text-[#C80A5F]">{title}</div>
      ) : (
        <div className="cursor-pointer text-gray-500 hover:text-[#C80A5F]">{title}</div>
      )}
    </>
  );
}
