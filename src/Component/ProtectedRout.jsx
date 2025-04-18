import React from "react";
import { Navigate } from "react-router-dom";

function ProtectedRout({ children }) {
  const isAuth = localStorage.getItem("isLoggedIn");
  if (!isAuth) return <Navigate to="/auth/login" />;
  return <div>{children}</div>;
}

export default ProtectedRout;
