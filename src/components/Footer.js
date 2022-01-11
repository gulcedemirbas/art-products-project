import React from "react";
import { FaFacebook, FaInstagram } from "react-icons/fa";

export default function Footer() {
  return (
    <>
    <div className="flex justify-start items-center gap-2 h-[60px] bg-white">
      <FaFacebook></FaFacebook>
      <FaInstagram></FaInstagram>
      </div>
    </>
  );
}
