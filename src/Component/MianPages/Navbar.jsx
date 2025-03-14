import React from "react";
import { useNavigate } from "react-router-dom";
import { IoSettingsOutline } from "react-icons/io5";

function Navbar(props) {
  const navigate = useNavigate();
  const isLoggedIn = localStorage.getItem("isLoggedIn");

  const changeState = (e) => {
    e.preventDefault();
    localStorage.setItem("isLoggedIn", false);
  };
  // const isLoggedIn = false;
  return (
    <nav className="px-25 py-9 font-bold flex justify-center items-center content-center justify-items-center  text-white w-full bg-red-700">
      <div className="flex gap-60">
        <h1 className="text-3xl">DeluxeFood</h1>
        <div className="flex items-center gap-20">
          <p>Restaurants</p>
          <p>How it Works</p>
          <p>About</p>
          {/* <p
            className="text-red-200 underline hover:cursor-pointer"
            onClick={() => navigate("/auth/login")}
          >
            Login
          </p> */}

          {!isLoggedIn && (
            <>
              <button
                onClick={() => navigate("/auth/login")}
                className="flex self-center text-white underline px-2 hover:cursor-pointer rounded-lg content-center"
              >
                Login
              </button>
              <button
                onClick={() => navigate("/auth/signup")}
                className="flex self-center text-white bg-red-500 px-2 hover:cursor-pointer rounded-lg content-center"
              >
                Sign Up
              </button>
            </>
          )}
          {isLoggedIn && (
            <button
              onClick={() => navigate("/")}
              className="flex self-center text-white  px-2 hover:cursor-pointer rounded-lg content-center"
            >
              Dashboard
            </button>
          )}
          {isLoggedIn && (
            <button
              onClick={() => {
                changeState;
                navigate("/setting");
              }}
              className=" hover:cursor-pointer hover:bg-red-500 p-1 rounded-2xl font-bold text-2xl "
            >
              <IoSettingsOutline />
            </button>
          )}
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
