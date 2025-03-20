import axios from "axios";
import React, { useState } from "react";
import { FcGoogle } from "react-icons/fc";
// import { useNavigate } from "react-router-dom";
import BeatLoader from "react-spinners/BeatLoader";
import { useNavigate, useSearchParams, Navigate } from "react-router-dom";

function ResetPassword() {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const token = searchParams.get("token");
  console.log("TOKEN", token);

  if (!token) {
    return <Navigate to="/auth/login" />;

    const [form, setForm] = useState({
      token: "",
      password: "",
    });
    const [pass, setPass] = useState({
      confirmPassword: "",
    });
    const [error, setError] = useState({
      tokenErr: "",
      passwordErr: "",
      confirmPasswordErr: "",
    });
    const [loginErr, setLoginErr] = useState({
      invalidCred: "",
    });

    const [loading, setLoading] = useState(false);
    const handleForm = (e) => {
      setForm((prevState) => ({
        ...prevState,
        [e.target.name]: e.target.value,
      }));
    };
    setPass((prevState) => ({ ...prevState, [e.target.name]: e.target.value }));
  }
}
const handleSubmit = (e) => {
  e.preventDefault();
  setLoading(true);
  if (!form.password) {
    setLoading(false);
    setError((prev) => ({ ...prev, passwordErr: "Password is required" }));
  } else {
    setError((prev) => ({ ...prev, passwordErr: "" }));
  }

  if (!pass.password) {
    setLoading(false);
    setError((prev) => ({ ...prev, confirmPasswordErr: "Confirm Password" }));
  } else {
    setError((prev) => ({ ...prev, confirmPasswordErr: "" }));
  }

  if (form.token && form.password && pass.confirmPassword) {
    axios
      .post(
        "https://deluxefood.onrender.com/api/deluxefood/update-password-user",
        form
      )
      .then((res) => {
        console.log("success");
        localStorage.setItem("isLoggedIn", true);
        console.log("This is the response", res);
        //  navigate("/auth/login")
        setLoading(false);
      })
      .catch((err) => {
        console.log("fail");
        localStorage.removeItem("isLoggedIn");

        console.log(err.response.data.message);
        setLoading(false);
        setLoginErr((prev) => ({
          ...prev,
          invalidCred: `${err.response.data.message}`,
        }));
      });
  }

  return (
    <div className=" text-xl ">
      <h1 className="font-bold mb-8">Reset Password</h1>

      <form
        onSubmit={handleSubmit}
        className="flex  flex-col self-center text-base "
      >
        {loginErr.invalidCred && (
          <span className=" bg-red-500 text-white text-md mt-[-5px] rounded-lg text-center p-2 mb-4">
            {loginErr.invalidCred}
          </span>
        )}
        New Password
        <input
          type="text"
          placeholder="Password"
          className="border-1 border-red-200 w-100 mb-5 p-2 rounded-lg"
          onChange={handleForm}
          value={form.password}
          name="password"
        />
        <span className="text-red-500 text-sm mt-[-5px] mb-4">
          {error.passwordErr}
        </span>
        Confirm Password
        <input
          type="text"
          placeholder="Password"
          className="border-1 border-red-200 w-100 mb-5 p-2 rounded-lg"
          onChange={handleForm}
          value={pass.confirmPassword}
          name="confirmPassword"
        />
        <span className="text-red-500 text-sm mt-[-5px] mb-4">
          {error.confirmPasswordErr}
        </span>
        <button
          // onClick={() => navigate("/auth/login")}
          className="w-100 p-2 bg-gradient-to-r from-red-700 via-red-500 to-red-700 my-5 text-white rounded-lg"
        >
          {loading ? <BeatLoader /> : "Reset Password"}
        </button>
      </form>
    </div>
  );
};

export default ResetPassword;
