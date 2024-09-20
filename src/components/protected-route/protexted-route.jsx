import React from "react";
import { Navigate } from "react-router-dom";
import Cookies from "js-cookie";
import { USER_ACCESS_KEY } from "../../constants/constants.js";

const ProtextedRoute = ({ children }) => {
  const isAuthenticated = Cookies.get(USER_ACCESS_KEY.ACCESS_TOKEN);
  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }
  return children;
};

export default ProtextedRoute;
