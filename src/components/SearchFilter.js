import React from "react";
import { BsSearch, BsFilter } from "react-icons/bs";
import { useState } from "react";

export default function Search({filterClick,setFilterClick}) {
  const [searchClick, setSearchClick] = useState(false);
  return (
    <div className="cursor-pointer flex justify-center items-center gap-2 text-gray-500">
      {searchClick ? <input className = "p-1"placeholder="Arama"></input> : null}
      <BsSearch
        onClick={() => {
          setSearchClick(!searchClick);
        }}
        className="hover:text-black"
        style={{ height: "18px", width: "18px" }}
      ></BsSearch>
      <BsFilter
        className="hover:text-black"
        style={{ height: "24px", width: "24px" }}
        onClick={() => {setFilterClick(!filterClick)}}
      ></BsFilter>
    </div>
  );
}
