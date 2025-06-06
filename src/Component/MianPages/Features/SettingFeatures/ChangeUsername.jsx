// import axios from "axios";
// import React, { useState } from "react";
// import BeatLoader from "react-spinners/BeatLoader";

// function ChangeUsername() {
//   const token=localStorage.getItem('loginToken')
//   const [form, setForm] = useState({
//     username: "",
//   });
//   const [user, setUser] = useState({
//     confirmUsername: "",
//   });
//   const [error, setError] = useState({
//     usernameErr: "",
//     confirmUsernameErr: "",
//   });
//   const [credErr, setCredErr] = useState({
//     invalidCred: "",
//   });

//   const [loading, setLoading] = useState(false);

//   const handleForm = (e) => {
//     const { name, value } = e.target;

//     if (name === "username") {
//       setForm((prevState) => ({
//         ...prevState,
//         [name]: value,
//       }));
//     } else if (name === "confirmUsername") {
//       setUser((prevState) => ({
//         ...prevState,
//         [name]: value,
//       }));
//     }
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     setLoading(true);

//     if (!form.username) {
//       setLoading(false);
//       setError((prev) => ({ ...prev, usernameErr: "Username is required" }));
//       return;
//     } else {
//       setError((prev) => ({ ...prev, usernameErr: "" }));
//     }

//     if (!user.confirmUsername) {
//       setLoading(false);
//       setError((prev) => ({
//         ...prev,
//         confirmUsernameErr: "Confirm Username is required",
//       }));
//       return;
//     } else {
//       setError((prev) => ({ ...prev, confirmUsernameErr: "" }));
//     }

//     if (form.username !== user.confirmUsername) {
//       setCredErr((prev) => ({
//         ...prev,
//         invalidCred: "Usernames don't match",
//       }));
//       setLoading(false);
//       return;
//     } else {
//       setCredErr((prev) => ({
//         ...prev,
//         invalidCred: "",
//       }));
//     }

//     axios
//       .put(
//         "https://deluxefood.onrender.com/api/deluxefood/change-username",
//         {
//           newUsername: form.username,
//         },
//         {
//           headers: {
//             Authorization: `Bearer ${token}`,
//           },
//         }
//       )
//       .then((res) => {
//         console.log("Success:", res);
//         setLoading(false);
//         // navigate("/auth/login"); ← Add useNavigate if you plan to use this
//       })
//       .catch((err) => {
//         console.log("Error:", err.response?.data?.message);
//         setLoading(false);
//         setCredErr((prev) => ({
//           ...prev,
//           invalidCred: err.response?.data?.message || "An error occurred",
//         }));
//       });
//   };

//   return (
//     <div className="text-xl self-center items-center mt-5">
//       <h1 className="font-bold mb-8 text-center">Change Username</h1>
//       <form
//         onSubmit={handleSubmit}
//         className="flex flex-col items-center text-base"
//       >
//         {credErr.invalidCred && (
//           <span className="bg-red-500 text-white text-md mt-[-5px] rounded-lg text-center p-2 mb-4">
//             {credErr.invalidCred}
//           </span>
//         )}

//         <div className="flex flex-col text-left w-60 sm:w-70 md:w-80 lg:w-100">
//           <label>New Username</label>
//           <input
//             type="text"
//             placeholder="Username"
//             className="border border-red-200 mb-2 p-2 rounded-lg"
//             onChange={handleForm}
//             value={form.username}
//             name="username"
//           />
//           <span className="text-red-500 text-sm mb-4">{error.usernameErr}</span>

//           <label>Confirm Username</label>
//           <input
//             type="text"
//             placeholder="Confirm Username"
//             className="border border-red-200 mb-2 p-2 rounded-lg"
//             onChange={handleForm}
//             value={user.confirmUsername}
//             name="confirmUsername"
//           />
//           <span className="text-red-500 text-sm mb-4">
//             {error.confirmUsernameErr}
//           </span>
//         </div>

