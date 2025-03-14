import React from "react";
import Sidebar from "./Sidebar";
import Main from "./Main";
import { Outlet } from "react-router-dom";

function Auth() {
  return (
    <section className="flex">
      <div className=" flex  w-1/2 items-center content-center justify-center bg-gradient-to-b from-red-500 to-red-900 h-154.5">
        <Sidebar />
      </div>
      <div className="flex w-1/2 self-center items-center h-154.5">
        {/* <Main /> */}
        <div className="flex flex-col ml-35">
          <Outlet />
        </div>
      </div>
    </section>
  );
}

export default Auth;
