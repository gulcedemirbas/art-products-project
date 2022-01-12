import React from "react";
import { BsSearch, BsFilter } from "react-icons/bs";
import { useState } from "react";
import FilterMenu from "./FilterMenu";

export default function SearchFilter({ filterClick, setFilterClick }) {
  const [searchClick, setSearchClick] = useState(false);
  return (
    <div className="cursor-pointer flex justify-center items-center gap-2 text-gray-500">
      {searchClick ? (
        <input
          className="p-1"
          placeholder="Arama"
          onChange={(e) => {
            setFilterClick({ ...filterClick, searchKeyword: e.target.value });
          }}
        ></input>
      ) : null}
      <BsSearch
        onClick={() => {
          setSearchClick(!searchClick);
        }}
        className="hover:text-black"
        style={{ height: "18px", width: "18px" }}
      ></BsSearch>
      <FilterMenu
        filterClick={filterClick}
        setFilterClick={setFilterClick}
      ></FilterMenu>
    </div>
  );
}
