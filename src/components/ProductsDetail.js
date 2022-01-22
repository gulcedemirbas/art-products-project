import React from "react";
import Carousel from "react-gallery-carousel";
import "react-gallery-carousel/dist/index.css";
import products from "../ProductData";
import { useLocation } from "react-router-dom";

export default function ProductsDetail() {
  const location = useLocation();
  const id = location.pathname.replace("/products/", ""); //string
  console.log(location.pathname);
  /* const images = [
    {
      src: products.map((myItem) => myItem.imageList[0].image),
      altText: "front",
      caption: "slide 1",
    },
    {
      src: products.map((myItem) => myItem.imageList[1].image),
      altText: "front",
      caption: "slide 2",
    },
    {
      src: products.map((myItem) => myItem.imageList[2].image),
      altText: "front",
      caption: "slide 3",
    },
  ];

  images.map((number) => ({
    src: number.src,
  })); */
  return (
    <>
      {products
        .filter((item) => {
          if (location.pathname === "/products") return true; // if(id === "/products")
          return item.id === Number.parseInt(id); //stringse string numbersa number ===
        })
        .map((item) => {
          const images = item.imageList.map((imageItem) => {
            return {
              src: imageItem.image,
            };
          });

          return (
            <div className="flex justify-center">
              <div className="mb-8 shadow-lg bg-white rounded-lg mt-8 flex w-[900px] relative border border-gray-400">
                <Carousel
                  className="myCarousel p-2"
                  images={images}
                  style={{ height: 400, width: 310 }}
                  hasMediaButton={false}
                  hasSizeButton={"topRight"}
                  hasThumbnails={false}
                  hasDotButtons="bottomCenter"
                  hasIndexBoard={false}
                />
                <div className="p-8 absolute left-[300px]">
                  <div className="font-semibold flex gap-7 pb-8">
                    Ürün Adı: <p className="font-normal">{item.title}</p>
                  </div>
                  <div className="font-semibold flex gap-2 pb-4">
                    <span>Ürün Açıklaması:</span>{" "}
                    <p className="font-normal">{item.description}</p>
                  </div>
                  <div className="flex justify-end pt-5 text-center ">
                    <div
                      onClick={() => {
                        window.open(
                          "https://www.instagram.com/hulyacasanat",
                          "_blank"
                        );
                      }}
                      className="border rounded-full pl-2 pr-2 pt-1 pb-1 mr-5 border-gray-300 hover:bg-secondary bg-primary hover:text-white text-gray-600 hover:border-gray-300 cursor-pointer w-[120px]"
                    >
                      Sipariş Ver
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
    </>
  );
}
