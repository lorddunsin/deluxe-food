import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import axios from "axios";
import BeatLoader from "react-spinners/BeatLoader";

function SIgnUp() {
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
  console.log(form);
  const handleForm = (e) => {
    setForm((prevState) => ({ ...prevState, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.username) {
      setError((prev) => ({ ...prev, usernameErr: "Username is required" }));
    } else {
      setError((prev) => ({ ...prev, usernameErr: "" }));
    }
    if (!form.email) {
      setError((prev) => ({
        ...prev,
        emailErr: "Email is required",
      }));
    } else {
      if (!form.email.endsWith("@gmail.com")) {
        setError((prev) => ({
          ...prev,
          emailErr: "Email must include @gmail.com",
        }));
      } else {
        setError((prev) => ({
          ...prev,
          emailErr: "",
        }));
      }
    }
    if (!form.password) {
      setError((prev) => ({ ...prev, passwordErr: "Password is required" }));
    } else {
      setError((prev) => ({ ...prev, passwordErr: "" }));
    }
    if (!form.phone) {
      setError((prev) => ({ ...prev, phoneErr: "Phone is required" }));
    } else {
      setError((prev) => ({ ...prev, phoneErr: "" }));
    }
    if (!checked) {
      setError((prev) => ({
        ...prev,
        termsChecked: "Accept our terms and condition",
      }));
    } else {
      setError((prev) => ({
        ...prev,
        termsChecked: "",
      }));
    }
    if (form.username && form.email && form.phone && form.password && checked) {
      setLoading(true);
      axios
        .post(
          "https://deluxefood.onrender.com/api/deluxefood/register-user",
          form
        )
        .then((res) => {
          navigate("/");
          setLoading(false);
          console.log("Form was submitted succesfully");
          console.log("This is the response", res);
        })
        .catch((err) => {
          setLoading(false);
          console.log("This is the error message", err.response.data.message);
          console.log("Error submitting form");
          console.log(err);
           setLoginErr((prev) => ({
            ...prev,
            invalidCred: `${err.response.data.message}`,
          }));
        });
    }
    // onClick={() => navigate("/")}
  };
  return (
    <div className=" text-xl ">
      <h1 className="font-bold">Create an account</h1>
      <form className="flex  flex-col text-base  " onSubmit={handleSubmit}>
        <button className="w-100 p-2 bg-white border-1  my-5 rounded-lg text-blue-700 flex pl-8 fond-bold hover:cursor-pointer">
          <FcGoogle size={25} className="mr-5" />
          Sign in with Google
        </button>
         {loginErr.invalidCred && (
          <span className=" bg-red-500 text-white text-md mt-[-5px] rounded-lg text-center p-2 mb-4">
            {loginErr.invalidCred}
          </span>
        )}
        Username
        <input
          type="text"
          placeholder="Username"
          onChange={handleForm}
          className="border-1 border-red-200 w-100 p-2 mb-3 rounded-lg
          "
          name="username"
          value={form.username}
        />
        <span className="text-red-500 text-sm ">{error.usernameErr}</span>
        Email
        <input
          type="text"
          onChange={handleForm}
          placeholder="Email"
          className="border-1 border-red-200 w-100 p-2 mb-3 rounded-lg"
          value={form.email}
          name="email"
        />
        <span className="text-red-500 text-sm ">{error.emailErr}</span>
        Phone Number
        <input
          type="text"
          placeholder="Phone Number"
          onChange={handleForm}
          className="border-1 border-red-200 w-100 mb-3 p-2 rounded-lg"
          value={form.phone}
          name="phone"
        />
        <span className="text-red-500 text-sm ">{error.phoneErr}</span>
        Password
        <input
          type="text"
          placeholder="Password"
          onChange={handleForm}
          className="border-1 border-red-200 w-100 mb-3 p-2 rounded-lg"
          value={form.password}
          name="password"
        />
        <span className="text-red-500 text-sm ">{error.passwordErr}</span>
        <div className="flex content-center items-center ">
          <input
            className="mr-2 hover:cursor-pointer "
            type="checkbox"
            checked={checked}
            onClick={() => setChecked(!checked)}
          />{" "}
          <p className="text-sm">I agree with the</p>
          <span className="text-red-500  underline text-sm ml-2 hover:cursor-pointer">
            Terms & Condition
          </span>
          <span className="text-red-500 text-sm"> {error.termsChecked} </span>
        </div>
        <button className="w-100 p-2 bg-gradient-to-r from-red-700 via-red-500  to-red-700 my-3 rounded-lg text-white hover:cursor-pointer">
          {loading ? <BeatLoader /> : "Register"}
        </button>
      </form>
      <div className="flex gap-3 ml-9 text-sm text-center items-center">
        <p>Already have an account </p>
        <span
          className="underline text-red-500  hover:cursor-pointer "
          onClick={() => navigate("/auth/login")}
        >
          click here
        </span>
      </div>
    </div>
  );
}

export default SIgnUp;
