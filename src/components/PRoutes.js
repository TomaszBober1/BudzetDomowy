import React from "react";
import { Navigate } from "react-router-dom";
import { useUserAuth } from "../context/userAuthContext";

const PRoute = ({ children }) => {
  const { user } = useUserAuth();

  console.log("Check user in Private: ", user);
  if (!user || user===null || user==="") {
    return <Navigate to="/login" />;
  }
  console.log(user.uid);
  return children;
};

export default PRoute;