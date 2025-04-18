// import axios from "axios";
// import React, { useState } from "react";
// import { FcGoogle } from "react-icons/fc";
// import { useNavigate } from "react-router-dom";
// import BeatLoader from "react-spinners/BeatLoader";
// // import google from "../assets/google-logo.jpg";

// function Login() {
//   const [form, setForm] = useState({
//     email: "",
//     password: "",
//   });
//   const [error, setError] = useState({
//     passwordErr: "",
//     emailErr: "",
//   });
//   const [loginErr, setLoginErr] = useState({
//     invalidCred: "",
//   });

//   const [loading, setLoading] = useState(false);
//   const handleForm = (e) => {
//     setForm((prevState) => ({ ...prevState, [e.target.name]: e.target.value }));
//   };

//   const navigate = useNavigate();
//   const handleSubmit = (e) => {
//     e.preventDefault();
//     setLoading(true);
//     if (!form.email) {
//       setLoading(false);
//       setError((prev) => ({ ...prev, emailErr: "Email is required" }));
//     } else {
//       setError((prev) => ({ ...prev, emailErr: "" }));
//     }

//     if (!form.password) {
//       setLoading(false);
//       setError((prev) => ({ ...prev, passwordErr: "Password is required" }));
//     } else {
//       setError((prev) => ({ ...prev, passwordErr: "" }));
//     }

//     if (form.email && form.password) {
//       axios
//         .post("https://deluxefood.onrender.com/api/deluxefood/login-user", form)
//         .then((res) => {
//           console.log("success");
//           localStorage.setItem("isLoggedIn", true);
//           console.log("This is the response", res);
//           navigate("/");
//           setLoading(false);
//         })
//         .catch((err) => {
//           console.log("fail");
//           localStorage.removeItem("isLoggedIn");

//           console.log(err.response.data.message);
//           setLoading(false);
//           setLoginErr((prev) => ({
//             ...prev,
//             invalidCred: `${err.response.data.message}`,
//           }));
//         });
//     }
//   };

//   return (
//     <div className=" flex flex-col text-base self-center items-center justify-center self-center">
//       <form onSubmit={handleSubmit} className="flex  flex-col  ">
//         <button className="w-60 p-2 bg-white border-1 hover:cursor-pointer my-5 rounded-lg text-blue-700 flex pl-8 fond-bold">
//           <FcGoogle size={25} className="mr-5" />
//           Sign in with Google
//         </button>
//         {loginErr.invalidCred && (
//           <span className=" bg-red-500 text-white text-md mt-[-5px] rounded-lg text-center p-2 mb-4">
//             {loginErr.invalidCred}
//           </span>
//         )}
//         Email
//         <input
//           type="text"
//           placeholder="Enter your email"
//           className="border-1 w-60 mb-5 border-red-200  p-2 rounded-lg"
//           onChange={handleForm}
//           value={form.email}
//           name="email"
//         />
//         <span className="text-red-500 text-sm mt-[-5px] mb-4">
//           {error.emailErr}
//         </span>
//         Password
//         <input
//           type="text"
//           placeholder="Password"
//           className="border-1 w-60 mb-5 border-red-200 p-2 rounded-lg"
//           onChange={handleForm}
//           name="password"
//           value={form.password}
//         />
//         <span className="text-red-500 text-sm mt-[-5px] mb-4">
//           {error.passwordErr}
//         </span>
//         <div className="flex content-center items-center  ">
//           <input className="mr-2 hover:cursor-pointer " type="checkbox" />
//           <p className="text-sm"> Remember me</p>
//           <p
//             className="underline text-right text-sm text-red-500 hover:cursor-pointer ml-40"
//             onClick={() => navigate("/auth/forget-password")}
//           >
//             Forget Password
//           </p>
//         </div>
//         <button
//           // onClick={() => navigate("/")}
//           className="w-60 p-2 hover:cursor-pointer bg-gradient-to-r from-red-700 via-red-500 to-red-700 my-5 rounded-lg text-white"
//         >
//           {loading ? <BeatLoader /> : "Login"}
//         </button>
//       </form>
//       <div className="flex gap-3  text-sm items-center ">
//         <p>Don't have an account?</p>
//         <span
//           className="underline text-red-500 hover:cursor-pointer"
//           onClick={() => navigate("/auth/signup")}
//         >
//           Get one here
//         </span>
//       </div>
//     </div>
//   );
// }

