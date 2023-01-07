import React from "react";
import { Navigate } from "react-router-dom";
import { useUserAuth } from "../context/userAuthContext";

const LogRoute = ({ children }) => {
  const { user } = useUserAuth();

  
  if (user) {
    alert("You have to be logged to enter this site!");
    return <Navigate to="/home" />;
  }
  return children;
};

export default LogRoute;