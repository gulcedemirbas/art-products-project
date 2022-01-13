import React from "react";
import products from "../ProductData";
import Product from "./Product";

export default function Home({ filterList }) {
  const myResult =
    filterList.filterKeyword === ""
      ? products
      : products.filter((item) => item.type === filterList.filterKeyword);

  const searchArray = filterList.searchKeyword.split(" ");
  const filteredBySearch =
    filterList.searchKeyword === ""
      ? myResult
      : myResult.filter((item) => {
          let isIncludes = false;
          searchArray.forEach((searchItem) => {
            if (
              item.title
                .toLocaleLowerCase()
                .includes(searchItem.toLocaleLowerCase()) &&
              searchItem.length > 1
            ) {
              isIncludes = true;
            }
          });
          return isIncludes;
        }); // for SearchFilter component we put an object state and defined a searchkeyword and filterkeyword keys.

  console.log(filterList);

  return (
    <>
      {/*   {filterList.filterKeyword ? <div className="text-[12px] italic flex justify-end text-gray-500">
            "{filterList.filterKeyword}" için {filteredBySearch.length} ürün listeleniyor</div> : <div className="text-[12px] italic flex justify-end text-gray-500">{filteredBySearch.length} ürün listeleniyor </div> 
            } */}

      <div className="text-[12px] italic flex justify-end text-gray-500">
        {filterList.searchKeyword &&
          '"' + filterList.searchKeyword + '"' + " için "}
        {filterList.filterKeyword &&
          filterList.filterKeyword + " kategorisinde "}
        {filteredBySearch.length} ürün listeleniyor
      </div>

      <div className="h-full flex gap-8 grid grid-cols-4">
        {filteredBySearch.map((item) => {
          return <Product product={item}></Product>;
        })}
      </div>
    </>
  );
}
