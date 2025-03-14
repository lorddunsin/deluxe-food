import React, { useState } from "react";

function ChangePassword() {
  const [error, setError] = useState();
  return (
    <div className=" text-xl  self-center item-center">
      <h1 className="font-bold mb-8">Change Password</h1>
      <form className="flex  flex-col self-center text-base ">
        New Password
        <input
          type="text"
          placeholder="Password"
          className="border-1 border-red-200 w-100 mb-5 p-2 rounded-lg"
        />
        Confirm Password
        <input
          type="text"
          placeholder="Password"
          className="border-1 border-red-200 w-100 mb-5 p-2 rounded-lg"
        />
        <button
          // onClick={() => navigate("/auth/login")}
          className="w-100 p-2 bg-gradient-to-r from-red-700 via-red-500 to-red-700 my-5 text-white rounded-lg"
        >
          Change Password
        </button>
      </form>
    </div>
  );
}

export default ChangePassword;
