import React from "react";
import "../index.css";
import contact from "../images/contact/contact.JPG";
import logo from "../logo.svg";
export default function ContactPage() {
  return (
    <>
      <div className="h-[100vh] flex justify-center items-center">
        <div className="bg-white border border-secondary rounded-lg w-3/4 h-3/4 flex shadow-lg">
          <img className="h-auto opacity-70 " src={contact}></img>
          <form action="mailto:demirbasgulce@hotmail.com" method="GET" className="w-full relative flex flex-col justify-center pl-16 text-gray-600">
            <img className="w-32 absolute right-4 top-2" src={logo}></img>
            Mesaj Başlığı
            <div className="pb-6 pt-2">
              <input name="subject" type="text"
                className="w-2/3 border border-secondary rounded p-1 text-[14px] hover:border-secondary-dark focus:outline-none focus:ring focus:ring-secondary focus:border-none"
                placeholder="  Mesajınız için bir başlık girin"
              ></input>
            </div>
            Mesajınızı Yazınız
            <div className="pt-2">
              <textarea name="body"
                rows="8"
                className="w-2/3 text-[14px] border border-secondary rounded hover:border-secondary-dark focus:outline-none focus:ring focus:ring-secondary focus:border-none"
              ></textarea>
            </div>
            <div className="pt-4 flex justify-end w-2/3">
              <button type="submit" value="Send" className="border rounded-full p-1 px-2 text-[16px] border-gray-300 hover:bg-secondary bg-primary hover:text-white text-gray-600 hover:border-gray-300">Gönder</button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
