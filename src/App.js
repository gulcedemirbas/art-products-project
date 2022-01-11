import NavBar from "./components/NavBar";
import { BsSearch } from "react-icons/bs";
import logo from "./logo.svg";
import { useState } from "react";
import Footer from "./components/Footer";

function App() {
  const [active, setIsActive] = useState(true);
  return (
    <>
      <div className="h-screen ml-20 mr-20 ">
        <div className="flex" style={{justifyContent: "space-between"}}>
          <div className="flex h-16 mb-3 cursor-pointer">
            <img src={logo}></img>
          </div>
          <div className="flex justify-center items-center gap-10 p-[0px 40px]">
            <NavBar active={true} setIsActive={() => {setIsActive(!active);}} title="Anasayfa"></NavBar>
            <NavBar active={false} setIsActive={() => {setIsActive(!active);}} title="Hakkımda"></NavBar>
            <NavBar active={false} setIsActive={() => {setIsActive(!active);}} title="Ürünler"></NavBar>
            <NavBar active={false} setIsActive={() => {setIsActive(!active);}} title="İletişim"></NavBar>
          </div>
          <div className="cursor-pointer flex justify-center items-center">
            <BsSearch></BsSearch>
          </div>
        </div>
        <div className="h-full bg-red-500"></div>
        <Footer></Footer>
      </div>
    </>
  );
}

export default App;
