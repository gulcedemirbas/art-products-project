import photo1 from "./images/product1/photo1.JPG";
import photo1a from "./images/product1/photo1a.JPG";
import photo1b from "./images/product1/photo1b.JPG";
import photo2 from "./images/product2/photo2.JPG";
import photo2a from "./images/product2/photo2a.JPG";
import photo2b from "./images/product2/photo2b.JPG";
import photo3 from "./images/product3/photo3.JPG";
import photo3a from "./images/product3/photo3a.JPG";
import photo3b from "./images/product3/photo3b.JPG";
import photo4 from "./images/product4/photo4.JPG";
import photo4a from "./images/product4/photo4a.JPG";
import photo4b from "./images/product4/photo4b.JPG";
import photo5 from "./images/product5/photo5.JPG";
import photo5a from "./images/product5/photo5a.JPG";
import photo5b from "./images/product5/photo5b.JPG";
import photo6 from "./images/product6/photo6.JPG";
import photo6a from "./images/product6/photo6a.JPG";
import photo6b from "./images/product6/photo6b.JPG";
import photo7 from "./images/product7/photo7.JPG";
import photo7a from "./images/product7/photo7a.JPG";
import photo7b from "./images/product7/photo7b.JPG";
import photo8 from "./images/product8/photo8.JPG";
import photo8a from "./images/product8/photo8a.JPG";
import photo8b from "./images/product8/photo8b.JPG";
import photo9 from "./images/product9/photo9.JPG";
import photo9a from "./images/product9/photo9a.JPG";
import photo9b from "./images/product9/photo9b.JPG";
import photo10 from "./images/product10/photo10.JPG";
import photo10a from "./images/product10/photo10a.JPG";
import photo10b from "./images/product10/photo10b.JPG";
import photo11 from "./images/product11/photo11.JPG";
import photo11a from "./images/product11/photo11a.jpg";
import photo11b from "./images/product11/photo11b.jpg";
import photo12 from "./images/product12/photo12.JPG";
import photo13 from "./images/product13/photo13.JPG";
import photo13a from "./images/product13/photo13a.JPG";
import photo13b from "./images/product13/photo13b.JPG";
import photo14 from "./images/product14/photo14.JPG";
import photo14a from "./images/product14/photo14a.JPG";
import photo14b from "./images/product14/photo14b.JPG";
import photo15 from "./images/product15/photo15.JPG";
import photo15a from "./images/product15/photo15a.JPG";
import photo15b from "./images/product15/photo15b.JPG";
import photo16 from "./images/product16/photo16.JPG";
import photo16a from "./images/product16/photo16a.JPG";
import photo16b from "./images/product16/photo16b.JPG";
import photo17 from "./images/product17/photo17.JPG";
import photo17a from "./images/product17/photo17a.JPG";
import photo17b from "./images/product17/photo17b.JPG";
import photo18 from "./images/product18/photo18.JPG";
import photo18a from "./images/product18/photo18a.JPG";
import photo18b from "./images/product18/photo18b.JPG";
import photo19 from "./images/product19/photo19.JPG";
import photo19a from "./images/product19/photo19a.JPG";
import photo19b from "./images/product19/photo19b.JPG";

const myProducts = products.map((item) => {
  return { src: item.imageList[0].image };
});

/* const myProducts2 = products.map((item) => {
  if(item.type === "Aksesuar"){
    return {...item.imageList[2]}
  }
  return
}) */


