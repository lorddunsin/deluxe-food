import React from "react";
// import rrrr from "./Images/fast-bite.jpg";

function TopSect() {
  return (
    <div className="bg-[url(/fast1.jpeg)] bg-center relative  items-center  text-center  flex flex-col  items-center rounded-b-lg pb-30 mb-20">
      <div className="absolute top-0 left-0 bg-black/30 h-full w-full "></div>
      <h1 className="text-5xl z-[10] font-bold text-white flex justify-self-center mt-15 w-170">
        Delicious Food Delivered To Your Door
      </h1>
      <p className="text-xl z-[10] my-5 text-white">
        Order from your favourite restaurant with just a few clicks
      </p>
      <form className="z-[10]">
        <input
          type="text"
          placeholder="Search for your favourite food"
          className="bg-red-500 bg-transparent-0.5 py-3 pl-5  w-100 mr-5 rounded-lg  font-bold text-white"
        />
        <button className="bg-red-700 p-3 text-white font-bold rounded-lg">
          Find Food
        </button>
      </form>
    </div>
  );
}

export default TopSect;
