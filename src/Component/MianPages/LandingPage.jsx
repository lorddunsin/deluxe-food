import React from "react";
import Navbar from "./Navbar";
import Restaurants from "./Features/Restaurants";
import bgimage from "./Features/Images/bg-food.jpg";
import Footer from "./Features/Footer";
import TopSect from "./Features/TopSect";
// import { useNavigate } from "react-router-dom";

function LandingPage() {
  
  return (
    <section className="flex flex-col">
      <Navbar name="Sign up" />
      <TopSect />
      <main className="max-w-280 flex self-center  flex-col overflow-hidden ">
        <h1 className="font-bold text-xl mb-13">Featured Restaurants</h1>
        <div>
          <Restaurants />
        </div>
        <h1 className="font-bold text-2xl mb-7 mt-13 text-center">
          How It Works
        </h1>
      </main>
      <section className=" w-full rounded-lg  justify-between flex self-center content-center items-center text-center bg-gray-100 p-20">
        <div className="bg-white rounded-lg shadow-md p-10 w-95 h-50">
          <p className="text-5xl mb-5">🔍</p>
          <p className="text-lg font-bold">Find Restaurant</p>
          <p className="text-lg">Browse restaurant near you</p>
        </div>
        <div className="bg-white rounded-lg shadow-md p-10 w-95 h-50">
          <p className="text-5xl mb-5">🍽</p>
          <p className="text-lg font-bold">Choose Meal</p>
          <p className="text-lg">Select your favourite dishes</p>
        </div>

        <div className="bg-white rounded-lg shadow-md p-10 w-95 h-50">
          <p className="text-5xl mb-5">💳</p>
          <p className="text-lg font-bold">Place Order</p>
          <p className="text-lg">Pay securely and wait for delivery</p>
        </div>
      </section>

      <h1 className="font-bold text-2xl mt-16 text-center">Why Choose Us</h1>
      <section className=" w-full rounded-lg justify-between flex self-center content-center items-center text-center p-20">
        <div className=" rounded-lg shadow-md p-8 w-95 bg-gray-100">
          <p className="text-lg font-bold">Fast Delivery</p>
          <p>Quick and reliable delivery to your door step</p>
        </div>
        <div className=" rounded-lg shadow-md p-8 w-95 bg-gray-100">
          <p className="text-lg font-bold">Live Tracking</p>
          <p>Real-time update on your order status</p>
        </div>

        <div className=" rounded-lg shadow-md p-8 w-95 bg-gray-100">
          <p className="text-lg font-bold">Easy Payment</p>
          <p>Multiple payment options</p>
        </div>
      </section>
      <div>
        <Footer />
      </div>
    </section>
  );
}

export default LandingPage;