const products = [
  {
    title: "Çiçekli Dekoratif Süs Lila",
    imageList: [
      { image: photo1, name: "photo1" },
      { image: photo1a, name: "photo1a" },
      { image: photo1b, name: "photo1b" },
    ],
    description:
      "Ürünümüzün dışı lila renkte ve ortasındaki çiçek fuşya pembesidir. Kişiselleştirilmiş ürün siparişi verebilirsiniz. Sevdiklerinize güzel bir hediye alternatifi veya evinizin bir köşesini süsleyecek minik renkli ev aksesuarı. Minimalist yaşam tarzını sevenler için kil hamurundan yapılan bu aksesuarlar oldukça da ekonomik. Ürün fiyat bilgisi için Sipariş Ver butonu ile Instagram üzerinden bize ulaşabilirsiniz.",
    type: "Aksesuar",
    id: 1,
  },

  {
    title: "Kalpli Dekoratif Süs Sarı",
    imageList: [
      { image: photo2, name: "photo2" },
      { image: photo2a, name: "photo2a" },
      { image: photo2b, name: "photo2b" },
    ],
    description:
      "Ürünümüzün dışı sarı renkte ve ortasındaki kalp kırmızıdır. Kişiselleştirilmiş ürün siparişi verebilirsiniz. Sevdiklerinize güzel bir hediye alternatifi veya evinizin bir köşesini süsleyecek minik renkli ev aksesuarı. Minimalist yaşam tarzını sevenler için kil hamurundan yapılan bu aksesuarlar oldukça da ekonomik. Ürün fiyat bilgisi için Sipariş Ver butonu ile Instagram üzerinden bize ulaşabilirsiniz.",
    type: "Aksesuar",
    id: 2,
  },
  {
    title: "G Harfli Dekoratif Süs",
    imageList: [
      { image: photo3, name: "photo3" },
      { image: photo3a, name: "photo3a" },
      { image: photo3b, name: "photo3b" },
    ],
    description:
      "Ürünümüz siyah renkte ve G harfi modellidir. Kişiselleştirilmiş ürün siparişi verebilirsiniz. Harf ürünlerinin üzerindeki detayları siz belirleyebilirsiniz. Sevdiklerinize güzel bir hediye alternatifi veya evinizin bir köşesini süsleyecek minik renkli ev aksesuarı. Minimalist yaşam tarzını sevenler için kil hamurundan yapılan bu aksesuarlar oldukça da ekonomik. Ürün fiyat bilgisi için Sipariş Ver butonu ile Instagram üzerinden bize ulaşabilirsiniz.",
    type: "Aksesuar",
    id: 3,
  },
  {
    title: "Kalpli Dekoratif Süs Lacivert",
    imageList: [
      { image: photo4, name: "photo4" },
      { image: photo4a, name: "photo4a" },
      { image: photo4b, name: "photo4b" },
    ],
    description:
      "Ürünümüzün dışı lacivert renkte ve ortasındaki çiçek gül rengidir. Kişiselleştirilmiş ürün siparişi verebilirsiniz. Sevdiklerinize güzel bir hediye alternatifi veya evinizin bir köşesini süsleyecek minik renkli ev aksesuarı. Minimalist yaşam tarzını sevenler için kil hamurundan yapılan bu aksesuarlar oldukça da ekonomik. Ürün fiyat bilgisi için Sipariş Ver butonu ile Instagram üzerinden bize ulaşabilirsiniz.",
    type: "Aksesuar",
    id: 4,
  },
  {
    title: "Çiçekli Dekoratif Süs Turuncu",
    imageList: [
      { image: photo5, name: "photo5" },
      { image: photo5a, name: "photo5a" },
      { image: photo5b, name: "photo5b" },
    ],
    description:
      "Ürünümüzün dışı turuncu renkte ve ortasındaki çiçek fıstık yeşilidir. Kişiselleştirilmiş ürün siparişi verebilirsiniz. Sevdiklerinize güzel bir hediye alternatifi veya evinizin bir köşesini süsleyecek minik renkli ev aksesuarı. Minimalist yaşam tarzını sevenler için kil hamurundan yapılan bu aksesuarlar oldukça da ekonomik. Ürün fiyat bilgisi için Sipariş Ver butonu ile Instagram üzerinden bize ulaşabilirsiniz.",
    id: 5,
    type: "Aksesuar",
  },

  {
    title: "Kalpli Dekoratif Süs Sarı İnce",
    imageList: [
      { image: photo6, name: "photo6" },
      { image: photo6a, name: "photo6a" },
      { image: photo6b, name: "photo6b" },
    ],
    description:
      "Ürünümüzün dışı sarı renkte ve ortasındaki kalp kırmızı renktedir. Kişiselleştirilmiş ürün siparişi verebilirsiniz. Sevdiklerinize güzel bir hediye alternatifi veya evinizin bir köşesini süsleyecek minik renkli ev aksesuarı. Minimalist yaşam tarzını sevenler için kil hamurundan yapılan bu aksesuarlar oldukça da ekonomik. Ürün fiyat bilgisi için Sipariş Ver butonu ile Instagram üzerinden bize ulaşabilirsiniz.",
    type: "Aksesuar",
    id: 6,
  },
  {
    title: "K Harfli Dekoratif Süs",
    imageList: [
      { image: photo7, name: "photo7" },
      { image: photo7a, name: "photo7a" },
      { image: photo7b, name: "photo7b" },
    ],
    description:
      "Ürünümüzün dışı kırmızı renkte ve harf modellidir. Kişiselleştirilmiş ürün siparişi verebilirsiniz. Sevdiklerinize güzel bir hediye alternatifi veya evinizin bir köşesini süsleyecek minik renkli ev aksesuarı. Minimalist yaşam tarzını sevenler için kil hamurundan yapılan bu aksesuarlar oldukça da ekonomik. Ürün fiyat bilgisi için Sipariş Ver butonu ile Instagram üzerinden bize ulaşabilirsiniz.",
    type: "Aksesuar",
    id: 7,
  },
  {
    title: "İşlemeli Çerçeve Kadın Resmi Beyaz",
    imageList: [
      { image: photo8, name: "photo8" },
      { image: photo8a, name: "photo8a" },
      { image: photo8b, name: "photo8b" },
    ],
    description:
      "Ürünümüz kadın modelli bir akrilik boya çalışmasıdır. İşlemeli beyaz çerçeve ile bir sipariş verilebilir. Kişiselleştirilmiş ürün siparişi de verebilirsiniz. Sevdiklerinize güzel bir hediye alternatifi veya evinizin bir köşesini süsleyecek tasarımlar.",
    type: "Resim",
    id: 8,
  },
  {
    title: "İşlemeli Çerçeve Kadın Resmi Yeşil",
    imageList: [
      { image: photo9, name: "photo9" },
      { image: photo9a, name: "photo9a" },
      { image: photo9b, name: "photo9b" },
    ],
    description:
      "Ürünümüz kadın modelli bir akrilik boya çalışmasıdır. İşlemeli yeşil çerçeve ile bir sipariş verilebilir. Kişiselleştirilmiş ürün siparişi de verebilirsiniz. Sevdiklerinize güzel bir hediye alternatifi veya evinizin bir köşesini süsleyecek tasarımlar.",
    type: "Resim",
    id: 9,
  },
  {
    title: "İşlemeli Çerçeve Gül Resmi Mavi",
    imageList: [
      { image: photo10, name: "photo10" },
      { image: photo10a, name: "photo10a" },
      { image: photo10b, name: "photo10b" },
    ],
    description:
      "Ürünümüz gül modelli bir akrilik boya çalışmasıdır. İşlemeli mavi çerçeve ile bir sipariş verilebilir. Kişiselleştirilmiş ürün siparişi de verebilirsiniz. Sevdiklerinize güzel bir hediye alternatifi veya evinizin bir köşesini süsleyecek tasarımlar.",
    type: "Resim",
    id: 10,
  },
  {
    title: "Altın Çerçeve Parlak Balık Figürlü Peri Kızı Resmi",
    imageList: [
      { image: photo11, name: "photo11" },
      { image: photo11a, name: "photo11a" },
      { image: photo11b, name: "photo11b" },
    ],
    description:
      "Ürünümüz sürreal bir tasarıma sahip bir akrilik boya çalışmasıdır. İşlemeli altın çerçeve ile bir sipariş verilebilir. Ürünümüz parlaktır ve yer yer sim detayları mevcuttur. Kişiselleştirilmiş ürün siparişi de verebilirsiniz. Sevdiklerinize güzel bir hediye alternatifi veya evinizin bir köşesini süsleyecek tasarımlar.",
    type: "Resim",
    id: 11,
  },
  {
    title: "Beyaz Çerçeve Marilyn Monroe Resmi",
    imageList: [{ image: photo12, name: "photo12" }],
    description:
      "Ürünümüz Marilyn Monroe modelli bir akrilik boya çalışmasıdır. Beyaz çerçeve ile bir sipariş verilebilir. Kişiselleştirilmiş ürün siparişi de verebilirsiniz. Sevdiklerinize güzel bir hediye alternatifi veya evinizin bir köşesini süsleyecek tasarımlar.",
    type: "Resim",
    id: 12,
  },
  {
    title: "Beyaz Çerçeve Marilyn Monroe Resmi",
    imageList: [
      { image: photo13, name: "photo13" },
      { image: photo13a, name: "photo13a" },
      { image: photo13b, name: "photo13b" },
    ],
    description:
      "Ürünümüz Marilyn Monroe modelli bir akrilik boya çalışmasıdır. Beyaz çerçeve ile bir sipariş verilebilir. Kişiselleştirilmiş ürün siparişi de verebilirsiniz. Sevdiklerinize güzel bir hediye alternatifi veya evinizin bir köşesini süsleyecek tasarımlar.",
    type: "Resim",
    id: 12,
  },
  {
    title: "Beyaz Çerçeve Marilyn Monroe Resmi",
    imageList: [
      { image: photo14, name: "photo14" },
      { image: photo14a, name: "photo14a" },
      { image: photo14b, name: "photo14b" },
    ],
    description:
      "Ürünümüz Marilyn Monroe modelli bir akrilik boya çalışmasıdır. Beyaz çerçeve ile bir sipariş verilebilir. Kişiselleştirilmiş ürün siparişi de verebilirsiniz. Sevdiklerinize güzel bir hediye alternatifi veya evinizin bir köşesini süsleyecek tasarımlar.",
    type: "Resim",
    id: 13,
  },
  {
    title: "Beyaz Çerçeve Marilyn Monroe Resmi",
    imageList: [
      { image: photo15, name: "photo15" },
      { image: photo15a, name: "photo15a" },
      { image: photo15b, name: "photo15b" },
    ],
    description:
      "Ürünümüz Marilyn Monroe modelli bir akrilik boya çalışmasıdır. Beyaz çerçeve ile bir sipariş verilebilir. Kişiselleştirilmiş ürün siparişi de verebilirsiniz. Sevdiklerinize güzel bir hediye alternatifi veya evinizin bir köşesini süsleyecek tasarımlar.",
    type: "Resim",
    id: 14,
  },
  {
    title: "Beyaz Çerçeve Marilyn Monroe Resmi",
    imageList: [
      { image: photo16, name: "photo16" },
      { image: photo16a, name: "photo16a" },
      { image: photo16b, name: "photo16b" },
    ],
    description:
      "Ürünümüz Marilyn Monroe modelli bir akrilik boya çalışmasıdır. Beyaz çerçeve ile bir sipariş verilebilir. Kişiselleştirilmiş ürün siparişi de verebilirsiniz. Sevdiklerinize güzel bir hediye alternatifi veya evinizin bir köşesini süsleyecek tasarımlar.",
    type: "Resim",
    id: 15,
  },
  {
    title: "Beyaz Çerçeve Marilyn Monroe Resmi",
    imageList: [
      { image: photo17, name: "photo17" },
      { image: photo17a, name: "photo17a" },
      { image: photo17b, name: "photo17b" },
    ],
    description:
      "Ürünümüz Marilyn Monroe modelli bir akrilik boya çalışmasıdır. Beyaz çerçeve ile bir sipariş verilebilir. Kişiselleştirilmiş ürün siparişi de verebilirsiniz. Sevdiklerinize güzel bir hediye alternatifi veya evinizin bir köşesini süsleyecek tasarımlar.",
    type: "Resim",
    id: 16,
  },
  {
    title: "Beyaz Çerçeve Marilyn Monroe Resmi",
    imageList: [
      { image: photo18, name: "photo18" },
      { image: photo18a, name: "photo18a" },
      { image: photo18b, name: "photo18b" },
    ],
    description:
      "Ürünümüz Marilyn Monroe modelli bir akrilik boya çalışmasıdır. Beyaz çerçeve ile bir sipariş verilebilir. Kişiselleştirilmiş ürün siparişi de verebilirsiniz. Sevdiklerinize güzel bir hediye alternatifi veya evinizin bir köşesini süsleyecek tasarımlar.",
    type: "Resim",
    id: 17,
  },
  {
    title: "Beyaz Çerçeve Marilyn Monroe Resmi",
    imageList: [
      { image: photo19, name: "photo19" },
      { image: photo19a, name: "photo19a" },
      { image: photo19b, name: "photo19b" },
    ],
    description:
      "Ürünümüz Marilyn Monroe modelli bir akrilik boya çalışmasıdır. Beyaz çerçeve ile bir sipariş verilebilir. Kişiselleştirilmiş ürün siparişi de verebilirsiniz. Sevdiklerinize güzel bir hediye alternatifi veya evinizin bir köşesini süsleyecek tasarımlar.",
    type: "Resim",
    id: 18,
  },
];

export default products;
