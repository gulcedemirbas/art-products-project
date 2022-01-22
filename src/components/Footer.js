import React from "react";
import { FaFacebook, FaInstagram } from "react-icons/fa";

export default function Footer() {
  return (
    <>
      <div className="flex justify-between items-center h-[60px] bg-[#FFF4F4] pl-4 pr-4 rounded-t-lg border border-gray-500">
        <div className="flex gap-2">
        <FaFacebook
         onClick={()=>{window.open('https://www.facebook.com/hulyacasanat', '_blank');}}
          style={{ height: "24px", width: "24px" }}
          className="cursor-pointer text-gray-500 hover:text-[#C80A5F]"
        ></FaFacebook>
        <FaInstagram

        onClick={()=>{window.open('https://www.instagram.com/hulyacasanat', '_blank');}}
          style={{ height: "24px", width: "24px" }}
          className="cursor-pointer text-gray-500 hover:text-[#C80A5F]"
        ></FaInstagram>
        </div>
        <div className="text-gray-500 text-[14px] hover:text-[#C80A5F]">©2022 Art Project Gülce Demirbaş & Aykut Çalışkan</div>
      </div>
    </>
  );
}
