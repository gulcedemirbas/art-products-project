import Footer from "./components/Footer";
import { Routes, Route } from "react-router-dom";
import AboutPage from "./components/AboutPage";
import Home from "./components/Home";
import NavBar from "./components/NavBar";
import logo from "./logo.svg";
import { useState,useEffect } from "react";
import SearchFilter from "./components/SearchFilter";
import { useNavigate, useLocation } from "react-router-dom";
import "./index.css"
import ContactPage from "./components/ContactPage";


function App() {
  const [filterList, setFilterList] = useState({
    searchKeyword: "",
    filterKeyword: "",
  });
  const [activeTab, setActiveTab] = useState("Anasayfa");
  const navigate = useNavigate();
  const location = useLocation();
  console.log(location)
  const [loggedIn, setLoggedIn] = useState(null);

useEffect(() => {
    const loggedUser = localStorage.getItem('/');
    setLoggedIn(Boolean(loggedUser));
  }, []);

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
      <div className="h-full ml-20 mr-20" >
        <div className=" h-[70px] grid grid-rows-1 mb-6" >
          <div className="flex justify-between">
          <div
            onClick={() => {
              setActiveTab("Anasayfa")
              navigate("/");
            }}
            className="mt-1 h-16 cursor-pointer w-[120px]"
          >
            <img src={logo}></img>
          </div>
          <div className="flex items-center gap-10">
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
            <SearchFilter
            filterList={filterList}
            setFilterList={setFilterList}
          ></SearchFilter>
          </div>
          </div>

          
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
              <div className="height">
                Product sayfasıyım ben
              </div>
            }
          />
          <Route
            path="contact"
            element={
              <div className="height">
                <ContactPage></ContactPage>

              </div>
            }
          />
        </Routes>

        <Footer ></Footer>
      </div>
    </>
  );
}

export default App;
