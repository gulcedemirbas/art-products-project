import React from "react";
import Carousel from "react-gallery-carousel";
import "react-gallery-carousel/dist/index.css";
import products from "../ProductData";

export default function ProductsDetail() {
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
      {products.map((item) => {

          const images = item.imageList.map((imageItem) => {return {
              src: imageItem.image
          }})

        return (
            
          <div className="mb-8 shadow-lg bg-white rounded-lg ">
            <Carousel className ="myCarousel" images={images} style={{ height: 400, width: 310}} hasMediaButton={false} hasSizeButton={false} hasThumbnails= {false} hasDotButtons="bottomCenter" hasIndexBoard={false} />
          </div>
        );
      })}
    </>
  );
}
