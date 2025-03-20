import React from "react";
import { useNavigate } from "react-router-dom";

function EmailNotification() {
  const navigate = useNavigate();
  return (
    <div className="text-center pr-30">
      <h1 className="font-bold text-xl mb-5">
        A link has been sent to your email click on it to verify
      </h1>
      <p>Didn't get a link</p>
      <button
        className="w-100 p-2 bg-gradient-to-r from-red-700 via-red-500 to-red-700 text-white my-5 rounded-lg"
        onClick={() => navigate(-1)}
      >
        {" "}
        Click here
      </button>
    </div>
  );
}

export default EmailNotification;
