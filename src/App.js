import Footer from "./components/Footer";
import { Routes, Route } from "react-router-dom";
import About from "./components/About";
import Home from "./components/Home";
import NavBar from "./components/NavBar";
import logo from "./logo.svg";
import { useState } from "react";
import SearchFilter from "./components/SearchFilter";
import { useNavigate } from "react-router-dom";

function App() {
  const [active, setIsActive] = useState(false);
  const [filterList, setFilterList] = useState({
    searchKeyword: "",
    filterKeyword: "",
  });
  const navigate = useNavigate();
  console.log(active);
  return (
    <>
      <div className="h-full ml-20 mr-20">
        <div className="flex mb-6" style={{ justifyContent: "space-between" }}>
          <div
            onClick={() => {
              navigate("/");
            }}
            className="flex h-16 mb-3 cursor-pointer"
          >
            <img src={logo}></img>
          </div>
          <div className="flex justify-center items-center gap-10 p-[0px 40px]">
            <NavBar
              active={active}
              setIsActive={setIsActive}
              title="Anasayfa"
            ></NavBar>
            <NavBar
              active={active}
              title="Hakkımda"
              setIsActive={setIsActive}
            ></NavBar>
            <NavBar
              active={active}
              setIsActive={setIsActive}
              title="Ürünler"
            ></NavBar>
            <NavBar
              active={active}
              setIsActive={setIsActive}
              title="İletişim"
            ></NavBar>
          </div>

          <SearchFilter
            filterList={filterList}
            setFilterList={setFilterList}
          ></SearchFilter>
        </div>

        <Routes>
          <Route path="/" element={<Home filterList={filterList} />}></Route>
          <Route
            path="about"
            element={
              <div>
                <About></About>
              </div>
            }
          />
        </Routes>
        <Footer></Footer>
      </div>
    </>
  );
}

export default App;
