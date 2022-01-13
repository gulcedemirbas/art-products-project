import React from "react";

export default function NavBar({ title, active, onClick }) {
  return (
    <>
       
        <div onClick = {onClick} className= { active ? "underline font-medium cursor-pointer text-[#C80A5F]" : "cursor-pointer text-gray-500 hover:text-[#C80A5F]" }>{title}</div>
      
    </>
  );
}
