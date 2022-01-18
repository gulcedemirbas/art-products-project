import React from "react";
import contact from "../images/contact/contact.JPG";
import logo from "../logo.svg";

export default function ContactPage() {
  return (
    <>
      <div className="flex justify-center items-center">
        <div
          className="flex bg-white border border-gray-300 rounded-lg mt-8 shadow-lg"
          style={{ minWidth: "800px" }}
        >
          <img
            className="h-[450px] w-[350px] opacity-50 rounded-l-lg border border-gray-400"
            src={contact}
          ></img>
          <div className="flex flex-col pt-4 pl-4 w-full">
            <div className="bg-red flex justify-end mr-6">
              <img className="h-14" src={logo}></img>
            </div>

            <div className="p-6 w-full ">
              <div className="text-[14px] text-gray-500 font-medium">
                Başlık{" "}
              </div>

              <textarea rows={1}
                className="w-full border box-border rounded border border-gray-300 text-[14px] p-1"
                placeholder="Mesajınız için bir başlık girin"
              ></textarea>

              <div className="text-[14px] text-gray-500 mt-2 font-medium">
                Mesajınız
              </div>

              <textarea
                className="w-full rounded pb-20 border border-gray-300 text-left text-[14px] mt-2 pl-1 pt-1"
                placeholder="Mesajınızı yazın"
              ></textarea>

              <div className="flex justify-end">
                <div className="mt-6 w-[80px] border rounded-full border-gray-300 hover:bg-[#d183a3] bg-[#FFF4F4] hover:text-white text-gray-600 hover:border-gray-300 cursor-pointer p-1 text-center text-[14px]">
                  <button>Gönder</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}