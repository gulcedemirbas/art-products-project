import NavBar from "./components/NavBar";
import logo from "./logo.svg";
import { useState } from "react";
import Footer from "./components/Footer";
import products from "./ProductData";
import Product from "./components/Product";
import SearchFilter from "./components/SearchFilter";

function App() {
  const [active, setIsActive] = useState(true);
  const [filterList, setFilterList] = useState({
    searchKeyword: "",
    filterKeyword: "",
  });
  
  const myResult =
  filterList.filterKeyword === ""
    ? products
    : products.filter((item) => item.type === filterList.filterKeyword);

  const searchArray = filterList.searchKeyword.split(" ");
  const filteredBySearch = filterList.searchKeyword === "" ? myResult : myResult.filter((item) => {
    let isIncludes = false;
    searchArray.forEach((searchItem) => {
      if (item.title.toLocaleLowerCase().includes(searchItem.toLocaleLowerCase()) && searchItem.length > 1) {
        isIncludes = true; 
      }
    });
    return isIncludes;
  }); // for SearchFilter component we put an object state and defined a searchkeyword and filterkeyword keys.

  console.log(filterList);

 

  return (
    <>
      <div className="h-full ml-20 mr-20">
        <div className="flex mb-6" style={{ justifyContent: "space-between" }}>
          <div
            onClick={() => {
              window.location.reload();
            }}
            className="flex h-16 mb-3 cursor-pointer"
          >
            <img src={logo}></img>
          </div>
          <div className="flex justify-center items-center gap-10 p-[0px 40px]">
            <NavBar
              active={true}
              setIsActive={() => {
                setIsActive(!active);
              }}
              title="Anasayfa"
            ></NavBar>
            <NavBar
              active={false}
              setIsActive={() => {
                setIsActive(!active);
              }}
              title="Hakkımda"
            ></NavBar>
            <NavBar
              active={false}
              setIsActive={() => {
                setIsActive(!active);
              }}
              title="Ürünler"
            ></NavBar>
            <NavBar
              active={false}
              setIsActive={() => {
                setIsActive(!active);
              }}
              title="İletişim"
            ></NavBar>
          </div>

          <SearchFilter
            filterList={filterList}
            setFilterList={setFilterList}
          ></SearchFilter>
        </div>

      {/*   {filterList.filterKeyword ? <div className="text-[12px] italic flex justify-end text-gray-500">
          "{filterList.filterKeyword}" için {filteredBySearch.length} ürün listeleniyor</div> : <div className="text-[12px] italic flex justify-end text-gray-500">{filteredBySearch.length} ürün listeleniyor </div> 
          } */}
        
        <div className="text-[12px] italic flex justify-end text-gray-500">
          {filterList.searchKeyword && '"' + filterList.searchKeyword + '"' + " için "} 
          {filterList.filterKeyword && filterList.filterKeyword + " kategorisinde "}
          {filteredBySearch.length} ürün listeleniyor
        </div>

        <div className="h-full flex gap-8 grid grid-cols-4">
          {filteredBySearch.map((item) => {
            return <Product product={item}></Product>;
          })}
        </div>

        <Footer></Footer>
      </div>
    </>
  );
}

export default App;
