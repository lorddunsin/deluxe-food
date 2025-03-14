import React from "react";
import { useNavigate } from "react-router-dom";
import { IoMdArrowRoundBack } from "react-icons/io";
import SetnSidebar from "./SetnSidebar";
import { Outlet } from "react-router-dom";

// import Sidebar from "../../AuthenticationPage/Sidebar";

function Setting() {
  const navigate = useNavigate();
  return (
    <>
      <nav className="px-25 py-9 font-bold flex justify-between items-center content-center justify-items-center  text-white w-full bg-red-700">
        <h1 className="text-3xl">DeluxeFood</h1>

        <div className="flex justify-between gap-30">
          <button
            onClick={() => navigate("/auth/login")}
            className="flex self-center text-white underline px-2 hover:cursor-pointer rounded-lg content-center"
          >
            Logout
          </button>
          <button
            onClick={() => navigate("/")}
            className="flex self-center text-white px-2 hover:cursor-pointer rounded-2xl p-1 text-2xl  font-bold hover:bg-red-500 content-center"
          >
            <IoMdArrowRoundBack />
          </button>
        </div>
      </nav>
      <section className="grid grid-cols-5 items-center ">
        <div className="bg-[url(/fast6.jpg)] bg-center relative items-center justify-items-center col-span-2 text-white">
          <div className="absolute top-0 left-0 bg-black/60 h-full w-full "></div>
          <SetnSidebar />
        </div>
        <div className="col-span-3 items-center justify-items-center">
          <Outlet />
        </div>
      </section>
    </>
  );
}

export default Setting;
