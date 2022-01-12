import React from "react";
import { FaFacebook, FaInstagram } from "react-icons/fa";

export default function Footer() {
  return (
    <>
      <div className="flex justify-start items-center gap-2 h-[60px] bg-[#FFF4F4] mt-10 pl-4 rounded-t-lg border border-gray-500">
        <FaFacebook
          style={{ height: "24px", width: "24px" }}
          className="cursor-pointer text-gray-500 hover:text-gray-800"
        ></FaFacebook>
        <FaInstagram
          style={{ height: "24px", width: "24px" }}
          className="cursor-pointer text-gray-500 hover:text-gray-800"
        ></FaInstagram>
      </div>
    </>
  );
}
