import axios from "axios";
import React, { useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import BeatLoader from "react-spinners/BeatLoader";

import { API_BASE_URL } from "../../../utils/constants";

function ResetPassword() {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const token = searchParams.get("token");
  console.log("TOKEN", token);

  const [form, setForm] = useState({
    password: "",
  });
  const [pass, setPass] = useState({
    confirmPassword: "",
  });
  const [error, setError] = useState({
    passwordErr: "",
    confirmPasswordErr: "",
  });
  const [loginErr, setLoginErr] = useState({
    invalidCred: "",
  });

  const [loading, setLoading] = useState(false);

  const handleForm = (e) => {
    const { name, value } = e.target;

    if (name === "password") {
      setForm((prevState) => ({
        ...prevState,
        [name]: value,
      }));
    } else if (name === "confirmPassword") {
      setPass((prevState) => ({
        ...prevState,
        [name]: value,
      }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    if (!form.password) {
      setLoading(false);
      setError((prev) => ({ ...prev, passwordErr: "Password is required" }));
      return;
    } else {
      setError((prev) => ({ ...prev, passwordErr: "" }));
    }

    if (!pass.confirmPassword) {
      setLoading(false);
      setError((prev) => ({
        ...prev,
        confirmPasswordErr: "Confirm Password is required",
      }));
      return;
    } else {
      setError((prev) => ({ ...prev, confirmPasswordErr: "" }));
    }

    if (form.password !== pass.confirmPassword) {
      setLoginErr((prev) => ({
        ...prev,
        invalidCred: "Passwords don't match",
      }));
      setLoading(false);
      return;
    } else {
      setLoginErr((prev) => ({
        ...prev,
        invalidCred: "",
      }));
    }

    if (token && form.password) {
      axios
        .post(
          `${API_BASE_URL}/deluxefood/update-password-user?token=${token}`,
          {
            newPassword: form.password,
          }
        )
        .then((res) => {
          console.log("Success:", res);
          setLoading(false);
          navigate("/auth/login");
        })
        .catch((err) => {
          console.log("Error:", err.response?.data?.message);
          setLoading(false);
          setLoginErr((prev) => ({
            ...prev,
            invalidCred: err.response?.data?.message || "An error occurred",
          }));
        });
    }
  };

  return (
    <div className="text-xl">
      <h1 className="font-bold mb-8">Reset Password</h1>

      <form
        onSubmit={handleSubmit}
        className="flex flex-col self-center text-base items-center"
      >
        {loginErr.invalidCred && (
          <span className="bg-red-500 text-white text-md mt-[-5px] rounded-lg text-center p-2 mb-4">
            {loginErr.invalidCred}
          </span>
        )}
        New Password
        <input
          type="password"
          placeholder="Password"
          className="border-1 border-red-200 w-60 sm:w-70 md:w-80 lg:w-100 mb-5 p-2 rounded-lg"
          onChange={handleForm}
          value={form.password}
          name="password"
        />
        <span className="text-red-500 text-sm mt-[-5px] mb-4">
          {error.passwordErr}
        </span>
        Confirm Password
        <input
          type="password"
          placeholder="Confirm Password"
          className="border-1 border-red-200 w-60 sm:w-70 md:w-80 lg:w-100 mb-5 p-2 rounded-lg"
          onChange={handleForm}
          value={pass.confirmPassword}
          name="confirmPassword"
        />
        <span className="text-red-500 text-sm mt-[-5px] mb-4">
          {error.confirmPasswordErr}
        </span>
        <button className="w-60 sm:w-70 md:w-80 lg:w-100 p-2 bg-gradient-to-r from-red-700 via-red-500 to-red-700 my-5 text-white rounded-lg">
          {loading ? <BeatLoader /> : "Update Password"}
        </button>
      </form>
    </div>
  );
}

export default ResetPassword;
