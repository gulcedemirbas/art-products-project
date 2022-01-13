import Footer from "./components/Footer";
import { Routes, Route } from "react-router-dom";
import AboutPage from "./components/AboutPage";
import Home from "./components/Home";
import NavBar from "./components/NavBar";
import logo from "./logo.svg";
import { useState,useEffect } from "react";
import SearchFilter from "./components/SearchFilter";
import { useNavigate, useLocation } from "react-router-dom";

function App() {
  const [filterList, setFilterList] = useState({
    searchKeyword: "",
    filterKeyword: "",
  });
  const [activeTab, setActiveTab] = useState("Anasayfa");
  const navigate = useNavigate();
  const location = useLocation();
  console.log(location)
  useEffect(() => {
    if(location.pathname === "/About")
    {
      setActiveTab("Hakkımda")
    }
    else if(location.pathname === "/products"){
      setActiveTab("Ürünler")
    }
    else if(location.pathname === "/contact"){
      setActiveTab("İletişim")
    }
  }, [])

  return (
    <>
      <div className="h-full ml-20 mr-20">
        <div className="flex mb-6" style={{ justifyContent: "space-between" }}>
          <div
            onClick={() => {
              setActiveTab("Anasayfa")
              navigate("/");
            }}
            className="flex h-16 mb-3 cursor-pointer"
          >
            <img src={logo}></img>
          </div>
          <div className="flex justify-center items-center gap-10 p-[0px 40px]">
            <NavBar
              active={activeTab === "Anasayfa"}
              onClick={()=>{
                setActiveTab("Anasayfa")
                navigate("/")}}
              title="Anasayfa"
            ></NavBar>
            <NavBar
              active={activeTab === "Hakkımda"}
              onClick={()=>{
                setActiveTab("Hakkımda")
                navigate("/about")}}
              title="Hakkımda"
            >
            </NavBar>
            <NavBar
             active={activeTab === "Ürünler"}
             onClick={()=>{
               setActiveTab("Ürünler")
               navigate("/products")}}
             title="Ürünler"
           
            ></NavBar>
            <NavBar
              active={activeTab === "İletişim"}
              onClick={()=>{
                setActiveTab("İletişim")
                navigate("/contact")}}
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
                <AboutPage></AboutPage>
              </div>
            }
          />
          <Route
            path="products"
            element={
              <div className="h-full">
                Product sayfasıyım ben
              </div>
            }
          />
          <Route
            path="contact"
            element={
              <div className="h-full">
                Contact sayfasıyım ben

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
