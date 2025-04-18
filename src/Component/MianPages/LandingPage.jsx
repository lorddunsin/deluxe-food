import React, { useState } from "react";
import Navbar from "./Navbar";
import Restaurants from "./Features/Restaurants";
import Footer from "./Features/Footer";
import TopSect from "./Features/TopSect";
import { useRef } from "react";
import { FaOpencart } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import Cart from "./Cart";
// import { useNavigate } from "react-router-dom";

function LandingPage() {
  const restRef = useRef(null); // Previously aboutRef
  const howRef = useRef(null); // Previously contactRef
  const navigator = useNavigate();

  const scrollToRest = () => {
    restRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToHow = () => {
    howRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="flex flex-col w-full relative overflow-hidden">
      <Navbar
        name="Sign up"
        onRestClick={scrollToRest}
        onHowClick={scrollToHow}
      />
      <button
        onClick={() => navigator("/cart")}
        className="fixed right-4 top-[70px] group bg-red-700 border border-red-300 rounded-lg p-2 flex items-center gap-2 text-lg text-white z-50 shadow-md"
      >
        <FaOpencart />

        <span className="absolute top-full mt-1 left-1/2 -translate-x-1/2 transform bg-red-500  text-white text-xs rounded py-1 px-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
          Cart
        </span>
      </button>

      <TopSect
        header=" Delicious Food Delivered To Your Door"
        subheader="Order from your favorite restaurant with just a few clicks"
      />
      <main className="max-w-screen-lg flex self-center flex-col overflow-hidden p-4">
        <div>
          <Restaurants refProp={restRef} />
        </div>
        <h1 ref={howRef} className="font-bold text-2xl mb-7 mt-12 text-center">
          How It Works
        </h1>
      </main>

      {/* Steps Section */}
      <section className="flex flex-wrap justify-center gap-8 p-6 bg-gray-100 rounded-lg">
        <div className="bg-white rounded-lg shadow-md p-8 w-full sm:w-80 md:w-96 lg:w-1/4 text-center">
          <p className="text-5xl mb-5">🔍</p>
          <p className="text-lg font-bold">Find Restaurant</p>
          <p className="text-md">Browse restaurant near you</p>
        </div>
        <div className="bg-white rounded-lg shadow-md p-8 w-full sm:w-80 md:w-96 lg:w-1/4 text-center">
          <p className="text-5xl mb-5">🍽</p>
          <p className="text-lg font-bold">Choose Meal</p>
          <p className="text-md">Select your favourite dishes</p>
        </div>
        <div className="bg-white rounded-lg shadow-md p-8 w-full sm:w-80 md:w-96 lg:w-1/4 text-center">
          <p className="text-5xl mb-5">💳</p>
          <p className="text-lg font-bold">Place Order</p>
          <p className="text-md">Pay securely and wait for delivery</p>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <h1 className="font-bold text-2xl mt-16 text-center">Why Choose Us</h1>
      <section className="flex flex-wrap justify-center gap-8 p-6">
        <div className="rounded-lg shadow-md p-8 w-full sm:w-80 md:w-96 lg:w-1/4 bg-gray-100 text-center">
          <p className="text-lg font-bold">Fast Delivery</p>
          <p>Quick and reliable delivery to your door step</p>
        </div>
        <div className="rounded-lg shadow-md p-8 w-full sm:w-80 md:w-96 lg:w-1/4 bg-gray-100 text-center">
          <p className="text-lg font-bold">Live Tracking</p>
          <p>Real-time update on your order status</p>
        </div>
        <div className="rounded-lg shadow-md p-8 w-full sm:w-80 md:w-96 lg:w-1/4 bg-gray-100 text-center">
          <p className="text-lg font-bold">Easy Payment</p>
          <p>Multiple payment options</p>
        </div>
      </section>

      <Footer
        onRestClick={scrollToRest}
        onHowClick={scrollToHow}
        email="deluxefood@email"
        location="Orogun Ibadan"
      />
    </section>
  );
}

export default LandingPage;
