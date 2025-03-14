import React from "react";
import SIgnUp from "./Pages/SIgnUp";
import Login from "./Pages/Login";
import ForgetPassowrd from "./Pages/ForgetPassowrd";
import ResetPassword from "./Pages/ResetPassword";
// import { Route } from "react-router-dom";
import { Route, Routes } from "react-router-dom";

function Main() {
  return (
    <div
      className="flex flex-col ml-35
    "
    >
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="signup" element={<SIgnUp />} />
        <Route path="forgetpassword" element={<ForgetPassowrd />} />
        <Route path="reset" element={<ResetPassword />} />
      </Routes>
      {/* <SIgnUp /> */}
      {/* <Login /> */}

      {/* <ForgetPassowrd /> */}
      {/* <ResetPassword /> */}
    </div>
  );
}

export default Main;