// export default Login;

// // "https://deluxefood.onrender.com/api/deluxefood/login-user"

import axios from "axios";
import React, { useState } from "react";
import { FcGoogle } from "react-icons/fc";
import { useNavigate } from "react-router-dom";
import BeatLoader from "react-spinners/BeatLoader";

function Login() {
  const [form, setForm] = useState({
    email: "",
    password: "",
  });
  const [error, setError] = useState({
    passwordErr: "",
    emailErr: "",
  });
  const [loginErr, setLoginErr] = useState({
    invalidCred: "",
  });

  const [loading, setLoading] = useState(false);
  const handleForm = (e) => {
    setForm((prevState) => ({ ...prevState, [e.target.name]: e.target.value }));
  };

  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    if (!form.email) {
      setLoading(false);
      setError((prev) => ({ ...prev, emailErr: "Email is required" }));
    } else {
      setError((prev) => ({ ...prev, emailErr: "" }));
    }

    if (!form.password) {
      setLoading(false);
      setError((prev) => ({ ...prev, passwordErr: "Password is required" }));
    } else {
      setError((prev) => ({ ...prev, passwordErr: "" }));
    }

    if (form.email && form.password) {
      axios
        .post("https://deluxefood.onrender.com/api/deluxefood/login-user", form)
        .then((res) => {
          console.log("success");
          localStorage.setItem("isLoggedIn", true);
          navigate("/");
          setLoading(false);
        })
        .catch((err) => {
          localStorage.removeItem("isLoggedIn");
          setLoading(false);
          setLoginErr((prev) => ({
            ...prev,
            invalidCred: `${err.response.data.message}`,
          }));
        });
    }
  };

  return (
    <div className="flex items-center justify-center mt-5">
      <div className="flex flex-col items-center justify-center">
        <form onSubmit={handleSubmit} className="flex flex-col items-center">
          <button className="w-60 sm:w-70 md:w-80 lg:w-100 p-2  border hover:cursor-pointer my-5 rounded-lg text-blue-700 flex pl-8 font-bold">
            <FcGoogle size={25} className="mr-5" />
            Sign in with Google
          </button>

          {loginErr.invalidCred && (
            <span className="bg-red-500 text-white text-md rounded-lg text-center p-2 mb-4">
              {loginErr.invalidCred}
            </span>
          )}

          <label className="self-start mb-1">Email</label>
          <input
            type="text"
            placeholder="Enter your email"
            className="border w-60 sm:w-70 md:w-80 lg:w-100 mb-1 border-red-200 p-2 rounded-lg"
            onChange={handleForm}
            value={form.email}
            name="email"
          />
          <span className="text-red-500 text-sm mb-3">{error.emailErr}</span>

          <label className="self-start mb-1">Password</label>
          <input
            type="password"
            placeholder="Password"
            className="border w-60 sm:w-70 md:w-80 lg:w-100 mb-1 border-red-200 p-2 rounded-lg"
            onChange={handleForm}
            name="password"
            value={form.password}
          />
          <span className="text-red-500 text-sm mb-3">{error.passwordErr}</span>

          <div className="flex items-center justify-between w-60 mb-5">
            <div className="flex items-center">
              <input className="mr-2" type="checkbox" />
              <p className="text-sm">Remember me</p>
            </div>
            <p
              className="underline text-sm text-red-500 hover:cursor-pointer"
              onClick={() => navigate("/auth/forget-password")}
            >
              Forgot Password
            </p>
          </div>

          <button className="w-60 sm:w-70 md:w-80 lg:w-100 p-2 bg-gradient-to-r from-red-700 via-red-500 to-red-700 rounded-lg text-white">
            {loading ? <BeatLoader color="#fff" size={10} /> : "Login"}
          </button>
        </form>

        <div className="flex gap-2 text-sm mt-4">
          <p>Don't have an account?</p>
          <span
            className="underline text-red-500 hover:cursor-pointer"
            onClick={() => navigate("/auth/signup")}
          >
            Get one here
          </span>
        </div>
      </div>
    </div>
  );
}

export default Login;
