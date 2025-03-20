import React from "react";
import Navbar from "./Navbar";
import TopSect from "./Features/TopSect";
import FastOne from "./Features/Images/fast1.jpeg";
import FastTwo from "./Features/Images/fast2.jpg";
import FastThree from "./Features/Images/fast3.jpg";
import FastFour from "./Features/Images/fast4.jpg";
import FastFive from "./Features/Images/fast6.jpg";
import FastSix from "./Features/Images/fast5.jpeg";
import LocalOne from "./Features/Images/local1.jpeg";
import LocalTwo from "./Features/Images/local2.jpeg";
import LocalThree from "./Features/Images/local3.jpeg";
// import LocalFour from "./Features/Images/local4.jpeg";
import LocalFive from "./Features/Images/local5.jpg";
import LocalSix from "./Features/Images/local6.jpg";
import { FaOpencart } from "react-icons/fa";
import Footer from "./Features/Footer";
const foods = [
  {
    id: 1,
    name: "Fast Food 1",
    image: (
      <img src={FastOne} alt="fast 1" className=" h-45 rounded-t-lg w-full" />
    ),
    price: 1200,
  },
  {
    id: 2,
    name: "Fast Food 2",
    image: (
      <img src={FastTwo} alt="fast 2" className=" h-45 rounded-t-lg w-full" />
    ),
    price: 1200,
  },
  {
    id: 3,
    name: "Fast Food 3",
    image: (
      <img src={FastThree} alt="fast 3" className=" h-45 rounded-t-lg w-full" />
    ),
    price: 1200,
  },
  {
    id: 4,
    name: "Fast Food 4",
    image: (
      <img src={FastFour} alt="fast 4" className=" h-45 rounded-t-lg w-full" />
    ),
    price: 1200,
  },
  {
    id: 5,
    name: "Fast Food 5",
    image: (
      <img src={FastFive} alt="fast 5" className=" h-45 rounded-t-lg w-full" />
    ),
    price: 1200,
  },
  {
    id: 6,
    name: "Fast Food 6",
    image: (
      <img src={FastSix} alt="fast 6" className=" h-45 rounded-t-lg w-full" />
    ),
    price: 1200,
  },
  {
    id: 7,
    name: "Fast Food 7",
    image: (
      <img src={LocalOne} alt="fast 7" className=" h-45 rounded-t-lg w-full" />
    ),
    price: 1200,
  },
  {
    id: 8,
    name: "Fast Food 8",
    image: (
      <img src={LocalTwo} alt="fast 8" className=" h-45 rounded-t-lg w-full" />
    ),
    price: 1200,
  },
  {
    id: 9,
    name: "Fast Food 9",
    image: (
      <img
        src={LocalThree}
        alt="fast 9"
        className=" h-45 rounded-t-lg w-full"
      />
    ),
    price: 1200,
  },
  {
    id: 10,
    name: "Fast Food10",
    image: (
      <img
        src={LocalFive}
        alt="fast 10"
        className=" h-45 rounded-t-lg w-full"
      />
    ),
    price: 1200,
  },
  {
    id: 11,
    name: "Fast Food 11",
    image: (
      <img src={LocalSix} alt="fast 11" className=" h-45 rounded-t-lg w-full" />
    ),
    price: 1200,
  },
];

function FoodShop() {
  return (
    <div>
      <Navbar />
      <TopSect />
      <button className=" bg-red-700 ml-296 mb-10 rounded-lg p-2 flex items-center gap-2 text-lg text-white">
        <FaOpencart />
        <span className="bg-gradient-to-br from-white via-blue-200 to-white font-bold text-transparent bg-clip-text">
          Food Cart
        </span>
      </button>
      <section className="grid  items-center grid-cols-4 content-center justify-center justify-items-center justify-self-center self-center gap-5">
        {foods.map((food) => (
          <div key={food.name} className=" w-70 rounded-lg shadow-md flex flex-col   overflow-hidden mb-10  cursor-pointer">
            <div className="w-70 h-30">{food.image}</div>
            <div className="bg-white mt-10 flex items-center font-bold justify-between p-3">
              <p className="text-red-500  text-lg">{food.name}</p>
              <p>₦{food.price}</p>
            </div>
          </div>
        ))}
      </section>
      <Footer />
    </div>
  );
}

export default FoodShop;
