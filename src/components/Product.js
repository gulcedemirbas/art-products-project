import React from "react";

export default function Product({ product }) {
  return (
    <>
      <div className="mt-8">
        <div>{product.title} </div>
        <div className="w-72">
          <img src={product.imageList[0].image}></img>
        </div>
      </div>
    </>
  );
}
