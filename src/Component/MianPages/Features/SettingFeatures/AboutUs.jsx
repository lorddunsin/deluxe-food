import React from "react";
import Navbar from "../../Navbar";
import { useNavigate } from "react-router-dom";

function AboutUs() {
  const navigate = useNavigate();
  return (
    <div className="max-w-3xl mx-auto px-6 py-12 text-gray-800">
      <h1 className="text-4xl font-bold mb-6 text-red-600">About Us</h1>

      <p className="mb-4 text-lg">
        Welcome to <strong>Deluxe Food</strong>, your ultimate destination for
        discovering the best restaurants, exploring diverse cuisines, and
        ordering your favorite meals — all in one place.
      </p>

      <p className="mb-4 text-lg">
        At <strong>Deluxe Food</strong>, we're passionate about bringing people
        together through food. Whether you're craving a comforting local dish or
        want to try something new from across town, we've got you covered. Our
        platform connects food lovers with a wide range of restaurants, allowing
        you to <strong>search, order, buy, and even sell food online</strong>{" "}
        with ease.
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-4 text-red-500">
        Why Deluxe Food?
      </h2>
      <ul className="list-disc list-inside text-lg space-y-3">
        <li>
          <strong>Wide Restaurant Selection:</strong> Browse an ever-growing
          list of restaurants from your neighborhood and beyond — from street
          food to fine dining.
        </li>
        <li>
          <strong>Seamless Ordering Experience:</strong> Our intuitive app makes
          it quick and easy to place your order, track your food, and enjoy
          every bite — no stress, no hassle.
        </li>
        <li>
          <strong>Support Local Businesses:</strong> Deluxe Food empowers local
          restaurants to grow their reach and connect with more customers.
        </li>
        <li>
          <strong>Community First:</strong> We're more than just a food delivery
          app — we celebrate food culture, support local talent, and help
          communities thrive — one meal at a time.
        </li>
      </ul>

      <h2 className="text-2xl font-semibold mt-10 mb-4 text-red-500">
        Join the Deluxe Experience
      </h2>
      <p className="text-lg">
        Whether you're a food lover or a restaurant owner,{" "}
        <strong>Deluxe Food</strong> is built for you. Come for the flavors.
        Stay for the experience.
      </p>

      <p className="mt-4 text-lg">
        Let’s redefine the way we enjoy food — <em>together</em>.
      </p>

      <button
        onClick={() => navigate(-1)}
        className="  text-xl rounded-lg text-white mt-10 px-20 bg-red-500 "
      >
        Back
      </button>
    </div>
  );
}

export default AboutUs;
