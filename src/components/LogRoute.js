import React from "react";
import { Navigate } from "react-router-dom";
import { useUserAuth } from "../context/userAuthContext";
const LogRoute = ({ children }) => {
  const { user } = useUserAuth();

  console.log("Check if logged: ", user);
  if (user) {
    return <Navigate to="/home" />;
  }
  return children;
};

export default LogRoute;