import React from "react";

export default function Product({ product }) {
  return (
    <>
      <div className="mt-8 ">
        <div className="bg-white rounded transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 shadow-lg">
          <div className="w-full p-5 flex">
            <img src={product.imageList[0].image}></img>
          </div>
          <div className="text-center pb-5 pt-1">{product.title} </div>
        </div>
      </div>
    </>
  );
}
