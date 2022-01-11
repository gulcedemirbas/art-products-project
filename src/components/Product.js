import React from "react";

export default function Product({ product }) {
  return (
    <>
      <div className="mt-8 ">
        <div className="bg-white rounded transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 shadow-lg">
          <div className="w-full p-5 flex">
            <img src={product.imageList[0].image}></img>
          </div>
          <div className="text-left pl-5 pb-5 pt-1 font-medium  text-gray-600">
            {product.title}
          </div>
          <div className="flex justify-between pb-5 pt-1 text-gray-500 text-[14px]">
            <div className="pl-5 pr-2 pt-1 pb-1 hover:text-black hover:border-black cursor-pointer">Ürün Detayı</div>
            <div className="border rounded pl-2 pr-2 pt-1 pb-1 mr-5 border-gray-400 hover:text-black hover:border-black cursor-pointer">Sipariş Ver</div>
          </div>
        </div>
      </div>
    </>
  );
}
