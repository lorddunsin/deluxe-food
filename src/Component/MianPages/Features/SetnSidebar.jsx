import React from "react";
import { FaUserCircle } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

function SetnSidebar() {
  const navigator = useNavigate();
  return (
    <>
      <div className=" text-xl flex flex-col mb-10 p-10 items-center  gap-2">
        <FaUserCircle size={50} />
        <p className="text-2xl font-bold z-[10]">Profile Username</p>
      </div>
      <section className=" text-xl flex-col  flex gap-5 mb-5">
        <div
          onClick={() => navigator("/setting/history")}
          className="hover:bg-red-600 px-5 rounded-lg hover:cursor-pointer z-[10]"
        >
          History
        </div>
        <div
          onClick={() => navigator("/setting/about-us")}
          className="hover:bg-red-600 px-5 rounded-lg hover:cursor-pointer z-[10]"
        >
          About us
        </div>
        <div
          onClick={() => navigator("/setting/change-username")}
          className="hover:bg-red-600 px-5 rounded-lg hover:cursor-pointer z-[10]"
        >
          Change Username
        </div>
        <div
          onClick={() => navigator("/setting/change-password")}
          className="hover:bg-red-600 px-5 rounded-lg hover:cursor-pointer z-[10]"
        >
          Change Password
        </div>
        <div
          onClick={() => navigator("/setting/customer-care")}
          className="hover:bg-red-600 px-5 rounded-lg hover:cursor-pointer z-[10]"
        >
          Customer Care
        </div>
        <div
          onClick={() => navigator("/setting/faq")}
          className="hover:bg-red-600 px-5 rounded-lg hover:cursor-pointer z-[10]"
        >
          FAQ
        </div>
        <div
          onClick={() => navigator("/setting/privacy")}
          className="hover:bg-red-600 px-5 rounded-lg hover:cursor-pointer z-[10]"
        >
          privacy
        </div>
      </section>
    </>
  );
}

export default SetnSidebar;
