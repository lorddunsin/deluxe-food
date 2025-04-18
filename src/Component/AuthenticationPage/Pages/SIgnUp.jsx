import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import axios from "axios";
import BeatLoader from "react-spinners/BeatLoader";

function SignUp() {
  const navigate = useNavigate();
  const [checked, setChecked] = useState(false);
  const [loading, setLoading] = useState(false);
  const [loginErr, setLoginErr] = useState({
    invalidCred: "",
  });
  const [form, setForm] = useState({
    username: "",
    email: "",
    password: "",
    phone: "",
  });
  const [error, setError] = useState({
    usernameErr: "",
    emailErr: "",
    passwordErr: "",
    phoneErr: "",
    termsChecked: "",
  });

  const phoneRegex = /^(?:\+234|0|\+)[0-9]{10,14}$/;
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  const handleForm = (e) => {
    setForm((prevState) => ({ ...prevState, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoginErr({ invalidCred: "" });
    setLoading(true);

    // Reset errors
    setError({
      usernameErr: "",
      emailErr: "",
      passwordErr: "",
      phoneErr: "",
      termsChecked: "",
    });

    let hasError = false;

    // Username
    if (!form.username) {
      setError((prev) => ({ ...prev, usernameErr: "Username is required" }));
      hasError = true;
    }

    // Email
    if (!form.email) {
      setError((prev) => ({ ...prev, emailErr: "Email is required" }));
      hasError = true;
    } else if (!emailRegex.test(form.email)) {
      setError((prev) => ({ ...prev, emailErr: "Enter a valid email" }));
      hasError = true;
    }

    // Phone
    if (!form.phone) {
      setError((prev) => ({ ...prev, phoneErr: "Phone is required" }));
      hasError = true;
    } else if (!phoneRegex.test(form.phone)) {
      setError((prev) => ({
        ...prev,
        phoneErr: "Enter a valid phone number",
      }));
      hasError = true;
    }

    // Password
    if (!form.password) {
      setError((prev) => ({ ...prev, passwordErr: "Password is required" }));
      hasError = true;
    } else if (form.password.length < 8) {
      setError((prev) => ({
        ...prev,
        passwordErr: "Password must be at least 8 characters",
      }));
      hasError = true;
    }

    // Terms
    if (!checked) {
      setError((prev) => ({
        ...prev,
        termsChecked: "Accept our terms and condition",
      }));
      hasError = true;
    }

    if (hasError) {
      setLoading(false);
      return;
    }

    axios
      .post("https://deluxefood.onrender.com/api/deluxefood/register-user", form)
      .then((res) => {
        console.log("Form submitted successfully:", res);
        setLoading(false);
        navigate("/auth/login");
      })
      .catch((err) => {
        setLoading(false);
        console.error("Registration failed:", err);
        setLoginErr((prev) => ({
          ...prev,
          invalidCred: err.response?.data?.message || "Something went wrong",
        }));
      });
  };

  return (
    <div className="text-xl mt-5">
      <h1 className="font-bold mb-4">Create an account</h1>

      <form className="flex flex-col text-base" onSubmit={handleSubmit}>
        {/* Google Sign-in (future) */}
        <button
          type="button"
          className="w-60 sm:w-70 md:w-80 lg:w-100 p-2 bg-white border my-5 rounded-lg text-blue-700 flex items-center justify-center font-bold"
        >
          <FcGoogle size={25} className="mr-3" />
          Sign in with Google
        </button>

        {loginErr.invalidCred && (
          <span className="bg-red-500 text-white text-md rounded-lg text-center p-2 mb-4">
            {loginErr.invalidCred}
          </span>
        )}

        {/* Username */}
        Username
        <input
          type="text"
          placeholder="Username"
          onChange={handleForm}
          className="border border-red-200 w-60 sm:w-70 md:w-80 lg:w-100 p-2 mb-2 rounded-lg"
          name="username"
          value={form.username}
        />
        <span className="text-red-500 text-sm mb-2">{error.usernameErr}</span>

        {/* Email */}
        Email
        <input
          type="text"
          onChange={handleForm}
          placeholder="Email"
          className="border border-red-200 w-60 sm:w-70 md:w-80 lg:w-100 p-2 mb-2 rounded-lg"
          value={form.email}
          name="email"
        />
        <span className="text-red-500 text-sm mb-2">{error.emailErr}</span>

        {/* Phone */}
        Phone Number
        <input
          type="text"
          placeholder="Phone Number"
          onChange={handleForm}
          className="border border-red-200 w-60 sm:w-70 md:w-80 lg:w-100 p-2 mb-2 rounded-lg"
          value={form.phone}
          name="phone"
        />
        <span className="text-red-500 text-sm mb-2">{error.phoneErr}</span>

        {/* Password */}
        Password
        <input
          type="password"
          placeholder="Password"
          onChange={handleForm}
          className="border border-red-200 w-60 sm:w-70 md:w-80 lg:w-100 p-2 mb-2 rounded-lg"
          value={form.password}
          name="password"
        />
        <span className="text-red-500 text-sm mb-2">{error.passwordErr}</span>

        {/* Terms */}
        <div className="flex items-center mt-2 mb-2">
          <input
            className="mr-2 cursor-pointer"
            type="checkbox"
            checked={checked}
            onChange={() => setChecked(!checked)}
          />
          <p className="text-sm">I agree with the</p>
          <span className="text-red-500 underline text-sm ml-2 cursor-pointer">
            Terms & Condition
          </span>
        </div>
        <span className="text-red-500 text-sm mb-2">{error.termsChecked}</span>

        {/* Submit */}
        <button
          type="submit"
          className="w-60 sm:w-70 md:w-80 lg:w-100 p-2 bg-gradient-to-r from-red-700 via-red-500 to-red-700 my-3 rounded-lg text-white hover:cursor-pointer"
        >
          {loading ? <BeatLoader color="#fff" size={10} /> : "Register"}
        </button>
      </form>

      {/* Login Link */}
      <div className="flex gap-3 ml-9 text-sm text-center items-center mt-4">
        <p>Already have an account?</p>
        <span
          className="underline text-red-500 cursor-pointer"
          onClick={() => navigate("/auth/login")}
        >
          Click here
        </span>
      </div>
    </div>
  );
}

export default SignUp;
