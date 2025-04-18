import React from "react";
import { useNavigate } from "react-router-dom";

function Footer({ onRestClick, onHowClick, email, location }) {
  const navigate = useNavigate();
  return (
    <>
      <section className="bg-[url(/fast3.jpg)] from-red-500 to-red-800 text-white grid bg-fixed py-20 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 px-20 gap-20  relative ">
        <div className="absolute top-0 left-0 bg-black/70 h-full w-full "></div>
        <div className="z-[10] ">
          <p className="font-bold mb-5 text-xl ">DeluxeFood</p>
          <p>Connects you to the best restaurants in your area.</p>
        </div>
        <div className="z-[10]">
          <p className="font-bold mb-5 text-xl">Quick Link</p>
          <p onClick={onRestClick} className="mb-4 cursor-pointer">
            Restaurants
          </p>
          <p onClick={onHowClick} className="mb-4 cursor-pointer">
            How it works
          </p>
          <p
            onClick={() => navigate("/about-us")}
            className="cursor-pointer mb-4"
          >
            About us
          </p>
          <p
            onClick={() => navigate("/privacy")}
            className=" hover:cursor-pointer "
          >
            privacy
          </p>
        </div>
        <div className="z-[10] w-px-10 sm:px-1 pr-3">
          <p className="font-bold mb-5 text-xl">Contact</p>
          <p>Email: {email} </p>
          <p>Location: {location} </p>
        </div>
      </section>
      <nav className="bg-red-700 text-center text-xl py-7 text-white">
        © 2025 DeluxeFood. All rights reserved.
      </nav>
    </>
  );
}

export default Footer;
