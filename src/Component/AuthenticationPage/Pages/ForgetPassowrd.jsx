import axios from "axios";
import React, { useState } from "react";
import { FcGoogle } from "react-icons/fc";
import { useNavigate } from "react-router-dom";
import BeatLoader from "react-spinners/BeatLoader";

function ForgetPassowrd() {
  const [form, setForm] = useState({
    email: "",
  });
  const [error, setError] = useState({
    emailErr: "",
  });
  const [loginErr, setLoginErr] = useState({
    invalidEmail: "",
  });

  const [loading, setLoading] = useState(false);

  const handleForm = (e) => {
    setForm((prevState) => ({ ...prevState, [e.target.name]: e.target.value }));
  };

  const navigate = useNavigate();
  const handleSubmit = (e) => {
    setLoading(true);
    e.preventDefault();
    if (!form.email) {
      setLoading(false);
      setError((prev) => ({ ...prev, emailErr: "Email is required" }));
    } else {
      setError((prev) => ({ ...prev, emailErr: "" }));
    }

    if (form.email) {
      axios
        .post("https://deluxefood.onrender.com/api/deluxefood/reset-user", form)
        .then((res) => {
          console.log("success");
          console.log("This is the response", res);
          navigate("/auth/email-note");
          setLoading(false);
        })
        .catch((err) => {
          console.log("fail");
          console.log(err.response.data.message);
          setLoading(false);
          setLoginErr((prev) => ({
            ...prev,
            invalidEmail: `${err.response.data.message}`,
          }));
        });
    }
  };

  return (
    <div>
      <h1 className="font-bold text-xl text-center ">Forgot Password?</h1>
      <p className="text-center mt-3 mb-8">
        We will send reset instruction to you email.
      </p>
      <form
        className="flex  flex-col self-center text-base "
        onSubmit={handleSubmit}
      >
        {loginErr.invalidEmail && (
          <span className=" bg-red-500 text-white text-md mt-[-5px] rounded-lg text-center p-2 mb-4">
            {loginErr.invalidEmail}
          </span>
        )}
        Email
        <input
          type="text"
          placeholder="Email"
          className="border-1 w-100 border-red-200 p-2 rounded-lg mt-2"
          onChange={handleForm}
          value={form.email}
          name="email"
        />
        <span className="text-red-500 text-sm mt-2 mb-4">{error.emailErr}</span>
        <button className="w-100 p-2 bg-gradient-to-r from-red-700 via-red-500 to-red-700 text-white my-5 rounded-lg">
          {loading ? <BeatLoader /> : "Varify Email"}
        </button>
      </form>
    </div>
  );
}

export default ForgetPassowrd;
