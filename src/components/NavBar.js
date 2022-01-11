import React from "react";

export default function NavBar({ title, active }) {
  return (
    <>
      {active ? (
        <div className="underline cursor-pointer text-gray-800">{title}</div>
      ) : (
        <div className="cursor-pointer text-gray-500 hover:text-gray-800">{title}</div>
      )}
    </>
  );
}
