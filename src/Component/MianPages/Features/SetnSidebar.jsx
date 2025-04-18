import React from "react";
import { FaUserCircle } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

function SetnSidebar() {
  const navigator = useNavigate();
  return (
    <>
      <div className=" text-xl flex flex-col mb-10 p-10 items-center  gap-2">
        <FaUserCircle size={50} />
        <p className="text-2xl text-center font-bold z-[10]">
          Profile Username
        </p>
      </div>
      <section className=" text-base md:text-lg lg:text-xl flex-col px-5 text-center  flex gap-5 mb-5 pb-5 sm:grid grid-cols-4 md:flex gap-7">
        <div
          onClick={() => navigator("/setting/history")}
          className="hover:bg-red-600 rounded-lg hover:cursor-pointer z-[10]  items-center"
        >
          History
        </div>

        <div
          onClick={() => navigator("/setting/change-username")}
          className="hover:bg-red-600 rounded-lg hover:cursor-pointer z-[10]"
        >
          Change Username
        </div>
        <div
          onClick={() => navigator("/setting/change-password")}
          className="hover:bg-red-600 rounded-lg hover:cursor-pointer z-[10]"
        >
          Change Password
        </div>
        <div
          onClick={() => navigator("/setting/customer-care")}
          className="hover:bg-red-600 rounded-lg hover:cursor-pointer z-[10]"
        >
          Customer Care
        </div>
        <div
          onClick={() => navigator("/setting/faq")}
          className="hover:bg-red-600 rounded-lg hover:cursor-pointer z-[10]"
        >
          FAQ
        </div>
      </section>
    </>
  );
}

export default SetnSidebar;
