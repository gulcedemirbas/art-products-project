import NavBar from "./components/NavBar";
import { BsSearch, BsFilter } from "react-icons/bs";
import logo from "./logo.svg";
import { useState } from "react";
import Footer from "./components/Footer";
import products from "./ProductData";
import Product from "./components/Product";

function App() {
  const [active, setIsActive] = useState(true);
  return (
    <>
      <div className="h-full ml-20 mr-20 ">
        <div className="flex" style={{ justifyContent: "space-between" }}>
          <div className="flex h-16 mb-3 cursor-pointer">
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
          <div className="cursor-pointer flex justify-center items-center gap-2 text-gray-800">
            <BsSearch style={{ height: "18px", width: "18px" }}></BsSearch>
            <BsFilter style={{ height: "24px", width: "24px" }}></BsFilter>
          </div>
        </div>
        <div className="h-full flex gap-8 grid grid-cols-4">
          {products.map((item) => {
            return <Product product={item}></Product>;
          })}
        </div>

        <Footer></Footer>
      </div>
    </>
  );
}

export default App;