//         <button
//           type="submit"
//           className="w-60 sm:w-70 md:w-80 lg:w-100 p-2 bg-gradient-to-r from-red-700 via-red-500 to-red-700 my-5 text-white rounded-lg"
//         >
//           {loading ? <BeatLoader color="#fff" size={10} /> : "Change Username"}
//         </button>
//       </form>
//     </div>
//   );
// }

// export default ChangeUsername;

import axios from "axios";
import React, { useState } from "react";
import BeatLoader from "react-spinners/BeatLoader";
import { useNavigate } from "react-router-dom";

function ChangeUsername() {
  const token = localStorage.getItem("loginToken");
  const navigate = useNavigate();

  const [form, setForm] = useState({
    username: "",
    confirmUsername: "",
  });

  const [error, setError] = useState({
    usernameErr: "",
    confirmUsernameErr: "",
  });

  const [credErr, setCredErr] = useState("");
  const [loading, setLoading] = useState(false);

  const handleForm = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setCredErr("");
    setError({ usernameErr: "", confirmUsernameErr: "" });

    let hasError = false;

    if (!form.username) {
      setError((prev) => ({ ...prev, usernameErr: "Username is required" }));
      hasError = true;
    }

    if (!form.confirmUsername) {
      setError((prev) => ({
        ...prev,
        confirmUsernameErr: "Confirm Username is required",
      }));
      hasError = true;
    }

    if (
      form.username &&
      form.confirmUsername &&
      form.username !== form.confirmUsername
    ) {
      setCredErr("Usernames don't match");
      hasError = true;
    }

    if (!token) {
      setCredErr("You must be logged in to change your username.");
      setLoading(false);
      return;
    }

    if (hasError) {
      setLoading(false);
      return;
    }

    try {
      const res = await axios.put(
        "https://deluxefood.onrender.com/api/deluxefood/change-username",
        { newUsername: form.username },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      console.log("Success:", res.data);
      alert("Username changed successfully!");
      setLoading(false);
      navigate("/");
      setForm({
        username: "",
        confirmUsername: "",
      }); // or navigate to profile page
    } catch (err) {
      console.log("Error:", err.response?.data?.message);
      setLoading(false);
      setCredErr(err.response?.data?.message || "An error occurred");
    }
  };

  return (
    <div className="text-xl self-center items-center mt-5">
      <h1 className="font-bold mb-8 text-center">Change Username</h1>
      <form
        onSubmit={handleSubmit}
        className="flex flex-col items-center text-base"
      >
        {credErr && (
          <span className="bg-red-500 text-white text-md mt-[-5px] rounded-lg text-center p-2 mb-4">
            {credErr}
          </span>
        )}

        <div className="flex flex-col text-left w-60 sm:w-70 md:w-80 lg:w-100">
          <label>New Username</label>
          <input
            type="text"
            placeholder="Username"
            className="border border-red-200 mb-2 p-2 rounded-lg"
            onChange={handleForm}
            value={form.username}
            name="username"
          />
          <span className="text-red-500 text-sm mb-4">{error.usernameErr}</span>

          <label>Confirm Username</label>
          <input
            type="text"
            placeholder="Confirm Username"
            className="border border-red-200 mb-2 p-2 rounded-lg"
            onChange={handleForm}
            value={form.confirmUsername}
            name="confirmUsername"
          />
          <span className="text-red-500 text-sm mb-4">
            {error.confirmUsernameErr}
          </span>
        </div>

        <button
          type="submit"
          className="w-60 sm:w-70 md:w-80 lg:w-100 p-2 bg-gradient-to-r from-red-700 via-red-500 to-red-700 my-5 text-white rounded-lg"
        >
          {loading ? <BeatLoader color="#fff" size={10} /> : "Change Username"}
        </button>
      </form>
    </div>
  );
}

export default ChangeUsername;
