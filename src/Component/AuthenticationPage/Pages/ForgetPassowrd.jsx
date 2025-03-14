import axios from "axios";
import React, { useState } from "react";
import { FcGoogle } from "react-icons/fc";
import { useNavigate } from "react-router-dom";
import BeatLoader from "react-spinners/BeatLoader";

function ForgetPassowrd() {




  const navigate = useNavigate();
  return (
    <div>
      <h1 className="font-bold text-xl text-center ">Forgot Password?</h1>
      <p className="text-center mt-3 mb-8">
        We will send reset instruction to you email.
      </p>
      <form className="flex  flex-col self-center text-base ">
        Email
        <input
          type="text"
          placeholder="Email"
          className="border-1 w-100 border-red-200 p-2 rounded-lg"
        />
        <button
          onClick={() => navigate("/auth/reset-password")}
          className="w-100 p-2 bg-gradient-to-r from-red-700 via-red-500 to-red-700 text-white my-5 rounded-lg"
        >
          Varify Email
        </button>
      </form>
    </div>
  );
}

export default ForgetPassowrd;
