import React from "react";
import { useNavigate } from "react-router-dom";
import { IoSettingsOutline } from "react-icons/io5";

function Navbar({ onRestClick, onHowClick }) {
  const navigate = useNavigate();
  const isLoggedIn = localStorage.getItem("isLoggedIn");

  return (
    <nav className="px-6 md:px-10 lg:px-25 py-6 font-bold flex justify-between items-center text-white w-full bg-red-700 overflow-hidden">
      {/* Left Side: Logo */}
      <h1 className="text-2xl md:text-3xl">DeluxeFood</h1>

      {/* Navigation Links (Hidden on mobile) */}
      <div className="hidden md:flex items-center gap-6 lg:gap-10">
        <p className="hover:cursor-pointer" onClick={onRestClick}>
          Restaurants
        </p>
        <p className="hover:cursor-pointer" onClick={onHowClick}>
          How it Works
        </p>
        <p
          onClick={() => navigate("/about-us")}
          className="hover:cursor-pointer"
        >
          About
        </p>

        {!isLoggedIn && (
          <>
            <button
              onClick={() => navigate("/auth/login")}
              className="text-white underline px-2 hover:cursor-pointer rounded-lg"
            >
              Login
            </button>
            <button
              onClick={() => navigate("/auth/signup")}
              className="text-white bg-red-500 px-3 py-1 hover:cursor-pointer rounded-lg"
            >
              Sign Up
            </button>
          </>
        )}

        {isLoggedIn && (
          <button
            onClick={() => navigate("/")}
            className="text-white px-2 hover:cursor-pointer rounded-lg"
          >
            Dashboard
          </button>
        )}
      </div>

      {isLoggedIn && (
        <button
          onClick={() => navigate("/setting")}
          className="hover:cursor-pointer hover:bg-red-500 p-2 rounded-2xl text-2xl overflow-hidden"
        >
          <IoSettingsOutline />
        </button>
      )}
    </nav>
  );
}

export default Navbar;
