import axios from "axios";
import React, { useState } from "react";
import BeatLoader from "react-spinners/BeatLoader";

function ChangePassword() {
  const [form, setForm] = useState({
    oldPassword: "",
    newPassword: "",
    confirmPassword: "",
  });

  const [error, setError] = useState({
    oldPasswordErr: "",
    newPasswordErr: "",
    confirmPasswordErr: "",
  });

  const [credErr, setCredErr] = useState({
    invalidCred: "",
  });

  const [loading, setLoading] = useState(false);

  const handleForm = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    // Clear previous errors
    setError({
      oldPasswordErr: "",
      newPasswordErr: "",
      confirmPasswordErr: "",
    });
    setCredErr({ invalidCred: "" });

    // Validate inputs
    let hasError = false;

    if (!form.oldPassword) {
      setError((prev) => ({
        ...prev,
        oldPasswordErr: "Old password is required",
      }));
      hasError = true;
    }

    if (!form.newPassword) {
      setError((prev) => ({
        ...prev,
        newPasswordErr: "New password is required",
      }));
      hasError = true;
    }

    if (!form.confirmPassword) {
      setError((prev) => ({
        ...prev,
        confirmPasswordErr: "Confirm password is required",
      }));
      hasError = true;
    }

    if (
      form.newPassword &&
      form.confirmPassword &&
      form.newPassword !== form.confirmPassword
    ) {
      setCredErr({ invalidCred: "Passwords do not match" });
      hasError = true;
    }

    if (form.newPassword.length < 8) {
      setError((prev) => ({
        ...prev,
        newPasswordErr: "Password must be at least 8 characters",
      }));
      hasError = true;
    }

    if (hasError) {
      setLoading(false);
      return;
    }

    // Submit request
    axios
      .post(
        "https://deluxefood.onrender.com/api/deluxefood/change-password-user",
        form
      )
      .then((res) => {
        console.log("Success:", res);
        setLoading(false);
        // Optional: navigate("/auth/login");
      })
      .catch((err) => {
        console.log("Error:", err.response?.data?.message);
        setLoading(false);
        setCredErr({
          invalidCred: err.response?.data?.message || "An error occurred",
        });
      });
  };

  return (
    <div className="text-xl self-center items-center mt-5">
      <h1 className="font-bold mb-8 text-center">Change Password</h1>
      <form
        onSubmit={handleSubmit}
        className="flex flex-col items-center text-base"
      >
        {credErr.invalidCred && (
          <span className="bg-red-500 text-white text-md mt-[-5px] rounded-lg text-center p-2 mb-4">
            {credErr.invalidCred}
          </span>
        )}

        <div className="flex flex-col text-left w-60 sm:w-70 md:w-80 lg:w-100">
          <label className="font-medium mb-1">Old Password</label>
          <input
            type="password"
            placeholder="Old password"
            className="border border-red-200 mb-2 p-2 rounded-lg"
            onChange={handleForm}
            value={form.oldPassword}
            name="oldPassword"
          />
          <span className="text-red-500 text-sm mb-2">
            {error.oldPasswordErr}
          </span>

          <label className="font-medium mb-1">New Password</label>
          <input
            type="password"
            placeholder="New password"
            className="border border-red-200 mb-2 p-2 rounded-lg"
            onChange={handleForm}
            value={form.newPassword}
            name="newPassword"
          />
          <span className="text-red-500 text-sm mb-2">
            {error.newPasswordErr}
          </span>

          <label className="font-medium mb-1">Confirm Password</label>
          <input
            type="password"
            placeholder="Confirm password"
            className="border border-red-200 mb-2 p-2 rounded-lg"
            onChange={handleForm}
            value={form.confirmPassword}
            name="confirmPassword"
          />
          <span className="text-red-500 text-sm mb-2">
            {error.confirmPasswordErr}
          </span>
        </div>

        <button
          type="submit"
          className="w-60 sm:w-70 md:w-80 lg:w-100 p-2 bg-gradient-to-r from-red-700 via-red-500 to-red-700 my-5 text-white rounded-lg"
        >
          {loading ? <BeatLoader color="white" size={10} /> : "Change Password"}
        </button>
      </form>
    </div>
  );
}

export default ChangePassword;
