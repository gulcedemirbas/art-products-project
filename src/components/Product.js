import React from "react";
import { useNavigate} from "react-router-dom";

export default function Product({ product }) {
  const navigate = useNavigate();

  return (
    <>
      <div className="mt-2 flex">
        <div className="bg-white rounded-lg transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 shadow-lg">
          <div className="w-full p-5 flex h-[400px]">
            <img src={product.imageList[0].image}></img>
          </div>
          <div className="text-left pl-5 pb-5 pt-1 font-medium text-gray-600 h-[50px] ">
            {product.title}
          </div>
          <div className="flex justify-between pb-5 pt-1 text-gray-500 text-[14px]">
            <div onClick={()=>{navigate("products/" + product.id)}} className="pl-5 pr-2 pt-1 pb-1 text-[#d183a3] hover:text-[#C80A5F] hover:border-black cursor-pointer">
              Ürün Detayı
            </div>
            <div onClick={() => {
                      window.open(
                        "https://www.instagram.com/hulyacasanat",
                        "_blank"
                      );
                    }} className="border rounded pl-2 pr-2 pt-1 pb-1 mr-5 border-gray-400 hover:text-gray-800   hover:border-gray-800 cursor-pointer">
              Sipariş Ver
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
