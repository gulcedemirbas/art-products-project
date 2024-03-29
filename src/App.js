import Footer from "./components/Footer";
import { Routes, Route } from "react-router-dom";
import AboutPage from "./components/AboutPage";
import Home from "./components/Home";
import NavBar from "./components/NavBar";
import logo from "./logo.svg";
import { useState, useEffect } from "react";
import SearchFilter from "./components/SearchFilter";
import { useNavigate, useLocation } from "react-router-dom";
import "./index.css";
import ContactPage from "./components/ContactPage";
import ProductsDetail from "./components/ProductsDetail";
import HamburgerMenu from "./components/HamburgerMenu";

function App() {
  const [filterList, setFilterList] = useState({
    searchKeyword: "",
    filterKeyword: "",
  });
  const [activeTab, setActiveTab] = useState("Anasayfa");
  const navigate = useNavigate();
  const location = useLocation();
  const [loggedIn, setLoggedIn] = useState(null);

  useEffect(() => {
    const loggedUser = localStorage.getItem("/");
    setLoggedIn(Boolean(loggedUser));
  }, []);

  useEffect(() => {
    if (location.pathname === "/About") {
      setActiveTab("Hakkımda");
    } else if (location.pathname === "/products") {
      setActiveTab("Ürünler");
    } else if (location.pathname === "/contact") {
      setActiveTab("İletişim");
    }
    else if(location.pathname === "/"){
      setActiveTab("Anasayfa")
    }
  }, [location.pathname]);

  return (
    <>
      <div className="min-h-full ml-20 mr-20 relative">
        <div className="h-[70px] p-[10px]">
          <div className="flex justify-between items-center">
            <div
              onClick={() => {
                setActiveTab("Anasayfa");
                navigate("/");
              }}
              className="logo h-16 cursor-pointer w-[130px]"
            >
              <img src={logo}></img>
            </div>
            {/*  <HamburgerMenu></HamburgerMenu> */}
            <div className="hamburger-menu">Menu</div>
            <div className="menu flex gap-10">
              <NavBar
                active={activeTab === "Anasayfa"}
                onClick={() => {
                  setActiveTab("Anasayfa");
                  navigate("/");
                }}
                title="Anasayfa"
              ></NavBar>
              <NavBar
                active={activeTab === "Hakkımda"}
                onClick={() => {
                  setActiveTab("Hakkımda");
                  navigate("/about");
                }}
                title="Hakkımda"
              ></NavBar>
              <NavBar
                active={activeTab === "Ürünler"}
                onClick={() => {
                  setActiveTab("Ürünler");
                  navigate("/products");
                }}
                title="Ürünler"
              ></NavBar>
              <NavBar
                active={activeTab === "İletişim"}
                onClick={() => {
                  setActiveTab("İletişim");
                  navigate("/contact");
                }}
                title="İletişim"
              ></NavBar>
            </div>
            <div className="navbar-search">
              {activeTab !== "Anasayfa" ? null : (
                <SearchFilter
                  filterList={filterList}
                  setFilterList={setFilterList}
                ></SearchFilter>
              )}
            </div>
          </div>
        </div>
        <div className="pb-20">
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
            <Route path="products">
              <Route path=":id" element={<ProductsDetail />} />
              <Route path="" element={<ProductsDetail />} />
            </Route>
             
            <Route path="contact" element={<ContactPage></ContactPage>} />
          </Routes>
        </div>
        <div className="absolute bottom-0 w-full">
          <Footer></Footer>
        </div>
      </div>
    </>
  );
}

export default App;
