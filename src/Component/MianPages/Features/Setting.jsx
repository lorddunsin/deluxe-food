import React from "react";
import { useNavigate } from "react-router-dom";
import { IoMdArrowRoundBack } from "react-icons/io";
import SetnSidebar from "./SetnSidebar";
import { Outlet } from "react-router-dom";

function Setting() {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col md:h-screen">
      {/* Top Navbar */}
      <nav className="px-5 md:px-10 py-6 font-bold flex justify-between items-center text-white md:w-full bg-red-700">
        <h1 className="text-3xl">DeluxeFood</h1>

        <div className="inline sm:flex gap-5 md:gap-20 lg:gap-60">
          <button
            onClick={() => {
              navigate("/auth/login");
              localStorage.removeItem("isLoggedIn");
            }}
            className="text-white underline px-2 hover:cursor-pointer rounded-lg"
          >
            Logout
          </button>
          <button
            onClick={() => navigate("/")}
            className="text-white px-2 hover:cursor-pointer rounded-2xl p-1 text-2xl font-bold hover:bg-red-500"
          >
            <IoMdArrowRoundBack />
          </button>
        </div>
      </nav>

      {/* Responsive Main Layout */}
      <section className="flex flex-col md:grid grid-cols-5 md:flex-grow md:h-full md:overflow-hidden">
        {/* Sidebar Section */}
        <div className="relative col-span-2 bg-[url(/fast6.jpg)] bg-center text-white min-h-[200px] md:min-h-full">
          <div className="absolute top-0 left-0 bg-black/60 h-full w-full z-0" />
          <div className="relative z-10 md:h-full md:overflow-auto p-4">
            <SetnSidebar />
          </div>
        </div>

        {/* Scrollable Content Area */}
        <div className="col-span-3 h-full items-center justify-items-center md:overflow-y-auto p-4 bg-white">
          <Outlet />
        </div>
      </section>
    </div>
  );
}

export default Setting;
