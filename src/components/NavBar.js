import React from "react";

export default function NavBar({ title, active }) {
  return (
    <>
      {active ? (
        <div className="underline cursor-pointer">{title}</div>
      ) : (
        <div className="cursor-pointer">{title}</div>
      )}
    </>
  );
}
