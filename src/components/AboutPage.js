import React from "react";
import logo from "../images/profile/profile.jpeg";
import { FaInstagram, FaFacebook } from "react-icons/fa";
export default function AboutPage() {
  return (
    <>
      <div className="flex justify-center items-center">
        <div className="w-[800px] h-[100%] bg-[#FFF4F4] mt-8 pl-4 pr-4 rounded-lg border border-gray-300 bg-zinc-400/[.1]">
          <div className="w-full flex justify-center pt-12 pb-12 ">
            <div>
              <div className="flex h-[150px] justify-center">
                <img
                  className="rounded-full border-2 border-gray-400"
                  src={logo}
                ></img>
              </div>
              <div className="pt-12 pl-20 pr-20">
                <div className="text-center p-2 font-medium text-[16px] w-100 bg-[#C80A5F]/[.05] rounded-lg text-gray-600 shadow-lg">
                  Hülyacasanat Kimdir?
                </div>
                <div className="font-regular text-[14px] mt-10 text-wrap text-gray-600 leading-6">
                  <p>
                    Merhaba, ben Hülya. 30 Eylül 1970 yılında Balıkesir'de
                    doğdum. Asma yapraklarıyla sarılı balkonu olan küçük ve
                    sevimli bir evde, tatlı yaramazlıklarla dolu çocukluk
                    dönemimden lise sona kadar anılar biriktirdim. Dokuz Eylül
                    Üniversitesi'nde Sınıf Öğretmenliği Bölümü'nü kazandım ve
                    yıllar boyu sürecek dostlukları burada edindim.
                    Kahramanmaraş'ta başlayan öğretmenlik hayatım 32 yılı geride
                    bıraktı. Bu 32 yılın bir kısmını dünyalar tatlısı kızımla,
                    ballı lokumumla paylaştım. 
                  </p>
                  <br></br>
                  <p>
                   Son birkaç yıldır sevdiğim
                    şeylere daha çok vakit ayırmaya başladım. Bu süreçte sanat
                    dünyasında bir keşif yolculuğuna çıktım. Yeni bir şeyler üretmek için çıktığım bu yol hayatıma
                    mutluluk, huzur ve renk kattı. Sanata, renklere, tasarıma ve
                    yaratıcı düşünceye ayırdığım bu zaman, başarılı sonuçlar
                    elde etmemi ve kendimi yeniden keşfetmemi sağlıyor. Küçük
                    hediyelerle sevdiklerimi mutlu etmeyi çok seviyorum.
                    Ürünlerimi, sevdiklerimin hayatındaki küçük detaylarla
                    süslemeye özen gösteriyorum.
                  </p>
                  <br></br>
                  <p>
                    Bu sitede sizlerle yapmış olduğum ürünleri paylaşıyorum.
                    Ürünler ve tüm detaylarını sayfamda bulabilirsiniz.
                    Dilerseniz istediğiniz ürünü Instagram sayfamızdan bize
                    ulaşarak sipariş verebilirsiniz.
                  </p>
                </div>
                <div className="flex gap-10 mt-8">
                  <div
                    onClick={() => {
                      window.open(
                        "https://www.instagram.com/hulyacasanat",
                        "_blank"
                      );
                    }}
                    className="flex gap-2 text-gray-800 hover:text-[#C80A5F] cursor-pointer"
                  >
                    <FaInstagram
                      style={{ height: "24px", width: "24px" }}
                    ></FaInstagram>
                    Instagram
                  </div>
                  <div
                    onClick={() => {
                      window.open(
                        "https://www.instagram.com/hulyacasanat",
                        "_blank"
                      );
                    }}
                    className="flex gap-2 cursor-pointer text-gray-800 hover:text-[#C80A5F]"
                  >
                    <FaFacebook
                      style={{ height: "24px", width: "24px" }}
                    ></FaFacebook>
                    Facebook
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
